// Hover/focus preview card for specific cross-reference links (e.g.
// "Related talks" on a paper page, "Related paper" on a talk page).
// Each opted-in <a> carries its own preview text via data-preview-*
// attributes (set at build time in the Liquid templates), so this
// script only needs to read those and float a card near the link —
// no fetching, no site-wide link scanning.
(function () {
    var SHOW_DELAY = 200;
    var HIDE_DELAY = 150;
    var card = null;
    var showTimer = null;
    var hideTimer = null;
    var current = null;

    function ensureCard() {
        if (card) return card;
        card = document.createElement('div');
        card.id = 'link-preview-card';
        card.innerHTML =
            '<div class="link-preview-type-tag"></div>' +
            '<div class="link-preview-title"></div>' +
            '<div class="link-preview-meta"></div>' +
            '<div class="link-preview-excerpt"></div>';
        document.body.appendChild(card);
        card.addEventListener('mouseenter', function () { clearTimeout(hideTimer); });
        card.addEventListener('mouseleave', scheduleHide);
        return card;
    }

    function positionCard(anchor) {
        var rect = anchor.getBoundingClientRect();
        var margin = 8;
        card.style.left = '0px';
        card.style.top = '0px';
        card.classList.add('visible');
        var cw = card.offsetWidth;
        var ch = card.offsetHeight;

        var left = rect.left;
        if (left + cw > window.innerWidth - margin) left = window.innerWidth - cw - margin;
        if (left < margin) left = margin;

        var top = rect.bottom + margin;
        if (top + ch > window.innerHeight - margin) top = rect.top - ch - margin;
        if (top < margin) top = margin;

        card.style.left = left + 'px';
        card.style.top = top + 'px';
    }

    function showCard(anchor) {
        ensureCard();
        var type = anchor.dataset.previewType || '';
        var title = anchor.dataset.previewTitle || '';
        var meta = anchor.dataset.previewMeta || '';
        var excerpt = anchor.dataset.previewExcerpt || '';

        var tagEl = card.querySelector('.link-preview-type-tag');
        tagEl.textContent = type;
        tagEl.style.display = type ? '' : 'none';

        card.querySelector('.link-preview-title').textContent = title;

        var metaEl = card.querySelector('.link-preview-meta');
        metaEl.textContent = meta;
        metaEl.style.display = meta ? '' : 'none';

        var excerptEl = card.querySelector('.link-preview-excerpt');
        excerptEl.textContent = excerpt;
        excerptEl.style.display = excerpt ? '' : 'none';

        positionCard(anchor);
    }

    function hideCard() {
        if (card) card.classList.remove('visible');
        current = null;
    }

    function scheduleShow(anchor) {
        clearTimeout(hideTimer);
        clearTimeout(showTimer);
        if (current === anchor) return;
        showTimer = setTimeout(function () {
            current = anchor;
            showCard(anchor);
        }, SHOW_DELAY);
    }

    function scheduleHide() {
        clearTimeout(showTimer);
        hideTimer = setTimeout(hideCard, HIDE_DELAY);
    }

    document.querySelectorAll('a[data-preview-title]').forEach(function (anchor) {
        anchor.addEventListener('mouseenter', function () { scheduleShow(anchor); });
        anchor.addEventListener('mouseleave', scheduleHide);
        anchor.addEventListener('focus', function () { current = null; scheduleShow(anchor); });
        anchor.addEventListener('blur', scheduleHide);
    });
})();
