
(() => {
    if (window.__ebloid_enhancer_v4) return;
    window.__ebloid_enhancer_v4 = true;

    // === Comprehensive Mobile UI, Centered Toolbar, No Blue Highlight & Download Intercept ===
    const style = document.createElement('style');
    style.id = 'ebloid-custom-styles-v4';
    style.innerHTML = `
        /* 1. ELIMINATE BROWSER BLUE TAP HIGHLIGHT & OUTLINES EVERYWHERE */
        *, *::before, *::after {
            -webkit-tap-highlight-color: transparent !important;
            -webkit-focus-ring-color: transparent !important;
            outline: none !important;
            user-select: none !important;
            -webkit-user-select: none !important;
        }

        /* Allow typing and selection in inputs/textareas only */
        input, textarea, [contenteditable="true"] {
            user-select: text !important;
            -webkit-user-select: text !important;
        }

        /* 2. HIDE FULLSCREEN BUTTON & INSTALL BANNERS */
        #mobile-fullscreen-btn,
        .mobile-fullscreen-btn,
        button[aria-label="Во весь экран"],
        .fullscreen-icon-svg,
        .pwa-install-banner,
        .install-app-banner {
            display: none !important;
            visibility: hidden !important;
            width: 0 !important;
            height: 0 !important;
            padding: 0 !important;
            margin: 0 !important;
            pointer-events: none !important;
        }

        /* 3. REMOVE ALL COOKIE & METRIKA BANNERS (EBLOID & TWITCH) */
        #cookie-banner,
        .cookie-banner,
        [aria-label="Куки"],
        [data-a-target="consent-banner"],
        .consent-banner,
        .tw-cookie-banner,
        #onetrust-consent-sdk,
        #onetrust-banner-sdk,
        .onetrust-pc-dark-filter,
        div[id^="sp_message_container"] {
            display: none !important;
            visibility: hidden !important;
            opacity: 0 !important;
            pointer-events: none !important;
            height: 0 !important;
            position: absolute !important;
            top: -9999px !important;
        }

        /* 4. FIX FEED TOOLBAR & CENTER ALIGN TABS (Лента, Подписки, Фильтрация) */
        .content-wrapper {
            margin: 0 auto !important;
            padding: 0 0 80px 0 !important;
            width: 100% !important;
            max-width: 100% !important;
            box-sizing: border-box !important;
        }

        .feed-container,
        .feed-container > div,
        main,
        body {
            padding-left: 0 !important;
            padding-right: 0 !important;
            margin-left: 0 !important;
            margin-right: 0 !important;
            width: 100% !important;
            max-width: 100% !important;
        }

        .feed-toolbar {
            display: flex !important;
            flex-direction: column !important;
            width: 100% !important;
            box-sizing: border-box !important;
            padding: 8px 12px 10px 12px !important;
            margin: 0 !important;
            gap: 10px !important;
            border-bottom: 1px solid rgba(255, 255, 255, 0.08) !important;
            background: #202020 !important;
        }

        /* Perfectly balanced symmetrical tabs */
        .feed-tabs {
            display: flex !important;
            width: 100% !important;
            box-sizing: border-box !important;
            border-bottom: 1px solid rgba(255, 255, 255, 0.08) !important;
            gap: 0 !important;
            min-height: 44px !important;
            justify-content: center !important;
            align-items: center !important;
        }

        .feed-tab {
            flex: 1 1 50% !important;
            display: flex !important;
            justify-content: center !important;
            align-items: center !important;
            text-align: center !important;
            padding: 10px 0 !important;
            font-size: 1.15rem !important;
            font-weight: 700 !important;
            box-sizing: border-box !important;
        }

        .feed-tab.active {
            border-bottom: 2px solid #9ac43e !important;
            color: #ffffff !important;
        }

        /* Filter Dropdown symmetric padding */
        .feed-filters {
            width: 100% !important;
            box-sizing: border-box !important;
        }

        .filter-dropdown,
        .feed-filter-dropdown {
            width: 100% !important;
            box-sizing: border-box !important;
        }

        .filter-dropdown-btn {
            width: 100% !important;
            box-sizing: border-box !important;
            padding: 10px 14px !important;
            border-radius: 10px !important;
            background: #262626 !important;
            border: 1px solid rgba(255, 255, 255, 0.1) !important;
            display: flex !important;
            justify-content: space-between !important;
            align-items: center !important;
        }

        /* 5. TWITTER-LIKE FULL-WIDTH TIMELINE */
        #feed-grid,
        .feed-grid {
            display: flex !important;
            flex-direction: column !important;
            gap: 0 !important;
            padding: 0 !important;
            margin: 0 !important;
            width: 100% !important;
            max-width: 100% !important;
        }

        #feed-grid > .feed-card,
        .feed-container .feed-grid > .feed-card,
        .feed-card {
            width: 100% !important;
            max-width: 100% !important;
            min-width: 100% !important;
            box-sizing: border-box !important;
            border-radius: 0 !important;
            margin: 0 !important;
            padding: 14px 14px 16px 14px !important;
            background: #202020 !important;
            border: none !important;
            border-bottom: 1px solid rgba(255, 255, 255, 0.08) !important;
            box-shadow: none !important;
        }

        body .feed-container .feed-grid .feed-card .feed-card-preview,
        .feed-card-preview,
        .feed-card-preview-link {
            border-radius: 12px !important;
            height: auto !important;
            min-height: 180px !important;
            max-height: 520px !important;
            width: 100% !important;
            overflow: hidden !important;
            background: #181a1b !important;
            margin-bottom: 10px !important;
        }

        .feed-card-preview img,
        .feed-card-preview video {
            width: 100% !important;
            height: auto !important;
            max-height: 520px !important;
            object-fit: cover !important;
            border-radius: 12px !important;
            display: block !important;
        }

        .feed-card-author {
            display: flex !important;
            align-items: center !important;
            gap: 10px !important;
            margin-bottom: 8px !important;
        }

        .feed-card-avatar {
            width: 38px !important;
            height: 38px !important;
            min-width: 38px !important;
            border-radius: 50% !important;
        }

        .feed-card-username {
            font-size: 15px !important;
            font-weight: 700 !important;
            color: #ebebeb !important;
        }

        .feed-card-title,
        .feed-card-description {
            font-size: 15px !important;
            line-height: 1.4 !important;
            color: #d1d5db !important;
            margin-bottom: 10px !important;
            max-height: none !important;
            -webkit-line-clamp: 4 !important;
        }

        .mobile-header {
            display: flex !important;
            align-items: center !important;
            gap: 8px !important;
            padding: 8px 14px !important;
        }

        .mobile-search {
            flex: 1 1 auto !important;
            width: auto !important;
        }

        ::-webkit-scrollbar {
            display: none !important;
            width: 0px !important;
        }
    `;

    function applyDOMModifications() {
        if (!document.getElementById('ebloid-custom-styles-v4')) {
            (document.head || document.documentElement).appendChild(style);
        }

        const fsBtn = document.getElementById('mobile-fullscreen-btn') || document.querySelector('.mobile-fullscreen-btn');
        if (fsBtn) fsBtn.remove();

        const ebloBanner = document.getElementById('cookie-banner') || document.querySelector('.cookie-banner');
        if (ebloBanner) ebloBanner.remove();

        const twitchBanners = document.querySelectorAll(
            '[data-a-target="consent-banner"], #onetrust-consent-sdk, #onetrust-banner-sdk, .onetrust-pc-dark-filter, div[id^="sp_message_container"]'
        );
        twitchBanners.forEach(el => el.remove());

        const cookieNo = document.querySelector('[data-cookie-choice="no"]');
        if (cookieNo) cookieNo.click();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', applyDOMModifications);
    } else {
        applyDOMModifications();
    }

    const observer = new MutationObserver(() => {
        applyDOMModifications();
    });

    observer.observe(document.documentElement || document.body, {
        childList: true,
        subtree: true
    });
})();
