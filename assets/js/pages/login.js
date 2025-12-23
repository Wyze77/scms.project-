import { Storage } from '../core/storage.js';
import { $ } from '../core/utils.js';

// Make functions available globally for HTML onclick events
window.switchTab = (tab) => {
    const loginForm = $('#login-form');
    const regForm = $('#register-form');
    const tabLogin = $('#tab-login');
    const tabRegister = $('#tab-register');

    if (tab === 'login') {
        loginForm.classList.remove('hidden');
        regForm.classList.add('hidden');
        
        tabLogin.classList.add('border-nav-primary', 'text-nav-primary');
        tabLogin.classList.remove('border-transparent', 'text-text-secondary');
        
        tabRegister.classList.remove('border-nav-primary', 'text-nav-primary');
        tabRegister.classList.add('border-transparent', 'text-text-secondary');
    } else {
        loginForm.classList.add('hidden');
        regForm.classList.remove('hidden');
        
        tabRegister.classList.add('border-nav-primary', 'text-nav-primary');
        tabRegister.classList.remove('border-transparent', 'text-text-secondary');
        
        tabLogin.classList.remove('border-nav-primary', 'text-nav-primary');
        tabLogin.classList.add('border-transparent', 'text-text-secondary');
    }
    // Refresh icons just in case
    if(window.lucide) setTimeout(() => window.lucide.createIcons(), 10);
};

window.handleRegister = (e) => {
    e.preventDefault();
    
    const name = $('#reg-name').value;
    const id = $('#reg-id').value;
    const pass = $('#reg-pass').value;

    const users = Storage.get('scms_users', []);

    if (users.find(u => u.id === id)) {
        alert("Error: Student ID already registered!");
        return;
    }

    users.push({ name, id, pass });
    Storage.set('scms_users', users);

    alert("Registration Successful! Please log in.");
    window.switchTab('login');
    $('#login-id').value = id; 
};

window.handleLogin = (e) => {
    e.preventDefault();

    const id = $('#login-id').value;
    const pass = $('#login-pass').value;
    
    const users = Storage.get('scms_users', []);
    const user = users.find(u => u.id === id && u.pass === pass);

    if (user) {
        Storage.set('scms-user-id', user.id); 
        Storage.set('scms-username', user.name);
        Storage.set('scms-logged-in', true);
        
        // Removed the alert for a smoother, cleaner feel
        window.location.href = 'dashboard.html';
    } else {
        alert("Invalid ID or Password");
    }
};

// --- NEW FUNCTION: Toggle Password Visibility ---
// This works with the new HTML design
window.togglePassword = (inputId, iconId) => {
    const input = document.getElementById(inputId);
    const icon = document.getElementById(iconId);
    
    if (input.type === "password") {
        input.type = "text";
        icon.setAttribute('data-lucide', 'eye-off');
    } else {
        input.type = "password";
        icon.setAttribute('data-lucide', 'eye');
    }
    
    if(window.lucide) window.lucide.createIcons();
};