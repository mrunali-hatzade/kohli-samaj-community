/**
 * nav.js — Kohli Samaj Navigation Controller
 * Handles: Dropdown menus, Mobile accordion, Language toggle persistence,
 *          Hamburger animation, Keyboard accessibility, Click-outside close,
 *          and unambiguous active link detection.
 */

(function () {
    'use strict';

    // Auto-redirect from history.html to history_clean.html if opened
    if (window.location.pathname.endsWith('/history.html') || window.location.pathname.endsWith('history.html')) {
        window.location.replace('history_clean.html' + window.location.hash);
        return;
    }

    document.addEventListener('DOMContentLoaded', function () {

        /* ------------------------------------------------------------------ */
        /* 1. ELEMENT REFS                                                     */
        /* ------------------------------------------------------------------ */
        const mobileToggle    = document.getElementById('mobileNavToggle');
        const navBar          = document.querySelector('.nav-bar');
        const dropdownParents = document.querySelectorAll('.has-dropdown');
        const btnLangEn       = document.getElementById('btnLangEn');
        const btnLangMr       = document.getElementById('btnLangMr');

        /* ------------------------------------------------------------------ */
        /* 2. LANGUAGE PERSISTENCE                                             */
        /*    Only replace leaf node textContent (never wipe child <i> icons!)  */
        /* ------------------------------------------------------------------ */
        const savedLang = localStorage.getItem('ks_lang') || 'en';
        applyLanguage(savedLang, false);

        if (btnLangEn) {
            btnLangEn.addEventListener('click', function () {
                applyLanguage('en', true);
            });
        }
        if (btnLangMr) {
            btnLangMr.addEventListener('click', function () {
                applyLanguage('mr', true);
            });
        }

        function applyLanguage(lang, save) {
            if (btnLangEn) btnLangEn.classList.toggle('active', lang === 'en');
            if (btnLangMr) btnLangMr.classList.toggle('active', lang === 'mr');

            // Translate ONLY leaf elements (no element children) so <i> icons are preserved
            document.querySelectorAll('[data-lang-en]').forEach(function (el) {
                if (el.children.length === 0) {
                    const enText = el.getAttribute('data-lang-en');
                    const mrText = el.getAttribute('data-lang-mr');
                    if (lang === 'mr' && mrText) {
                        el.textContent = mrText;
                    } else if (enText) {
                        el.textContent = enText;
                    }
                }
            });

            // Also update inputs
            document.querySelectorAll('[data-lang-en-placeholder]').forEach(function (el) {
                const enPh = el.getAttribute('data-lang-en-placeholder');
                const mrPh = el.getAttribute('data-lang-mr-placeholder');
                el.placeholder = (lang === 'mr' && mrPh) ? mrPh : enPh;
            });

            document.documentElement.lang = lang === 'mr' ? 'mr' : 'en';

            if (save) {
                localStorage.setItem('ks_lang', lang);
            }

            // Dispatch custom event for dynamic components (like Gazetteers and Documents) to re-render bilingually
            const event = new CustomEvent('langChange', { detail: { lang: lang } });
            document.dispatchEvent(event);
        }

        // Export for global usage if needed
        window.switchLanguage = function(lang) {
            applyLanguage(lang, true);
        };

        /* ------------------------------------------------------------------ */
        /* 3. HAMBURGER TOGGLE (Mobile)                                        */
        /* ------------------------------------------------------------------ */
        var mobileOpen = false;

        if (mobileToggle && navBar) {
            mobileToggle.addEventListener('click', function (e) {
                e.stopPropagation();
                mobileOpen = !mobileOpen;
                navBar.classList.toggle('mobile-open', mobileOpen);
                var icon = mobileToggle.querySelector('i');
                if (icon) {
                    icon.classList.toggle('fa-bars', !mobileOpen);
                    icon.classList.toggle('fa-xmark', mobileOpen);
                }
            });
        }

        /* ------------------------------------------------------------------ */
        /* 4. DROPDOWN TOGGLE — Click to pin open (Desktop & Mobile)           */
        /*    Stays open until and unless user clicks somewhere else           */
        /* ------------------------------------------------------------------ */
        dropdownParents.forEach(function (parent) {
            var toggle = parent.querySelector(':scope > .nav-link');

            if (toggle) {
                toggle.addEventListener('click', function (e) {
                    var isChevron = e.target.classList.contains('nav-chevron') || e.target.closest('.nav-chevron');
                    var href = toggle.getAttribute('href');

                    if (isChevron || href === '#' || !href) {
                        e.preventDefault();
                        e.stopPropagation();

                        var isAlreadyOpen = parent.classList.contains('open');

                        // Close all other open dropdowns
                        dropdownParents.forEach(function (p) {
                            if (p !== parent) p.classList.remove('open');
                        });

                        // Toggle current dropdown: stays open until click outside
                        parent.classList.toggle('open', !isAlreadyOpen);
                    }
                });
            }
        });

        /* ------------------------------------------------------------------ */
        /* 5. CLICK OUTSIDE — closes all open dropdowns and mobile panel       */
        /* ------------------------------------------------------------------ */
        document.addEventListener('click', function (e) {
            // Close dropdowns if click is outside of the open dropdown parent
            if (!e.target.closest('.has-dropdown')) {
                dropdownParents.forEach(function (p) {
                    p.classList.remove('open');
                });
            }

            // Close mobile menu if clicked outside header
            if (mobileOpen && navBar && !navBar.contains(e.target) && (!mobileToggle || !mobileToggle.contains(e.target))) {
                mobileOpen = false;
                navBar.classList.remove('mobile-open');
                var icon = mobileToggle ? mobileToggle.querySelector('i') : null;
                if (icon) {
                    icon.classList.add('fa-bars');
                    icon.classList.remove('fa-xmark');
                }
            }
        });

        /* ------------------------------------------------------------------ */
        /* 6. KEYBOARD NAVIGATION                                              */
        /* ------------------------------------------------------------------ */
        dropdownParents.forEach(function (parent) {
            var toggle = parent.querySelector(':scope > .nav-link');
            if (toggle) {
                toggle.addEventListener('keydown', function (e) {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        var isOpen = parent.classList.contains('open');
                        dropdownParents.forEach(function (p) { p.classList.remove('open'); });
                        parent.classList.toggle('open', !isOpen);
                    }
                    if (e.key === 'Escape') {
                        parent.classList.remove('open');
                        toggle.focus();
                    }
                });
            }

            var links = parent.querySelectorAll('.dropdown-link');
            links.forEach(function (link) {
                link.addEventListener('keydown', function (e) {
                    if (e.key === 'Escape') {
                        parent.classList.remove('open');
                        var t = parent.querySelector(':scope > .nav-link');
                        if (t) t.focus();
                    }
                });
            });
        });

        /* ------------------------------------------------------------------ */
        /* 7. RESIZE LISTENER                                                 */
        /* ------------------------------------------------------------------ */
        window.addEventListener('resize', function () {
            if (window.innerWidth > 768) {
                mobileOpen = false;
                if (navBar) navBar.classList.remove('mobile-open');
                var icon = mobileToggle ? mobileToggle.querySelector('i') : null;
                if (icon) {
                    icon.classList.add('fa-bars');
                    icon.classList.remove('fa-xmark');
                }
            }
        });

        /* ------------------------------------------------------------------ */
        /* 8. PRECISE ACTIVE LINK DETECTION (No double highlight bug)          */
        /* ------------------------------------------------------------------ */
        var currentPage = window.location.pathname.split('/').pop() || 'index.html';
        if (currentPage === '') currentPage = 'index.html';

        // Clear any existing active classes first
        document.querySelectorAll('.nav-link.active, .dropdown-link.active').forEach(function (el) {
            el.classList.remove('active');
        });

        // 1. First priority: Check exact top-level nav links
        var topMatched = false;
        document.querySelectorAll('.nav-menu > li:not(.has-dropdown) > .nav-link').forEach(function (link) {
            var href = link.getAttribute('href');
            if (href && href !== '#' && href === currentPage) {
                link.classList.add('active');
                topMatched = true;
            }
        });

        // 2. Second priority: If not a direct top-level link, check dropdown items
        if (!topMatched) {
            document.querySelectorAll('.dropdown-link').forEach(function (link) {
                var href = link.getAttribute('href');
                if (href && href !== '#' && href === currentPage) {
                    link.classList.add('active');
                    // Activate parent dropdown link
                    var parentLi = link.closest('.has-dropdown');
                    if (parentLi) {
                        var parentLink = parentLi.querySelector(':scope > .nav-link');
                        if (parentLink) parentLink.classList.add('active');
                    }
                }
            });
        }

        /* ------------------------------------------------------------------ */
        /* 9. HISTORY SIDEBAR ACCORDION BEHAVIOR                              */
        /*    1st Click: Expands sub-bar so user can explore on current page.  */
        /*    2nd Click (when expanded): Navigates to that page!               */
        /* ------------------------------------------------------------------ */
        var sidebarMainLinks = document.querySelectorAll('.history-sidebar-nav .sidebar-main-link');
        sidebarMainLinks.forEach(function (link) {
            link.addEventListener('click', function (e) {
                var li = link.closest('li');
                if (!li) return;

                var hasSubList = li.querySelector('.sidebar-sub-list') !== null;
                var isExpanded = li.classList.contains('expanded');

                if (hasSubList && !isExpanded) {
                    // First click: expand sub-bar while staying on current page (zero scrolling)
                    e.preventDefault();
                    e.stopPropagation();

                    // Collapse sibling items for clean accordion
                    var siblings = li.parentElement.querySelectorAll(':scope > li');
                    siblings.forEach(function (sibling) {
                        if (sibling !== li) {
                            sibling.classList.remove('expanded');
                        }
                    });

                    li.classList.add('expanded');
                }
                // Second click (when already expanded): proceed with navigation to page!
            });
        });

    }); // end DOMContentLoaded

})();
