/**
 * Admin Dashboard Simulator for Kohali Samaj Web Portal
 * Allows dynamic Add, Edit, and Delete of Notices, News, Timeline, and Gallery.
 * Prepared for seamless C# .NET Backend Integration.
 */

window.openAdminModal = function() {
    const data = getPortalData();
    
    const adminHtml = `
        <div class="admin-dashboard-container">
            <div class="dotnet-note">
                <i class="fa-solid fa-code-branch"></i> <strong>.NET Integration Ready:</strong> 
                This Admin panel simulates your future .NET Controller actions. Adding/Deleting items mutates the portal state, re-renders the DOM in real-time, and persists in localStorage. 
                Corresponding API endpoints can map cleanly to <code>[HttpPost] api/admin/notices</code> & <code>[HttpDelete] api/admin/notices/{id}</code>.
            </div>

            <div class="admin-tabs">
                <button class="admin-tab-btn active" onclick="switchAdminTab('notices')">Notices / Ticker</button>
                <button class="admin-tab-btn" onclick="switchAdminTab('news')">News & Events</button>
                <button class="admin-tab-btn" onclick="switchAdminTab('timeline')">Timeline</button>
            </div>

            <!-- Tab 1: Notices Manager -->
            <div id="tabNotices" class="admin-tab-content">
                <h4 style="margin-bottom:0.8rem; color:var(--primary-dark);">Add New Important Announcement / Notice</h4>
                <form id="formAddNotice" onsubmit="handleAddNotice(event)">
                    <div class="form-group">
                        <label>Notice Title (English)</label>
                        <input type="text" id="noticeTitleEn" class="form-control" placeholder="e.g., Youth Sports Tournament - July 2026" required>
                    </div>
                    <div class="form-group">
                        <label>Notice Title (Marathi translation optional)</label>
                        <input type="text" id="noticeTitleMr" class="form-control" placeholder="उदा. क्रीडा स्पर्धा जुलै २०२६">
                    </div>
                    <div style="display:flex; gap:1rem; margin-bottom:1rem;">
                        <div style="flex:1;">
                            <label style="font-size:0.85rem; font-weight:bold;">Date</label>
                            <input type="date" id="noticeDate" class="form-control" required>
                        </div>
                        <div style="flex:1;">
                            <label style="font-size:0.85rem; font-weight:bold;">Location</label>
                            <input type="text" id="noticeLocation" class="form-control" placeholder="e.g. Gondia">
                        </div>
                    </div>
                    <button type="submit" class="btn-primary" style="width:100%; justify-content:center;">
                        <i class="fa-solid fa-plus"></i> Add Notice to Live Portal
                    </button>
                </form>

                <h4 style="margin-top:1.5rem; margin-bottom:0.8rem; color:var(--primary-dark);">Existing Notices (${data.notices.length})</h4>
                <div id="adminNoticesList">
                    ${renderAdminNoticesList(data.notices)}
                </div>
            </div>

            <!-- Tab 2: News Manager -->
            <div id="tabNews" class="admin-tab-content" style="display:none;">
                <h4 style="margin-bottom:0.8rem; color:var(--primary-dark);">Add News Update / Event</h4>
                <form id="formAddNews" onsubmit="handleAddNews(event)">
                    <div class="form-group">
                        <label>Headline (English)</label>
                        <input type="text" id="newsTitleEn" class="form-control" placeholder="e.g. Free Health Checkup Camp" required>
                    </div>
                    <div class="form-group">
                        <label>Headline (Marathi)</label>
                        <input type="text" id="newsTitleMr" class="form-control" placeholder="उदा. मोफत आरोग्य तपासणी शिबीर">
                    </div>
                    <div style="display:flex; gap:1rem; margin-bottom:1rem;">
                        <div style="flex:1;">
                            <label style="font-size:0.85rem; font-weight:bold;">Day (DD)</label>
                            <input type="text" id="newsDay" class="form-control" placeholder="10" required>
                        </div>
                        <div style="flex:1;">
                            <label style="font-size:0.85rem; font-weight:bold;">Month</label>
                            <input type="text" id="newsMonth" class="form-control" placeholder="JUL" required>
                        </div>
                    </div>
                    <button type="submit" class="btn-primary" style="width:100%; justify-content:center;">
                        <i class="fa-solid fa-plus"></i> Add News Item
                    </button>
                </form>

                <h4 style="margin-top:1.5rem; margin-bottom:0.8rem; color:var(--primary-dark);">Existing News Items (${data.news.length})</h4>
                <div id="adminNewsList">
                    ${renderAdminNewsList(data.news)}
                </div>
            </div>

            <!-- Tab 3: Timeline Manager -->
            <div id="tabTimeline" class="admin-tab-content" style="display:none;">
                <h4 style="margin-bottom:0.8rem; color:var(--primary-dark);">Add Historical Record / Gazette Citation</h4>
                <form id="formAddTimeline" onsubmit="handleAddTimeline(event)">
                    <div style="display:flex; gap:1rem; margin-bottom:1rem;">
                        <div style="width:120px;">
                            <label style="font-size:0.85rem; font-weight:bold;">Year</label>
                            <input type="text" id="tlYear" class="form-control" placeholder="1920" required>
                        </div>
                        <div style="flex:1;">
                            <label style="font-size:0.85rem; font-weight:bold;">Record Title</label>
                            <input type="text" id="tlTitle" class="form-control" placeholder="Gazette Reference" required>
                        </div>
                    </div>
                    <button type="submit" class="btn-primary" style="width:100%; justify-content:center;">
                        <i class="fa-solid fa-plus"></i> Add Timeline Milestone
                    </button>
                </form>

                <h4 style="margin-top:1.5rem; margin-bottom:0.8rem; color:var(--primary-dark);">Existing Timeline Records (${data.timeline.length})</h4>
                <div id="adminTimelineList">
                    ${renderAdminTimelineList(data.timeline)}
                </div>
            </div>
        </div>
    `;

    openModal('<i class="fa-solid fa-sliders"></i> Kohali Samaj Admin Dashboard Demo', adminHtml);
};

window.switchAdminTab = function(tabName) {
    document.querySelectorAll('.admin-tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.admin-tab-content').forEach(c => c.style.display = 'none');

    if (tabName === 'notices') {
        document.querySelector('.admin-tab-btn:nth-child(1)').classList.add('active');
        document.getElementById('tabNotices').style.display = 'block';
    } else if (tabName === 'news') {
        document.querySelector('.admin-tab-btn:nth-child(2)').classList.add('active');
        document.getElementById('tabNews').style.display = 'block';
    } else if (tabName === 'timeline') {
        document.querySelector('.admin-tab-btn:nth-child(3)').classList.add('active');
        document.getElementById('tabTimeline').style.display = 'block';
    }
};

// Render Helper Lists
function renderAdminNoticesList(notices) {
    if (!notices.length) return '<p style="color:var(--text-muted);">No notices available.</p>';
    return notices.map(n => `
        <div class="admin-item-row">
            <div>
                <strong>${n.title_en}</strong>
                <div style="font-size:0.75rem; color:var(--text-muted);">${n.date} | ${n.location}</div>
            </div>
            <button class="btn-delete-item" onclick="deleteAdminNotice(${n.id})" title="Delete Notice">
                <i class="fa-solid fa-trash-can"></i>
            </button>
        </div>
    `).join('');
}

function renderAdminNewsList(news) {
    if (!news.length) return '<p style="color:var(--text-muted);">No news available.</p>';
    return news.map(n => `
        <div class="admin-item-row">
            <div>
                <strong>${n.day} ${n.month_en}: ${n.title_en}</strong>
            </div>
            <button class="btn-delete-item" onclick="deleteAdminNews(${n.id})" title="Delete News">
                <i class="fa-solid fa-trash-can"></i>
            </button>
        </div>
    `).join('');
}

function renderAdminTimelineList(timeline) {
    if (!timeline.length) return '<p style="color:var(--text-muted);">No timeline entries available.</p>';
    return timeline.map(t => `
        <div class="admin-item-row">
            <div>
                <strong>${t.year}: ${t.title_en}</strong>
            </div>
            <button class="btn-delete-item" onclick="deleteAdminTimeline(${t.id})" title="Delete Record">
                <i class="fa-solid fa-trash-can"></i>
            </button>
        </div>
    `).join('');
}

// Action Handlers
window.handleAddNotice = function(e) {
    e.preventDefault();
    const data = getPortalData();
    const newNotice = {
        id: Date.now(),
        title_en: document.getElementById('noticeTitleEn').value,
        title_mr: document.getElementById('noticeTitleMr').value || document.getElementById('noticeTitleEn').value,
        date: document.getElementById('noticeDate').value,
        location: document.getElementById('noticeLocation').value || 'Bhandara',
        category: 'Announcement',
        details_en: document.getElementById('noticeTitleEn').value,
        details_mr: document.getElementById('noticeTitleMr').value || document.getElementById('noticeTitleEn').value
    };
    data.notices.unshift(newNotice);
    savePortalData(data);
    
    // Refresh modal list & main UI
    document.getElementById('adminNoticesList').innerHTML = renderAdminNoticesList(data.notices);
    location.reload();
};

window.deleteAdminNotice = function(id) {
    const data = getPortalData();
    data.notices = data.notices.filter(n => n.id !== id);
    savePortalData(data);
    document.getElementById('adminNoticesList').innerHTML = renderAdminNoticesList(data.notices);
    location.reload();
};

window.handleAddNews = function(e) {
    e.preventDefault();
    const data = getPortalData();
    const newNews = {
        id: Date.now(),
        day: document.getElementById('newsDay').value,
        month_en: document.getElementById('newsMonth').value.toUpperCase(),
        month_mr: document.getElementById('newsMonth').value,
        title_en: document.getElementById('newsTitleEn').value,
        title_mr: document.getElementById('newsTitleMr').value || document.getElementById('newsTitleEn').value,
        subtitle_en: 'Latest Event',
        subtitle_mr: 'नवीन उपक्रम',
        details_en: document.getElementById('newsTitleEn').value
    };
    data.news.unshift(newNews);
    savePortalData(data);
    location.reload();
};

window.deleteAdminNews = function(id) {
    const data = getPortalData();
    data.news = data.news.filter(n => n.id !== id);
    savePortalData(data);
    location.reload();
};

window.handleAddTimeline = function(e) {
    e.preventDefault();
    const data = getPortalData();
    const newTl = {
        id: Date.now(),
        year: document.getElementById('tlYear').value,
        title_en: document.getElementById('tlTitle').value,
        title_mr: document.getElementById('tlTitle').value,
        desc_en: document.getElementById('tlTitle').value,
        desc_mr: document.getElementById('tlTitle').value
    };
    data.timeline.push(newTl);
    savePortalData(data);
    location.reload();
};

window.deleteAdminTimeline = function(id) {
    const data = getPortalData();
    data.timeline = data.timeline.filter(t => t.id !== id);
    savePortalData(data);
    location.reload();
};
