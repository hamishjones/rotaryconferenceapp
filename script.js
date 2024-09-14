document.addEventListener('DOMContentLoaded', function () {
    loadSchedule();
    loadSpeakers();
    loadNetworking();
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

function loadSpeakers() {
    const speakersContent = document.getElementById('speakers-content');
    const speakers = [
        { name: 'John Doe', bio: 'Rotary Leader and Motivational Speaker' },
        { name: 'Jane Smith', bio: 'Author and Philanthropist' },
        // Add more speakers here
    ];

    speakers.forEach(speaker => {
        const div = document.createElement('div');
        div.className = 'speaker-item';
        div.innerHTML = `<strong>${speaker.name}</strong><p>${speaker.bio}</p>`;
        speakersContent.appendChild(div);
    });
}

function loadNetworking() {
    const networkingContent = document.getElementById('networking-content');
    const attendees = [
        { name: 'Alice Johnson', contact: 'alice@example.com' },
        { name: 'Bob Lee', contact: 'bob@example.com' },
        // Add more attendees here
    ];

    attendees.forEach(attendee => {
        const div = document.createElement('div');
        div.className = 'networking-item';
        div.innerHTML = `<strong>${attendee.name}</strong> - <a href="mailto:${attendee.contact}">${attendee.contact}</a>`;
        networkingContent.appendChild(div);
    });
}
