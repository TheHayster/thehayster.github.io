window.addEventListener('DOMContentLoaded', (event) => {
    const sidebar = document.getElementById('sidebar');
    const content = document.getElementById('content');

    // Generate a list of 100 songs with file names 1.html, 2.html, ..., 100.html
    const songs = Array.from({ length: 100 }, (_, i) => ({ name: `${i + 1}`, file: `resources/${i + 1}.html` }));

    // Create navigation links dynamically
    songs.forEach(song => {
        const link = document.createElement('a');
        link.href = '#';
        link.innerText = song.name;
        link.addEventListener('click', () => {
            loadSong(song.file);
        });
        sidebar.appendChild(link);
    });

    // Function to load song lyrics and display them in content area
    function loadSong(file) {
        fetch(file)
            .then(response => response.text())
            .then(data => {
                content.innerHTML = data;
            })
            .catch(err => {
                content.innerHTML = `<p>Error loading lyrics for this song.</p>`;
            });
    }
});