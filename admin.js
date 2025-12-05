// admin.js - Handles admin login and dashboard functionality

// Login Check
if (window.location.pathname.includes('admin.html')) {
    document.getElementById('login-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        if (username === 'osmakanda' && password === 'osmakandamaju') {
            window.location.href = 'admin-dashboard.html';
        } else {
            alert('Login gagal');
        }
    });
}

// Dashboard Functionality
if (window.location.pathname.includes('admin-dashboard.html')) {
    const saveData = (key, value) => localStorage.setItem(key, JSON.stringify(value));

    // Home Edit
    document.getElementById('home-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const title = document.getElementById('edit-title').value;
        const desc = document.getElementById('edit-desc').value;
        const banner = document.getElementById('edit-banner').value;
        saveData('homeTitle', title);
        saveData('homeDesc', desc);
        saveData('bannerUrl', banner);
        alert('Home updated!');
    });

    // Teams Edit
    document.getElementById('teams-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const teams = JSON.parse(localStorage.getItem('teams') || '[]');
        const name = document.getElementById('team-name').value;
        const logo = document.getElementById('team-logo').value;
        teams.push({ name, logo });
        saveData('teams', teams);
        alert('Team added!');
    });

    // Schedule Edit
    document.getElementById('schedule-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const schedules = JSON.parse(localStorage.getItem('schedules') || '[]');
        const date = document.getElementById('schedule-date').value;
        const time = document.getElementById('schedule-time').value;
        const teams = document.getElementById('schedule-teams').value;
        schedules.push({ date, time, teams });
        saveData('schedules', schedules);
        alert('Schedule added!');
    });

    // Bracket Edit
    document.getElementById('bracket-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const bracket = JSON.parse(localStorage.getItem('bracket') || '{}');
        const round = document.getElementById('bracket-round').value;
        const match = document.getElementById('bracket-match').value;
        const winner = document.getElementById('bracket-winner').value;
        if (!bracket[round]) bracket[round] = [];
        bracket[round].push({ match, winner });
        saveData('bracket', bracket);
        alert('Bracket updated!');
    });

    // Design Settings (simulated)
    document.getElementById('design-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const glow = document.getElementById('glow-intensity').value;
        const color = document.getElementById('neon-color').value;
        saveData('glow', glow);
        saveData('color', color);
        alert('Design updated! (Reload pages to see changes)');
    });
}
