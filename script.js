document.addEventListener("DOMContentLoaded", function() {

    if (window.Telegram && window.Telegram.WebApp) {
        const userData = window.Telegram.WebApp.initDataUnsafe;

        const isDarkTheme = userData.theme === "dark"; // Проверка темы пользователя

        if (isDarkTheme) {
            document.body.classList.add("dark-theme"); // Добавляем класс для темной темы
        } else {
            document.body.classList.add("light-theme"); // Добавляем класс для светлой темы
        }


        const replenishImage = document.getElementById('ReplenishPlus');
        const ourGamesImage = document.getElementById('OurGames');
        const dartsPanelImage = document.getElementById('DartsPanel');
        const dicePanelImage = document.getElementById('DicePanel');
        const slotImage = document.getElementById('Slot');
        const lastGamesPanelImage = document.getElementById('LastGamesPanel');
        const refPanelImage = document.getElementById('RefPanel');
        const supportPanelImage = document.getElementById('SupportPanel');
        const faqPanelImage = document.getElementById('FaqPanel');


        if (isDarkTheme) {
            replenishImage.src = "assets/replenish-plus.svg";
            ourGamesImage.src = "assets/our-games-panel.svg";
            dartsPanelImage.src = "assets/darts-panel.svg";
            dicePanelImage.src = "assets/dice-panel.svg";
            slotImage.src = "assets/slot.svg";
            lastGamesPanelImage.src = "assets/last-games-panel.svg";
            refPanelImage.src = "assets/ref-panel.svg";
            supportPanelImage.src = "assets/support-panel.svg";
            faqPanelImage.src = "assets/faq-panel.svg";
        } else {
            replenishImage.src = "assets/replenish-plus-l.svg";
            ourGamesImage.src = "assets/our-games-panel-l.svg";
            dartsPanelImage.src = "assets/darts-panel-l.svg";
            dicePanelImage.src = "assets/dice-panel-l.svg";
            slotImage.src = "assets/slot-l.svg";
            lastGamesPanelImage.src = "assets/last-games-panel-l.svg";
            refPanelImage.src = "assets/ref-panel-l.svg";
            supportPanelImage.src = "assets/support-panel-l.svg";
            faqPanelImage.src = "assets/faq-panel-l.svg";
        }
    }
});

