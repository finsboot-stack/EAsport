// main.js - Handles general functionality, data loading from localStorage

document.addEventListener('DOMContentLoaded', function() {
    // Load data from localStorage or use defaults
    const loadData = (key, defaultValue) => JSON.parse(localStorage.getItem(key)) || defaultValue;

    // Home Page
    if (document.getElementById('home-title')) {
        document.getElementById('home-title').textContent = loadData('homeTitle', 'Classmeet Esport MLBB');
        document.getElementById('home-desc').textContent = loadData('homeDesc', 'Event esports Mobile Legends: Bang Bang untuk kelas. Daftar tim, lihat jadwal, dan ikuti bracket turnamen!');
        document.getElementById('banner').style.backgroundImage = `url(${loadData('bannerUrl', '../img/banner.jpg')})`;
    }

    // Teams Page
    if (document.getElementById('teams-container')) {
        const teams = loadData('teams', [
            { name: 'Team Alpha', logo: '../img/team-logo.png' },
            { name: 'Team Beta', logo: '../img/team-logo.png' },
            // ... (dummy 18 teams)
            { name: 'Team Omega', logo: '../img/team-logo.png' }
        ]);
        const container = document.getElementById('teams-container');
        container.innerHTML = '';
        teams.forEach(team => {
            container.innerHTML += `
                <div class="neon-card">
                    <img src="${team.logo}" alt="${team.name}" style="width:100px; height:100px;">
                    <h3>${team.name}</h3>
                </div>
            `;
        });
    }

    // Schedule Page
    if (document.getElementById('schedule-container')) {
        const schedules = loadData('schedules', [
            { date: '2023-10-01', time: '10:00', teams: 'Team Alpha vs Team Beta' },
            { date: '2023-10-02', time: '11:00', teams: 'Team Gamma vs Team Delta' }
        ]);
        const container = document.getElementById('schedule-container');
        container.innerHTML = '';
        schedules.forEach(schedule => {
            container.innerHTML += `
                <li class="schedule-item">
                    <strong>${schedule.date} ${schedule.time}</strong>: ${schedule.teams}
                </li>
            `;
        });
    }

    // Bracket Page
    if (document.getElementById('bracket-container')) {
        const bracket = loadData('bracket', {
            round1: [
                { match: 'Team A vs Team B', winner: '' },
                { match: 'Team C vs Bye', winner: 'Team C' },
                // ... (dummy bracket for 18 teams with byes)
            ],
            round2: [
                { match: 'Winner1 vs Winner2', winner: '' }
            ]
        });
        const container = document.getElementById('bracket-container');
        container.innerHTML = '';
        for (const round in bracket) {
            container.innerHTML += `<div class="bracket-round"><h3>${round}</h3>`;
            bracket[round].forEach(match => {
                container.innerHTML += `<div class="bracket-match">${match.match} - Winner: ${match.winner || 'TBD'}</div>`;
            });
            container.innerHTML += '</div>';
        }
    }
});
