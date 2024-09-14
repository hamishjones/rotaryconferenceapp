document.addEventListener('DOMContentLoaded', function () {
    loadSchedule();
});

function loadSchedule() {
    const scheduleContent = document.getElementById('schedule-content');
    const schedule = [
        { time: '09:00 AM', session: 'Opening Ceremony', location: 'Main Hall' },
        { time: '10:00 AM', session: 'Keynote: The Future of Rotary', location: 'Main Hall' },
        { time: '11:00 AM', session: 'Networking Break', location: 'Lobby' },
        // Add more schedule items here
    ];

    schedule.forEach(item => {
        const div = document.createElement('div');
        div.className = 'schedule-item';
        div.innerHTML = `<strong>${item.time}</strong> - ${item.session} (${item.location})`;
        scheduleContent.appendChild(div);
    });
}
