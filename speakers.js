document.addEventListener('DOMContentLoaded', function () {
    loadSpeakers();
});

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
