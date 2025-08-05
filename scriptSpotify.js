
const musicLibrary = [
    { title: "Blinding Lights", artist: "The Weeknd", image: "images/blinding-lights.jpeg" },
    { title: "Do I Wanna Know?", artist: "Arctic Monkeys", image: "images/do-i-wanna-know.jpeg" },
    { title: "Pink + White", artist: "Frank Ocean", image: "images/pink-and-white.jpeg" },
    { title: "Save Your Tears", artist: "The Weeknd", image: "images/save-your-tears.jpeg" },
    { title: "Borderline", artist: "Tame Impala", image: "images/borderline.jpeg" },
    { title: "The Night We Met", artist: "Lord Huron", image: "images/the-night-we-met.jpeg" },
    { title: "The Less I Know The Better", artist: "Tame Impala", image: "images/the-less-i-know-the-better.jpeg" },
    { title: "Beat It", artist: "Michael Jackson", image: "images/beat-it.jpeg" },
    { title: "Smooth Criminal", artist: "Michael Jackson", image: "images/smooth-criminal.jpeg" },
    { title: "I Wanna Be Yours", artist: "Arctic Monkeys", image: "images/i-wanna-be-yours.jpeg" },
];

const allSongsLibrary = [
    { title: "Blinding Lights", artist: "The Weeknd" },
    { title: "Do I Wanna Know?", artist: "Arctic Monkeys"},
    { title: "Pink + White", artist: "Frank Ocean"},
    { title: "Save Your Tears", artist: "The Weeknd"},
    { title: "Borderline", artist: "Tame Impala"},

    { title: "Sunflower", artist: "Post Malone, Swae Lee" },
    
    
    { title: "Let It Happen", artist: "Tame Impala" },
    { title: "Thriller", artist: "Michael Jackson" },
    { title: "505", artist: "Arctic Monkeys" },
    { title: "Come Together", artist: "The Beatles" },
    { title: "Creep", artist: "Radiohead" },
    { title: "Something In The Way", artist: "Nirvana" },
    { title: "Sweater Weather", artist: "The Neighbourhood" },
    { title: "Get Lucky", artist: "Daft Punk, Pharrell Williams" }
];




 
        const generateBtn = document.getElementById('generateBtn');
        const songList = document.getElementById('songList');
        const popularSongsGrid = document.getElementById('popularSongsGrid');

    
        function generatePlaylist() {
    songList.innerHTML = '';

    const playlistSize = Math.floor(Math.random() * 3) + 5;
    const playlist = [];

    const availableSongs = [...allSongsLibrary];

    for (let i = 0; i < playlistSize; i++) {
        if (availableSongs.length === 0) break;

        const randomIndex = Math.floor(Math.random() * availableSongs.length);
        playlist.push(availableSongs[randomIndex]);
        availableSongs.splice(randomIndex, 1);
    }

    playlist.forEach((song, index) => {
        const songItem = document.createElement('div');
        songItem.className = 'song-item';
        songItem.innerHTML = `
            <div class="song-number">${index + 1}</div>
            <div class="song-info">
                <div class="song-title">${song.title}</div>
                <div class="song-artist">${song.artist}</div>
            </div>
            <div class="play-icon">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 2L13 8L3 14V2Z" fill="#121212"/>
                </svg>
            </div>
        `;
        songList.appendChild(songItem);
    });
}



        function renderPopularSongs() {
            popularSongsGrid.innerHTML = '';
            

            musicLibrary.forEach(song => {
                const songCard = document.createElement('div');
                songCard.className = 'song-card';
                songCard.innerHTML = `
                    <div class="album-art">
                        <img src="${song.image}" alt="${song.title}">
                        <div class="play-overlay">
                            <i class="fas fa-play" style="color: #000; font-size: 18px;"></i>
                        </div>
                    </div>
                    <div class="song-info">
                        <div class="song-title">${song.title}</div>
                        <div class="song-artist">${song.artist}</div>
                    </div>
                `;
                popularSongsGrid.appendChild(songCard);
            });
        }


        document.addEventListener('DOMContentLoaded', () => {
            renderPopularSongs();
        });

        generateBtn.addEventListener('click', generatePlaylist);