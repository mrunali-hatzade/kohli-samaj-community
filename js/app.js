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
        renderDistrictsPage(data.districts, lang);
        renderNews(data.news, lang);
        renderNewsPage(data.notices || data.news || [], lang);
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
     * Districts Page Controller (districts.html)
     * Features: interactive district tabs, overview with verification note,
     * and live search filter across villages and historic water tanks.
     * Note: Dummy representatives and unverified phone numbers are strictly suppressed.
     */
    function renderDistrictsPage(districts, lang) {
        const tabContainer = document.getElementById('districtTabContainer');
        const detailView = document.getElementById('districtDetailView');
        const villagesContainer = document.getElementById('villagesListContainer');
        if (!tabContainer || !detailView || !villagesContainer || !districts || districts.length === 0) return;

        window._selectedDistrictId = window._selectedDistrictId || districts[0].id;
        const activeDist = districts.find(d => d.id === window._selectedDistrictId) || districts[0];

        // 1. Render Tab Buttons
        let tabsHtml = '';
        districts.forEach(dist => {
            const isActive = dist.id === activeDist.id;
            const name = lang === 'mr' ? dist.name_mr : dist.name_en;
            tabsHtml += `
                <button type="button" class="btn-tab ${isActive ? 'active' : ''}" 
                    onclick="selectDistrict(${dist.id})"
                    style="padding:0.7rem 1.4rem; border-radius:30px; font-weight:700; font-size:0.95rem; cursor:pointer; white-space:nowrap; border:1.5px solid ${isActive ? 'var(--primary-dark)' : 'var(--border-color)'}; background:${isActive ? 'var(--primary-dark)' : 'white'}; color:${isActive ? 'white' : 'var(--text-color)'}; transition:all 0.2s ease; display:inline-flex; align-items:center; gap:0.4rem;">
                    <i class="fa-solid fa-location-dot" style="color:${isActive ? 'var(--accent-gold)' : 'var(--accent-gold-hover)'};"></i>
                    ${name}
                </button>
            `;
        });
        tabContainer.innerHTML = tabsHtml;

        // 2. Render Active District Details
        const distName = lang === 'mr' ? activeDist.name_mr : activeDist.name_en;
        const distSub = lang === 'mr' ? activeDist.subtitle_mr : activeDist.subtitle_en;
        const distDesc = lang === 'mr' ? activeDist.desc_mr : activeDist.desc_en;
        const estVillages = activeDist.villages_count || (activeDist.villages ? activeDist.villages.length : 0);
        const estTanks = activeDist.tanks_count || 'शेकडो';

        detailView.innerHTML = `
            <div style="background:white; border:1px solid var(--border-color); border-radius:14px; padding:2rem; box-shadow:0 4px 20px rgba(0,0,0,0.04); margin-bottom:2rem;">
                <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:0.75rem; flex-wrap:wrap; gap:0.75rem;">
                    <div>
                        <h2 style="color:var(--primary-dark); font-size:1.8rem; font-weight:800; margin:0 0 0.3rem 0;">${distName}</h2>
                        <span style="background:var(--bg-sand); color:var(--primary-dark); padding:0.3rem 0.8rem; border-radius:20px; font-size:0.85rem; font-weight:700;">
                            ${distSub}
                        </span>
                    </div>
                </div>
                <p style="color:#495057; line-height:1.7; font-size:0.98rem; margin:0.8rem 0 1.5rem 0; max-width:850px;">
                    ${distDesc}
                </p>
                
                <div style="display:flex; gap:2.5rem; flex-wrap:wrap; margin-bottom:1.2rem;">
                    <div style="display:flex; align-items:center; gap:0.8rem;">
                        <div style="width:46px; height:46px; border-radius:10px; background:rgba(212,160,23,0.15); display:flex; align-items:center; justify-content:center; color:var(--accent-gold-hover); font-size:1.25rem;">
                            <i class="fa-solid fa-house-chimney"></i>
                        </div>
                        <div>
                            <div style="font-size:1.4rem; font-weight:800; color:var(--primary-dark); line-height:1.1;">${estVillages}*</div>
                            <div style="font-size:0.8rem; color:var(--text-muted); font-weight:600;">${lang === 'mr' ? 'नोंदणीकृत गावे' : 'Reported Villages'}</div>
                        </div>
                    </div>
                    <div style="display:flex; align-items:center; gap:0.8rem;">
                        <div style="width:46px; height:46px; border-radius:10px; background:rgba(42,127,186,0.12); display:flex; align-items:center; justify-content:center; color:#2a7fba; font-size:1.25rem;">
                            <i class="fa-solid fa-water"></i>
                        </div>
                        <div>
                            <div style="font-size:1.4rem; font-weight:800; color:var(--primary-dark); line-height:1.1;">${estTanks}*</div>
                            <div style="font-size:0.8rem; color:var(--text-muted); font-weight:600;">${lang === 'mr' ? 'मालगुजारी तलाव' : 'Malguzari Tanks'}</div>
                        </div>
                    </div>
                </div>

                <!-- Verification disclaimer -->
                <div style="font-size:0.82rem; color:#856404; background:#fff3cd; border-left:3px solid #ffc107; padding:0.65rem 0.95rem; border-radius:4px; line-height:1.5;">
                    <i class="fa-solid fa-circle-info" style="margin-right:0.35rem;"></i>
                    ${lang === 'mr' ? '* आकडेवारी व गाव सूची ही समाज-नोंदणीकृत माहितीवर आधारित असून गॅझेटिअर व महसूल नोंदींद्वारे पडताळणी सुरू आहे.' : '* Figures and village listings are community-reported estimates currently undergoing historical and gazetteer verification.'}
                </div>
            </div>
        `;

        // 3. Render Village Cards
        const searchInput = document.getElementById('villageSearchInput');
        const query = searchInput ? searchInput.value.trim().toLowerCase() : '';
        const listToRender = query 
            ? (activeDist.villages || []).filter(v => 
                (v.name_en && v.name_en.toLowerCase().includes(query)) ||
                (v.name_mr && v.name_mr.toLowerCase().includes(query)) ||
                (v.tank_en && v.tank_en.toLowerCase().includes(query)) ||
                (v.tank_mr && v.tank_mr.toLowerCase().includes(query)))
            : (activeDist.villages || []);

        villagesContainer.innerHTML = renderVillageCardsHtml(listToRender, distName, lang);
    }

    function renderVillageCardsHtml(villages, distName, lang) {
        if (!villages || villages.length === 0) {
            return `
                <div style="grid-column: 1 / -1; text-align:center; padding:3rem 1rem; background:white; border-radius:12px; border:1px dashed var(--border-color); color:var(--text-muted);">
                    <i class="fa-solid fa-magnifying-glass" style="font-size:2rem; margin-bottom:0.8rem; color:var(--accent-gold);"></i>
                    <p style="margin:0; font-size:0.95rem;">${lang === 'mr' ? 'या शोधाशी जुळणारे गाव आढळले नाही.' : 'No matching villages found in this district directory.'}</p>
                </div>
            `;
        }
        return villages.map(v => {
            const vName = lang === 'mr' ? v.name_mr : v.name_en;
            const vTank = lang === 'mr' ? (v.tank_mr || 'मालगुजारी जलव्यवस्था') : (v.tank_en || 'Malguzari Water System');
            return `
                <div class="village-card" style="background:white; border:1px solid var(--border-color); border-radius:10px; padding:1.2rem 1.4rem; display:flex; justify-content:space-between; align-items:center; box-shadow:0 2px 8px rgba(0,0,0,0.03);">
                    <div>
                        <h4 style="color:var(--primary-dark); font-weight:700; margin:0 0 0.3rem 0; font-size:1.05rem;">
                            <i class="fa-solid fa-location-dot" style="color:var(--accent-gold); margin-right:0.4rem;"></i>
                            ${vName}
                        </h4>
                        <div style="font-size:0.85rem; color:#555;">
                            <i class="fa-solid fa-droplet" style="color:#2a7fba; margin-right:0.3rem;"></i>
                            ${vTank}
                        </div>
                    </div>
                    <span class="badge" style="background:var(--bg-sand); color:var(--primary-dark); padding:0.35rem 0.75rem; border-radius:6px; font-size:0.8rem; font-weight:700; white-space:nowrap;">
                        ${distName}
                    </span>
                </div>
            `;
        }).join('');
    }

    // Global district tab selector
    window.selectDistrict = function(distId) {
        window._selectedDistrictId = distId;
        const searchInput = document.getElementById('villageSearchInput');
        if (searchInput) searchInput.value = '';
        renderDistrictsPage(portalData.districts, currentLang);
    };

    // Live search filter across village name and water tank
    window.filterVillages = function() {
        const villagesContainer = document.getElementById('villagesListContainer');
        if (!villagesContainer || !portalData.districts) return;
        renderDistrictsPage(portalData.districts, currentLang);
    };

    /**
     * News & Circulars Page Controller (news.html)
     * Two-Column Portal Layout inspired by modern community gazettes
     */
    window._selectedNewsCategory = 'all';
    window._newsSearchQuery = '';

    function renderNewsPage(newsItems, lang) {
        const featuredContainer = document.getElementById('newsFeaturedCard');
        const storiesContainer = document.getElementById('newsStoriesGrid');
        const bulletinContainer = document.getElementById('newsBulletinList');
        const countBadge = document.getElementById('newsFilterCount');
        const fullNewsContainer = document.getElementById('fullNewsList');

        const allItems = (portalData && portalData.notices && portalData.notices.length > 0) ? portalData.notices : (newsItems || []);
        
        // Backward-compatible fallback for fullNewsList if news-layout-wrapper is not present
        if (!featuredContainer || !storiesContainer) {
            if (fullNewsContainer) {
                fullNewsContainer.style.display = 'flex';
                if (!allItems || allItems.length === 0) {
                    fullNewsContainer.innerHTML = `<div style="text-align:center; padding:3rem; color:var(--text-muted);">${lang === 'mr' ? 'कोणतीही सूचना उपलब्ध नाही' : 'No announcements published'}</div>`;
                    return;
                }
                fullNewsContainer.innerHTML = allItems.map(item => {
                    const t = lang === 'mr' ? item.title_mr : item.title_en;
                    const d = (lang === 'mr' && item.details_mr) ? item.details_mr : item.details_en;
                    return `<div class="news-full-card" style="background:white; border-radius:10px; border:1px solid var(--border-color); padding:1.5rem; margin-bottom:1rem;"><h3 style="color:var(--primary-dark);">${t}</h3><p>${d}</p></div>`;
                }).join('');
            }
            return;
        }

        if (!allItems || allItems.length === 0) {
            featuredContainer.innerHTML = `
                <div style="text-align:center; padding:3rem; background:white; border-radius:12px; border:1px dashed var(--border-color); color:var(--text-muted);">
                    <i class="fa-solid fa-newspaper" style="font-size:2.5rem; color:var(--accent-gold); margin-bottom:1rem;"></i>
                    <h3 style="color:var(--primary-dark);">${lang === 'mr' ? 'कोणतीही नवीन सूचना उपलब्ध नाही' : 'No announcements currently published'}</h3>
                </div>
            `;
            storiesContainer.innerHTML = '';
            if (bulletinContainer) bulletinContainer.innerHTML = '';
            return;
        }

        // Apply Category and Search filters
        const activeCat = window._selectedNewsCategory || 'all';
        const query = (window._newsSearchQuery || '').toLowerCase();

        const filtered = allItems.filter(item => {
            const matchesCat = (activeCat === 'all') || (item.category && item.category.toLowerCase().includes(activeCat.toLowerCase()));
            const titleEn = (item.title_en || '').toLowerCase();
            const titleMr = (item.title_mr || '').toLowerCase();
            const detailsEn = (item.details_en || '').toLowerCase();
            const detailsMr = (item.details_mr || '').toLowerCase();
            const matchesQuery = !query || titleEn.includes(query) || titleMr.includes(query) || detailsEn.includes(query) || detailsMr.includes(query);
            return matchesCat && matchesQuery;
        });

        if (countBadge) {
            countBadge.textContent = `${filtered.length} ${lang === 'mr' ? 'सूचना उपलब्ध' : 'Circulars Found'}`;
        }

        if (filtered.length === 0) {
            featuredContainer.innerHTML = `
                <div style="text-align:center; padding:3rem; background:white; border-radius:12px; border:1px dashed var(--border-color); color:var(--text-muted);">
                    <i class="fa-solid fa-magnifying-glass" style="font-size:2rem; color:var(--accent-gold); margin-bottom:0.8rem;"></i>
                    <h4 style="color:var(--primary-dark); margin:0 0 0.5rem 0;">${lang === 'mr' ? 'कोणतीही जुळणारी सूचना आढळली नाही' : 'No matching circulars or notices found'}</h4>
                    <p style="margin:0; font-size:0.9rem;">${lang === 'mr' ? 'कृपया वेगळा शोध शब्द वापरा किंवा सर्व सूचना पहा.' : 'Try adjusting your search query or reset the category filter.'}</p>
                </div>
            `;
            storiesContainer.innerHTML = '';
        } else {
            // Lead featured story is the first match
            const lead = filtered[0];
            const leadTitle = lang === 'mr' ? lead.title_mr : lead.title_en;
            const leadDetails = (lang === 'mr' && lead.details_mr) ? lead.details_mr : lead.details_en;
            const leadCat = lead.category || 'Official';
            const catClass = getCategoryTagClass(leadCat);

            featuredContainer.innerHTML = `
                <div class="news-featured-card">
                    <div class="news-featured-meta">
                        <span class="news-tag ${catClass}">
                            <i class="fa-solid fa-bullhorn"></i> ${leadCat}
                        </span>
                        <div class="news-date-text">
                            <i class="fa-regular fa-calendar-check"></i> ${lead.date || '2026'}
                        </div>
                    </div>
                    <h2 class="news-featured-title">${leadTitle}</h2>
                    <p class="news-featured-excerpt">${leadDetails}</p>
                    <div class="news-featured-actions">
                        <div class="news-authority-text">
                            <i class="fa-solid fa-location-dot" style="color:var(--accent-gold);"></i>
                            <span>${lead.location || 'Maharashtra, India'}</span>
                        </div>
                        <div style="display:flex; gap:0.6rem; flex-wrap:wrap;">
                            <button type="button" class="btn-news-action btn-news-primary" onclick="openNoticeModal(${lead.id})">
                                <i class="fa-solid fa-book-open"></i>
                                <span>${lang === 'mr' ? 'सविस्तर वाचा' : 'Read Notice'}</span>
                            </button>
                            <a href="forms/Form-Community-Bhandara-Gondia.pdf" target="_blank" class="btn-news-action btn-news-pdf" download>
                                <i class="fa-solid fa-file-pdf"></i>
                                <span>${lang === 'mr' ? 'PDF डाउनलोड' : 'Download PDF'}</span>
                            </a>
                        </div>
                    </div>
                </div>
            `;

            // Subgrid stories (items after lead)
            const remaining = filtered.slice(1);
            if (remaining.length === 0) {
                storiesContainer.innerHTML = `
                    <div style="grid-column: 1 / -1; background:#f8fafc; border:1px solid var(--border-color); border-radius:10px; padding:1.2rem; text-align:center; font-size:0.9rem; color:var(--text-muted);">
                        ${lang === 'mr' ? 'इतर अधिकृत सूचना लवकरच उपलब्ध होतील.' : 'Additional circulars and updates will appear here as they are released.'}
                    </div>
                `;
            } else {
                storiesContainer.innerHTML = remaining.map(item => {
                    const title = lang === 'mr' ? item.title_mr : item.title_en;
                    const details = (lang === 'mr' && item.details_mr) ? item.details_mr : item.details_en;
                    const cat = item.category || 'Notice';
                    const cClass = getCategoryTagClass(cat);
                    return `
                        <div class="news-story-card">
                            <div>
                                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.5rem;">
                                    <span class="news-tag ${cClass}">
                                        ${cat}
                                    </span>
                                    <span style="font-size:0.8rem; color:var(--text-muted); font-weight:600;">
                                        <i class="fa-regular fa-calendar"></i> ${item.date || '2026'}
                                    </span>
                                </div>
                                <h4 class="news-story-title">${title}</h4>
                                <p class="news-story-desc">${details}</p>
                            </div>
                            <div style="display:flex; justify-content:space-between; align-items:center; border-top:1px dashed var(--border-color); padding-top:0.8rem; margin-top:0.5rem;">
                                <button type="button" onclick="openNoticeModal(${item.id})" style="background:transparent; border:none; color:var(--primary-dark); font-weight:700; font-size:0.88rem; cursor:pointer; display:inline-flex; align-items:center; gap:0.3rem;">
                                    <span>${lang === 'mr' ? 'वाचा' : 'Read'}</span> <i class="fa-solid fa-arrow-right"></i>
                                </button>
                                <a href="forms/Form-Community-Bhandara-Gondia.pdf" target="_blank" style="color:#b91c1c; font-size:1rem;" title="Download PDF" download>
                                    <i class="fa-solid fa-file-pdf"></i>
                                </a>
                            </div>
                        </div>
                    `;
                }).join('');
            }
        }

        // Sidebar Official Announcements list
        if (bulletinContainer) {
            bulletinContainer.innerHTML = allItems.map(item => {
                const title = lang === 'mr' ? item.title_mr : item.title_en;
                const cat = item.category || 'Notice';
                let tagClass = 'news-tag-event';
                if (cat.includes('Census')) tagClass = 'news-tag-census';
                else if (cat.includes('Education')) tagClass = 'news-tag-education';
                else if (cat.includes('Matrimonial')) tagClass = 'news-tag-matrimonial';

                return `
                    <li class="news-bulletin-item" onclick="openNoticeModal(${item.id})">
                        <div class="news-bulletin-header">
                            <span class="news-tag ${tagClass}" style="font-size:0.7rem; padding:0.15rem 0.5rem;">${cat}</span>
                            <span style="font-size:0.75rem; color:var(--text-muted);">${item.date || ''}</span>
                        </div>
                        <div class="news-bulletin-title">${title}</div>
                    </li>
                `;
            }).join('');
        }
    }

    function getCategoryTagClass(cat) {
        if (!cat) return 'news-tag-featured';
        const c = cat.toLowerCase();
        if (c.includes('census')) return 'news-tag-census';
        if (c.includes('event') || c.includes('melava')) return 'news-tag-event';
        if (c.includes('education') || c.includes('career')) return 'news-tag-education';
        if (c.includes('matrimonial')) return 'news-tag-matrimonial';
        return 'news-tag-featured';
    }

    window.filterNewsByQuery = function() {
        const input = document.getElementById('newsSearchInput');
        window._newsSearchQuery = input ? input.value.trim() : '';
        renderNewsPage(portalData.notices, currentLang);
    };

    window.filterNewsCategory = function(cat, btnElem) {
        window._selectedNewsCategory = cat;
        document.querySelectorAll('#newsTagCloud .news-filter-btn').forEach(b => b.classList.remove('active'));
        if (btnElem) {
            btnElem.classList.add('active');
        } else {
            const matchBtn = document.querySelector(`#newsTagCloud .news-filter-btn[data-category="${cat}"]`);
            if (matchBtn) matchBtn.classList.add('active');
        }
        renderNewsPage(portalData.notices, currentLang);
    };

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
                const val = lang === 'mr' ? elem.getAttribute('data-lang-mr') : elem.getAttribute('data-lang-en');
                if (val !== null) {
                    if (val.indexOf('<') !== -1 && val.indexOf('>') !== -1) {
                        elem.innerHTML = val;
                    } else {
                        elem.textContent = val;
                    }
                }
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

        // Sync with nav.js language toggle events
        document.addEventListener('langChange', (e) => {
            if (e.detail && e.detail.lang) {
                currentLang = e.detail.lang;
                portalData.settings.currentLang = currentLang;
                renderAll(portalData, currentLang);
            }
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
        const cat = notice.category || 'Official Circular';

        openModal(title, `
            <div style="font-size: 0.95rem;">
                <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem; margin-bottom: 1rem; border-bottom:1px solid var(--border-color); padding-bottom:0.6rem;">
                    <span class="news-tag news-tag-featured" style="font-size:0.75rem;">
                        <i class="fa-solid fa-bullhorn"></i> ${cat}
                    </span>
                    <span style="color: var(--text-muted); font-size:0.85rem; font-weight: 600;">
                        <i class="fa-solid fa-calendar-days"></i> ${notice.date} | <i class="fa-solid fa-location-dot"></i> ${notice.location}
                    </span>
                </div>
                <p style="line-height: 1.65; color: var(--text-main); font-size:1rem; margin-bottom:1.5rem;">${details}</p>
                <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.8rem; border-top:1px dashed var(--border-color); padding-top:1rem;">
                    <a href="forms/Form-Community-Bhandara-Gondia.pdf" target="_blank" class="btn-news-action btn-news-pdf" download>
                        <i class="fa-solid fa-file-pdf"></i> ${currentLang === 'mr' ? 'परिपत्रक डाउनलोड करा (PDF)' : 'Download Circular (PDF)'}
                    </a>
                    <button class="btn-news-action btn-news-primary" onclick="closeModal()">${currentLang === 'mr' ? 'बंद करा' : 'Close'}</button>
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
                        <a href="join-community.html" class="btn-primary" style="display:inline-flex; align-items:center; gap:0.5rem; text-decoration:none;">
                            <i class="fa-solid fa-file-pdf"></i> ${currentLang === 'mr' ? 'सदस्यत्व नोंदणी अर्ज डाउनलोड करा' : 'Download Membership Forms'}
                        </a>
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
                        <i class="fa-solid fa-circle-info" style="color:var(--accent-gold-hover); margin-right:0.3rem;"></i> ${currentLang === 'mr' ? 'शहरी संपर्क व वसतिगृह माहिती समितीद्वारे अद्यतनित केली जात आहे.' : 'Urban association and student hostel contacts are currently being updated by the committee.'}
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
