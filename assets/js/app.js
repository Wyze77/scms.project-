import { renderNavbar, renderFooter, Modal, Toast } from './core/components.js';
import { Storage } from './core/storage.js';
import { $, getPageName } from './core/utils.js';

document.addEventListener('DOMContentLoaded', () => {
    const pageName = getPageName();
    
    // Initialize UI
    renderNavbar(pageName);
    renderFooter();
    
    // Initialize Theme
    let isDark = Storage.get(Storage.KEYS.THEME, false);
    applyTheme(isDark);

    const themeBtn = $('#theme-toggle');
    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            isDark = !isDark;
            Storage.set(Storage.KEYS.THEME, isDark);
            applyTheme(isDark);
        });
    }

    // Global Modal/Toast Handlers
    window.closeModal = Modal.close;
    window.closeToast = Toast.close;
    
    // Track Last Visited Page
    if (pageName && pageName !== 'Dashboard') {
        Storage.set(Storage.KEYS.LAST_VISITED, pageName + ' Page');
    }

    // Initialize Lucide Icons
    if(window.lucide) window.lucide.createIcons();
});

function applyTheme(isDark) {
    const body = document.body;
    const icon = $('#theme-icon'); // This selects the <img> tag
    
    if (isDark) {
        body.classList.add('dark-mode');
        if(icon) {
            // Fix: Switch the image source instead of using Lucide
            icon.src = './assets/img/Sun.svg';
            icon.alt = 'Light Mode';
        }
    } else {
        body.classList.remove('dark-mode');
        if(icon) {
            // Fix: Switch back to the Moon image
            icon.src = './assets/img/MoonWhite.svg';
            icon.alt = 'Dark Mode';
        }
    }
    
    // You can keep this if you use icons elsewhere, but it's not needed for the toggle anymore
    if(window.lucide) window.lucide.createIcons();

}