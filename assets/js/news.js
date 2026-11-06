// Shared news rendering: renderNews for the homepage (latest few, with
// icons) and renderNewsList for /news/ (everything, plain dated list).
// news.json is ordered oldest to newest; items are shown newest first.
const iconMap = {
    "arxiv": '<i class="ai ai-arxiv news-icon"></i>',
    "graduation-cap": '<i class="fa fa-graduation-cap news-icon"></i>',
    "file": '<i class="fa fa-file-text news-icon"></i>',
    "globe": '<i class="fa fa-globe news-icon"></i>',
    "star": '<i class="fa fa-star news-icon"></i>',
    "school": '<i class="fa fa-school news-icon"></i>',
    "document": '<i class="fa fa-file-lines news-icon"></i>',
    "conference": '<i class="fa fa-chalkboard-user news-icon"></i>',
    "talk": '<i class="fa fa-person-chalkboard news-icon"></i>',
    "reading-group": '<i class="fa fa-book-open-reader news-icon"></i>',
};

// Pass `limit` to show only that many of the latest items.
function renderNews(url, limit) {
    fetch(url)
        .then(r => r.json())
        .then(items => {
            items = (limit ? items.slice(-limit) : items).reverse();
            const container = document.getElementById("news-container");
            container.innerHTML = items.map(item => `
            <div class="news-item">
                <div class="news-meta">
                    ${iconMap[item.icon] || '<i class="fa fa-circle news-icon"></i>'}
                    <span class="news-date">${item.date}</span>
                </div>
                <div class="news-body">${item.body}</div>
            </div>`).join("");
        });
}

function renderNewsList(url) {
    fetch(url)
        .then(r => r.json())
        .then(items => {
            const container = document.getElementById("news-container");
            container.innerHTML = items.reverse().map(item => `
            <div class="news-list-item">
                <div class="news-list-date">${item.date}</div>
                <div>${item.body}</div>
            </div>`).join("");
        });
}
