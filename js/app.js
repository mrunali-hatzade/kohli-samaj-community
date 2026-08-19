/**
 * Core Application Controller for Kohli Samaj Web Portal
 * Handles rendering, language toggle, font resizer, ticker, search, and detail modals.
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initial State Loading — read persisted language from localStorage first
    let portalData = getPortalData();
    let currentLang = localStorage.getItem('ks_lang') || portalData.settings.currentLang || 'en';

    // 2. Initialize UI Components
    renderAll(portalData, currentLang);
    setupEventListeners();

    /**
     * Render all dynamic sections
     */
    function renderAll(data, lang) {
        renderTicker(data.notices, lang);
        renderStats(data.stats, lang);
        renderPillars(data.pillars, lang);
        renderTimeline(data.timeline, lang);
        renderFullTimeline(data.timeline, lang);
        renderDistricts(data.districts, lang);
        renderNews(data.news, lang);
        renderGallery(data.gallery, lang);
        updateStaticText(lang);
    }

    /**
     * Ticker Render
     */
    function renderTicker(notices, lang) {
        const tickerContainer = document.getElementById('tickerItems');
        if (!tickerContainer) return;

        let html = '';
        // Duplicate notices for seamless infinite animation loop
        const items = [...notices, ...notices];
        items.forEach(notice => {
            const title = lang === 'mr' ? notice.title_mr : notice.title_en;
            html += `<span class="ticker-item" onclick="openNoticeModal(${notice.id})">${title}</span>`;
        });
        tickerContainer.innerHTML = html;
    }

    /**
     * Stats Render (Exact replica of overview.png right widget)
     * Clickable stat rows opening detail modals
     */
    function renderStats(stats, lang) {
        const statsContainer = document.getElementById('statsContainer');
        if (!statsContainer) return;

        let html = '';
        stats.forEach((stat, idx) => {
            const label = lang === 'mr' ? stat.label_mr : stat.label_en;
            const note = lang === 'mr' ? stat.note_mr : stat.note_en;
            html += `
                <div class="stat-row" onclick="openStatDetailModal(${stat.id})">
                    <div class="stat-icon-circle">
                        <i class="fa-solid ${stat.icon}"></i>
                    </div>
                    <div class="stat-detail-text">
                        <div class="stat-main-num">${stat.number}</div>
                        <div class="stat-sub-label">${label}</div>
                        ${note ? `<div style="font-size:0.72rem; color:var(--text-muted); font-weight:600; margin-top:2px;">${note}</div>` : ''}
                    </div>
                    <div class="stat-chevron">
                        <i class="fa-solid fa-chevron-right"></i>
                    </div>
                </div>
            `;
        });
        statsContainer.innerHTML = html;
    }

    /**
     * Four Pillars Render (Multi-Page Navigation)
     */
    function renderPillars(pillars, lang) {
        const pillarsContainer = document.getElementById('pillarsGrid');
        if (!pillarsContainer) return;

        const pageMap = {
            'history': 'history.html',
            'water': 'water-heritage.html',
            'culture': 'culture.html',
            'documents': 'documents.html'
        };

        let html = '';
        pillars.forEach(pillar => {
            const title = lang === 'mr' ? pillar.title_mr : pillar.title_en;
            const desc = lang === 'mr' ? pillar.desc_mr : pillar.desc_en;
            const readMore = lang === 'mr' ? 'पुढे वाचा →' : 'Read More →';
            const pageUrl = pageMap[pillar.id] || 'history.html';

            html += `
                <div class="pillar-card">
                    <div class="pillar-img-box">
                        <a href="${pageUrl}">
                            <img src="${pillar.image}" alt="${title}" loading="lazy">
                        </a>
                    </div>
                    <div class="pillar-body">
                        <h3 class="pillar-title"><a href="${pageUrl}">${title}</a></h3>
                        <p class="pillar-desc">${desc}</p>
                        <a href="${pageUrl}" class="pillar-link">${readMore}</a>
                    </div>
                </div>
            `;
        });
        pillarsContainer.innerHTML = html;
    }

    /**
     * Historical Timeline Render (Homepage limited to 3 items for compact layout)
     */
    function renderTimeline(timeline, lang) {
        const timelineContainer = document.getElementById('timelineList');
        if (!timelineContainer) return;

        let html = '';
        const homeTimeline = timeline.slice(0, 3);
        homeTimeline.forEach(item => {
            const title = lang === 'mr' ? item.title_mr : item.title_en;
            html += `
                <div class="timeline-item" onclick="openTimelineModal(${item.id})" style="cursor:pointer;">
                    <span class="timeline-year">${item.year}</span>
                    <span class="timeline-title">${title}</span>
                </div>
            `;
        });
        timelineContainer.innerHTML = html;
    }

    function renderFullTimeline(timeline, lang) {
        const container = document.getElementById('timelineFullContainer');
        if (!container) return;

        let html = '';
        timeline.forEach(item => {
            const title = lang === 'mr' ? item.title_mr : item.title_en;
            const desc = lang === 'mr' ? item.desc_mr : item.desc_en;
            const category = lang === 'mr' ? item.category_mr : item.category_en;
            const source = lang === 'mr' ? item.source_mr : item.source_en;
            const icon = item.icon || 'fa-circle-dot';
            
            let sourceHtml = '';
            if (source) {
                const sourceLabel = lang === 'mr' ? 'स्रोत:' : 'Source:';
                sourceHtml = `<div style="margin-top:0.8rem; font-size:0.85rem; color:var(--text-muted);"><i class="fa-solid fa-book"></i> <strong>${sourceLabel}</strong> ${source}</div>`;
            }

            html += `
                <div style="background: white; border: 1.5px solid var(--border-color); border-radius: 12px; padding: 1.5rem; display: flex; gap: 1.5rem; align-items: flex-start; box-shadow: var(--shadow-sm);">
                    <div style="background: var(--accent-gold-light); border: 1.5px solid var(--accent-gold); color: var(--accent-gold-hover); font-weight: 800; font-size: 1.1rem; padding: 0.4rem 1rem; border-radius: 8px; flex-shrink: 0; min-width: 80px; text-align: center;">
                        ${item.year}
                    </div>
                    <div style="flex-grow: 1;">
                        <div style="margin-bottom:0.5rem;"><span style="display:inline-block; padding:0.2rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#f0f4ff; color:#3b5bdb; border:1px solid #bac8ff; text-transform:uppercase;"><i class="fa-solid ${icon}"></i> ${category}</span></div>
                        <h4 style="color: var(--primary-dark); font-weight: 800; font-size: 1.15rem; margin: 0 0 0.4rem 0;">${title}</h4>
                        <p style="color: var(--text-main); font-size: 0.98rem; line-height: 1.6; margin: 0;">${desc}</p>
                        ${sourceHtml}
                    </div>
                </div>
            `;
        });
        
        // Append the separate Historical Settlement Record
        const settlementTitle = lang === 'mr' ? 'ऐतिहासिक सेटलमेंट नोंद' : 'Historical Settlement Population Record';
        const settlementDesc = lang === 'mr' ? 
            'उपलब्ध ऐतिहासिक सेटलमेंट संदर्भात कोहळी/कोहरी लोकसंख्या 19,739 अशी नोंदवली आहे. प्रशासकीय सीमा आणि स्रोतांचे संदर्भ वेगळे आहेत; या ऐतिहासिक आकडेवारीची सध्याच्या जिल्हा लोकसंख्येशी थेट तुलना करू नये किंवा 1911 च्या 11,399 आकडेवारीसोबत थेट जोडू नये.' : 
            'Available historical settlement material records Kohli/Kohri population as 19,739 in the relevant Bhandara/Chanda settlement context. Historical administrative boundaries and source contexts differ; this figure should not be directly compared with current population figures or automatically combined with the 1911 figure of 11,399.';
        const breakdownTitle = lang === 'mr' ? 'विभागणी:' : 'Breakdown:';
        const addFigTitle = lang === 'mr' ? 'अतिरिक्त आकडेवारी (मूळ स्रोत):' : 'Additional figures in the supplied source:';
        
        html += `
            <div style="background: linear-gradient(to right, #fdfbfb, #ebedee); border: 2px solid #ced4da; border-radius: 12px; padding: 1.5rem; display: flex; gap: 1.5rem; align-items: flex-start; box-shadow: var(--shadow-sm); margin-top:1.5rem;">
                <div style="background: #e9ecef; border: 1.5px solid #adb5bd; color: #495057; font-weight: 800; font-size: 1.1rem; padding: 0.4rem 1rem; border-radius: 8px; flex-shrink: 0; min-width: 80px; text-align: center;">
                    Record
                </div>
                <div style="flex-grow: 1;">
                    <div style="margin-bottom:0.5rem;"><span style="display:inline-block; padding:0.2rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:700; background:#e6fcf5; color:#0ca678; border:1px solid #63e6be; text-transform:uppercase;"><i class="fa-solid fa-map"></i> Settlement Record</span></div>
                    <h4 style="color: var(--primary-dark); font-weight: 800; font-size: 1.15rem; margin: 0 0 0.4rem 0;">${settlementTitle}</h4>
                    <div style="font-size:2.5rem; font-weight:800; color:var(--primary-dark); margin:0.5rem 0;">19,739</div>
                    <p style="color: var(--text-main); font-size: 0.98rem; line-height: 1.6; margin: 0 0 1rem 0;">${settlementDesc}</p>
                    
                    <details style="background:white; border:1px solid var(--border-color); border-radius:6px; padding:0.8rem;">
                        <summary style="font-weight:700; color:var(--primary-dark); cursor:pointer;">${lang === 'mr' ? 'तपशील पहा' : 'View Details'}</summary>
                        <div style="margin-top:0.8rem; font-size:0.9rem; color:var(--text-main); display:flex; gap:2rem; flex-wrap:wrap;">
                            <div>
                                <strong>${breakdownTitle}</strong><br>
                                Bhandara — 12,097<br>
                                Chanda — 7,602
                            </div>
                            <div>
                                <strong>${addFigTitle}</strong><br>
                                Sakoli tehsil — 8,130<br>
                                Brahmapuri tehsil — 6,578
                            </div>
                        </div>
                    </details>
                </div>
            </div>
        `;
        
        // Append the Census 2027 Link Note
        html += `
            <div style="text-align:center; margin-top:2.5rem; padding:1.5rem; border-top:1px dashed var(--border-color);">
                <a href="census.html" class="btn-gold-fill" style="display:inline-flex; align-items:center; gap:0.5rem; padding:0.6rem 1.2rem; font-size:0.95rem; border-radius:6px; font-weight:700; text-decoration:none;">
                    <i class="fa-solid fa-users"></i> ${lang === 'mr' ? 'वर्तमान जनगणना माहिती → जनगणना नोंदी' : 'Current Census Information → Census Records'}
                </a>
            </div>
        `;

        container.innerHTML = html;
    }

    /**
     * Geographic Districts Render
     */
    function renderDistricts(districts, lang) {
        const districtsContainer = document.getElementById('districtsGrid');
        if (!districtsContainer) return;

        let html = '';
        districts.forEach(dist => {
            const name = lang === 'mr' ? dist.name_mr : dist.name_en;
            html += `
                <div class="district-circle-item" onclick="openDistrictModal(${dist.id})">
                    <div class="district-img-frame">
                        <img src="${dist.image}" alt="${name}" loading="lazy">
                    </div>
                    <div class="district-name">${name}</div>
                </div>
            `;
        });
        districtsContainer.innerHTML = html;
    }

    /**
     * News & Updates Render
     */
    function renderNews(newsItems, lang) {
        const newsContainer = document.getElementById('newsList');
        if (!newsContainer) return;

        let html = '';
        newsItems.forEach(news => {
            const month = lang === 'mr' ? news.month_mr : news.month_en;
            const title = lang === 'mr' ? news.title_mr : news.title_en;
            const sub = lang === 'mr' ? news.subtitle_mr : news.subtitle_en;

            html += `
                <div class="news-card-mini" onclick="openNewsModal(${news.id})">
                    <div class="date-box">
                        <div class="date-day">${news.day}</div>
                        <div class="date-month">${month}</div>
                    </div>
                    <div class="news-info">
                        <div class="news-heading">${title}</div>
                        <div class="news-sub">${sub}</div>
                    </div>
                </div>
            `;
        });
        newsContainer.innerHTML = html;
    }

    /**
     * Photo Gallery Render
     */
    function renderGallery(galleryItems, lang) {
        const galleryContainer = document.getElementById('galleryMiniGrid');
        if (!galleryContainer) return;

        let html = '';
        galleryItems.slice(0, 6).forEach(item => {
            const caption = lang === 'mr' ? item.caption_mr : item.caption_en;
            html += `
                <div class="gallery-thumb" onclick="openGalleryLightbox('${item.image}', '${caption}')">
                    <img src="${item.image}" alt="${caption}" loading="lazy">
                </div>
            `;
        });
        galleryContainer.innerHTML = html;
    }

    /**
     * Language Switcher for static elements — only target leaf elements so <i> icons are preserved
     */
    function updateStaticText(lang) {
        document.querySelectorAll('[data-lang-en]').forEach(elem => {
            if (elem.children.length === 0) {
                elem.textContent = lang === 'mr' ? elem.getAttribute('data-lang-mr') : elem.getAttribute('data-lang-en');
            }
        });
    }

    /**
     * Setup Event Listeners (Language, Font resizer, Modals)
     */
    function setupEventListeners() {
        // Language Buttons
        document.getElementById('btnLangEn')?.addEventListener('click', () => switchLanguage('en'));
        document.getElementById('btnLangMr')?.addEventListener('click', () => switchLanguage('mr'));

        // Font Resizer Buttons
        document.getElementById('btnFontSm')?.addEventListener('click', () => changeFontSize('small'));
        document.getElementById('btnFontMd')?.addEventListener('click', () => changeFontSize('normal'));
        document.getElementById('btnFontLg')?.addEventListener('click', () => changeFontSize('large'));

        // Mobile Nav Toggle
        document.getElementById('mobileNavToggle')?.addEventListener('click', () => {
            const nav = document.getElementById('mainNav');
            nav?.classList.toggle('active');
        });

        // Search Form Submission
        document.getElementById('topSearchForm')?.addEventListener('submit', (e) => {
            e.preventDefault();
            const query = document.getElementById('searchInput')?.value.trim();
            if (query) {
                alert(`Search functionality: Querying "${query}". Integration ready for .NET API search endpoint.`);
            }
        });
    }

    function switchLanguage(lang) {
        currentLang = lang;
        portalData.settings.currentLang = lang;
        savePortalData(portalData);
        localStorage.setItem('ks_lang', lang); // persist for nav.js and other pages

        document.getElementById('btnLangEn')?.classList.toggle('active', lang === 'en');
        document.getElementById('btnLangMr')?.classList.toggle('active', lang === 'mr');

        renderAll(portalData, lang);
    }

    function changeFontSize(size) {
        document.body.classList.remove('font-small', 'font-normal', 'font-large');
        document.body.classList.add(`font-${size}`);

        document.getElementById('btnFontSm')?.classList.toggle('active', size === 'small');
        document.getElementById('btnFontMd')?.classList.toggle('active', size === 'normal');
        document.getElementById('btnFontLg')?.classList.toggle('active', size === 'large');
    }

    // Modal Global Functions
    window.openModal = function(title, contentHtml) {
        const modalTitle = document.getElementById('modalTitle');
        const modalBody = document.getElementById('modalBody');
        const modalOverlay = document.getElementById('modalOverlay');

        if (modalTitle) modalTitle.innerHTML = title;
        if (modalBody) modalBody.innerHTML = contentHtml;
        if (modalOverlay) modalOverlay.classList.add('active');
    };

    window.closeModal = function() {
        const modalOverlay = document.getElementById('modalOverlay');
        if (modalOverlay) modalOverlay.classList.remove('active');
    };

    // Close modal on click outside
    document.getElementById('modalOverlay')?.addEventListener('click', (e) => {
        if (e.target.id === 'modalOverlay') closeModal();
    });

    // Detail Modal Handlers
    window.openNoticeModal = function(noticeId) {
        const notice = portalData.notices.find(n => n.id === noticeId);
        if (!notice) return;
        const title = currentLang === 'mr' ? notice.title_mr : notice.title_en;
        const details = currentLang === 'mr' ? notice.details_mr : notice.details_en;

        openModal(title, `
            <div style="font-size: 0.95rem;">
                <p style="margin-bottom: 0.8rem; color: var(--accent-gold-hover); font-weight: 700;">
                    <i class="fa-solid fa-calendar-days"></i> ${notice.date} | <i class="fa-solid fa-location-dot"></i> ${notice.location}
                </p>
                <p style="line-height: 1.6; color: var(--text-main);">${details}</p>
                <div style="margin-top: 1.5rem; text-align: right;">
                    <button class="btn-primary" onclick="closeModal()">Close</button>
                </div>
            </div>
        `);
    };

    window.openPillarModal = function(pillarId) {
        const pillar = portalData.pillars.find(p => p.id === pillarId);
        if (!pillar) return;
        const title = currentLang === 'mr' ? pillar.title_mr : pillar.title_en;
        const desc = currentLang === 'mr' ? pillar.desc_mr : pillar.desc_en;

        openModal(title, `
            <div>
                <img src="${pillar.image}" style="width: 100%; max-height: 250px; object-fit: cover; border-radius: 8px; margin-bottom: 1rem;">
                <p style="line-height: 1.6; font-size: 0.95rem;">${desc}</p>
                <p style="margin-top: 1rem; font-size: 0.85rem; color: var(--text-muted);">
                    Historical details & archival material for Kohli Samaj heritage.
                </p>
            </div>
        `);
    };

    window.openTimelineModal = function(id) {
        const item = portalData.timeline.find(t => t.id === id);
        if (!item) return;
        const title = currentLang === 'mr' ? item.title_mr : item.title_en;
        const desc = currentLang === 'mr' ? item.desc_mr : item.desc_en;

        openModal(`${item.year} - ${title}`, `
            <div>
                <span class="hero-badge" style="margin-bottom:0.8rem;">Historical Gazetteer Record</span>
                <p style="font-size: 0.95rem; line-height: 1.6; margin-top: 0.5rem;">${desc}</p>
            </div>
        `);
    };

    window.openDistrictModal = function(id) {
        window.location.href = 'districts.html';
    };

    window.openNewsModal = function(id) {
        const news = portalData.news.find(n => n.id === id);
        if (!news) return;
        const title = currentLang === 'mr' ? news.title_mr : news.title_en;
        const details = currentLang === 'mr' ? news.details_mr : news.details_en;

        openModal(title, `
            <div>
                <p style="font-weight: bold; color: var(--accent-gold); margin-bottom: 0.8rem;">
                    ${news.day} ${news.month_en} 2026
                </p>
                <p style="line-height: 1.6;">${details}</p>
            </div>
        `);
    };

    // Stat Widget Detail Modal Handler
    window.openStatDetailModal = function(statId) {
        if (statId === 1) {
            // 518+ Villages
            const title = currentLang === 'mr' ? '५१८+ गावे - समृद्ध ग्राम नेटवर्क' : '518+ Villages - Rural Network';
            openModal(title, `
                <div>
                    <h4 style="color:var(--accent-gold-hover); margin-bottom:0.8rem;">
                        <i class="fa-solid fa-house-chimney"></i> ${currentLang === 'mr' ? 'कोहळी समाजाची ५१८+ समृद्ध गावे' : '518+ Villages of Kohli Community'}
                    </h4>
                    <p style="line-height:1.6; font-size:0.95rem; margin-bottom:1rem;">
                        ${currentLang === 'mr' 
                            ? 'भंडारा, गोंदिया, गडचिरोली, चंद्रपूर आणि बालाघाट या ५ प्रमुख जिल्ह्यांमध्ये कोहळी समाजाची ५१८ हून अधिक गावे वसलेली आहेत. या गावांमध्ये पिढ्यानपिढ्या जलसंवर्धन, शेती व समाज संस्कृती जपली आहे.' 
                            : 'Over 518 villages across Bhandara, Gondia, Gadchiroli, Chandrapur, and Balaghat form the core agricultural and cultural backbone of the Kohli Samaj.'}
                    </p>
                    <div style="background:var(--bg-cream); padding:1rem; border-radius:8px; border:1px solid var(--border-color);">
                        <strong style="color:var(--primary-dark);">${currentLang === 'mr' ? 'प्रमुख वैशिष्ट्ये:' : 'Key Village Highlights:'}</strong>
                        <ul style="margin-top:0.5rem; padding-left:1.2rem; font-size:0.9rem; line-height:1.6;">
                            <li>${currentLang === 'mr' ? 'ऐतिहासिक माalguzari तलाव व सिंचन बंधारे' : 'Historic Malguzari Water Tanks & Irrigation Dams'}</li>
                            <li>${currentLang === 'mr' ? 'उत्कृष्ट सेंद्रिय व पारंपरिक भात शेती' : 'High Quality Paddy & Organic Farming'}</li>
                            <li>${currentLang === 'mr' ? 'स्थानिक ग्रामपंचायत व युवा विकास मंडळ' : 'Local Village Panchayats & Youth Organizations'}</li>
                        </ul>
                    </div>
                </div>
            `);
        } else if (statId === 2) {
            // 5 Key Districts
            openDistrictModal(1);
        } else if (statId === 3) {
            // Lakhs+ Community Members
            const title = currentLang === 'mr' ? 'लाखो+ समाज बांधव' : 'Lakhs+ Community Members';
            openModal(title, `
                <div>
                    <h4 style="color:var(--accent-gold-hover); margin-bottom:0.8rem;">
                        <i class="fa-solid fa-users"></i> ${currentLang === 'mr' ? 'कोहळी समाज लोकसंख्या व नेटवर्क' : 'Kohli Community Population & Network'}
                    </h4>
                    <p style="line-height:1.6; font-size:0.95rem; margin-bottom:1rem;">
                        ${currentLang === 'mr'
                            ? 'महाराष्ट्र व शेजारील राज्यांमध्ये पसरलेले लाखो कोहळी समाज बांधव विविध सामाजिक, शैक्षणिक आणि सांस्कृतिक उपक्रमांमध्ये सक्रिय सहभाग नोंदवतात.'
                            : 'Lakhs of Kohli community members spread across Maharashtra and neighboring regions are connected through social forums, educational scholarship programs, and matrimonial networks.'}
                    </p>
                    <div style="text-align:center; margin-top:1.2rem;">
                        <button class="btn-primary" onclick="openAdminModal()">
                            <i class="fa-solid fa-user-plus"></i> ${currentLang === 'mr' ? 'सभासद नोंदणी करा' : 'Register Community Membership'}
                        </button>
                    </div>
                </div>
            `);
        } else if (statId === 4) {
            // Cities
            const title = currentLang === 'mr' ? 'नागपूर, पुणे, मुंबई आणि इतर शहरे' : 'Nagpur, Pune, Mumbai & Urban Associations';
            openModal(title, `
                <div>
                    <h4 style="color:var(--accent-gold-hover); margin-bottom:0.8rem;">
                        <i class="fa-solid fa-city"></i> ${currentLang === 'mr' ? 'शहरी समाज शाखा व वसतिगृहे' : 'Urban Chapters, Hostels & Associations'}
                    </h4>
                    <p style="line-height:1.6; font-size:0.95rem; margin-bottom:1rem;">
                        ${currentLang === 'mr'
                            ? 'नागपूर, पुणे, मुंबई, ठाणे आणि नाशिक सारख्या प्रमुख शहरांमध्ये नोकरी व उच्च शिक्षणासाठी राहणाऱ्या समाज बांधवांसाठी शहर शाखा व मदत केंद्र कार्यरत आहेत.'
                            : 'Active city chapters in metropolitan areas like Nagpur, Pune, Mumbai, Thane, and Nashik provide student hostels, career guidance centers, and family support networks.'}
                    </p>
                    <div style="background:var(--bg-sand); padding:0.8rem; border-radius:8px; font-size:0.88rem; color:var(--primary-dark); margin-top:1rem;">
                        <i class="fa-solid fa-phone"></i> ${currentLang === 'mr' ? 'शहरी संपर्क हेल्पलाइन' : 'Urban Association Contact'}: <strong>+91 12345 67890</strong>
                    </div>
                </div>
            `);
        }
    };

    window.openGalleryLightbox = function(imageSrc, caption) {
        openModal(caption, `
            <div style="text-align:center;">
                <img src="${imageSrc}" style="max-width:100%; max-height:60vh; border-radius:8px; box-shadow:var(--shadow-md);">
                <p style="margin-top:0.8rem; font-weight:600; color:var(--primary-dark);">${caption}</p>
            </div>
        `);
    };

    // History Sidebar Sub-link Smooth Scroll Controller (Only for same-page section links)
    const sidebarSubLinks = document.querySelectorAll('.sidebar-sub-link');
    sidebarSubLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('data-scroll');
            const targetEl = targetId ? document.getElementById(targetId) : null;
            if (targetEl) {
                e.preventDefault();
                targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
                document.querySelectorAll('.sidebar-sub-link').forEach(l => l.classList.remove('active'));
                link.classList.add('active');
                const parentLi = link.closest('#historySidebarNav > li');
                if (parentLi) {
                    parentLi.classList.add('expanded');
                }
            }
        });
    });

    // Listen for language changes dispatched by nav.js
    document.addEventListener('langChange', (e) => {
        const lang = e.detail.lang;
        currentLang = lang;
        renderAll(portalData, lang);
    });
});
