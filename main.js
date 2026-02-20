const musicDB = [
    {
        file: "./songs/Mascara - Deftones.mp3",
        name: "Mascara",
        artist: "Deftones",
        album: "Around the Fur",
    },
    {
        file: "./songs/Du Hast - Rammstein.mp3",
        name: "Du Hast",
        artist: "Rammstein",
        album: "Sechnsucht",
    },
    {
        file: "./songs/Mascara - Deftones.mp3",
        name: "Mascara",
        artist: "Deftones",
        album: "Around the Fur",
    },
    {
        file: "./songs/Du Hast - Rammstein.mp3",
        name: "Du Hast",
        artist: "Rammstein",
        album: "Sechnsucht",
    },
    {
        file: "./songs/Du Hast - Rammstein.mp3",
        name: "Du Hast",
        artist: "Rammstein",
        album: "Sechnsucht",
    },
    {
        file: "./songs/Mascara - Deftones.mp3",
        name: "Mascara",
        artist: "Deftones",
        album: "Around the Fur",
    },
    {
        file: "./songs/Mascara - Deftones.mp3",
        name: "Mascara",
        artist: "Deftones",
        album: "Around the Fur",
    },
    {
        file: "./songs/Du Hast - Rammstein.mp3",
        name: "Du Hast",
        artist: "Rammstein",
        album: "Sechnsucht",
    },
    {
        file: "./songs/Mascara - Deftones.mp3",
        name: "Mascara",
        artist: "Deftones",
        album: "Around the Fur",
    },
    {
        file: "./songs/Du Hast - Rammstein.mp3",
        name: "Du Hast",
        artist: "Rammstein",
        album: "Sechnsucht",
    },
    {
        file: "./songs/Du Hast - Rammstein.mp3",
        name: "Du Hast",
        artist: "Rammstein",
        album: "Sechnsucht",
    },
    {
        file: "./songs/Mascara - Deftones.mp3",
        name: "Mascara",
        artist: "Deftones",
        album: "Around the Fur",
    },
    {
        file: "./songs/Mascara - Deftones.mp3",
        name: "Mascara",
        artist: "Deftones",
        album: "Around the Fur",
    },
    {
        file: "./songs/Du Hast - Rammstein.mp3",
        name: "Du Hast",
        artist: "Rammstein",
        album: "Sechnsucht",
    },
    {
        file: "./songs/Mascara - Deftones.mp3",
        name: "Mascara",
        artist: "Deftones",
        album: "Around the Fur",
    },
    {
        file: "./songs/Du Hast - Rammstein.mp3",
        name: "Du Hast",
        artist: "Rammstein",
        album: "Sechnsucht",
    },
    {
        file: "./songs/Du Hast - Rammstein.mp3",
        name: "Du Hast",
        artist: "Rammstein",
        album: "Sechnsucht",
    },
    {
        file: "./songs/Mascara - Deftones.mp3",
        name: "Mascara",
        artist: "Deftones",
        album: "Around the Fur",
    }
];

const songlist = document.getElementById("songlist");
const player = document.getElementById("player");
const sliderAudio = document.getElementById("sliderAudio")
const sliderDuration = document.getElementById("sliderDuration")
const prevBtn = document.getElementById("previous");
const nextBtn = document.getElementById("next");
const playPauseBtn = document.getElementById("playpausebtn");
const durationSliderCurrentTime = document.getElementById("durationSliderCurrentTime");
const durationSliderSongLength = document.getElementById("durationSliderSongLength");
var songIndex;

musicDB.forEach((song) => {
    
    const songBox = document.createElement("div");
    songBox.className = "song-box";
    
    const title = document.createElement("h2");
    title.innerText = song.name + " by " + song.artist

    
    const btn = document.createElement("button");
    btn.className = "playBtn";
    btn.innerHTML = `
    <img src="./images/playBtn.png/">`;

    btn.onclick = () => {
        songIndex = musicDB.indexOf(song);
        console.log("Current Song (index): " + songIndex);
        console.log("Current Song: " + musicDB[songIndex].name + " by " + musicDB[songIndex].artist); 
        player.src = song.file;
        player.play();
    };
    
    const deadline = document.createElement("hr");


    songBox.appendChild(title)
    songBox.appendChild(btn);
    songBox.appendChild(deadline)

    songlist.appendChild(songBox);
});


playPauseBtn.onclick = function() {
    if (player.paused){
        if (songIndex === undefined){
            return;
        } 
        else{
            player.play();
        }
    } else if (player.paused === false){
        player.pause();
    };
};

nextBtn.onclick = function() {
    songIndex++;
    if (songIndex >= musicDB.length) {
        songIndex = 0;
    };

    player.pause();
    player.src = musicDB[songIndex].file;
    player.load();
    console.log("Current Song (index): " + songIndex);
    console.log("Current Song: " + musicDB[songIndex].name + " by " + musicDB[songIndex].artist); 
    player.play();
};

prevBtn.onclick = function() {
    songIndex++;
    if (songIndex >= musicDB.length) {
        songIndex = 0;
    };

    player.pause();
    player.src = musicDB[songIndex].file;
    player.load();
    console.log("Current Song (index): " + songIndex);
    console.log("Current Song: " + musicDB[songIndex].name + " by " + musicDB[songIndex].artist); 
    player.play();
};

player.onplay = function() {
    playPauseBtn.innerHTML = `
            <img src="./images/pauseBtn.png/">`;
};

player.onpause = function() {
    playPauseBtn.innerHTML = `
            <img src="./images/playBtn.png/">`;
};

sliderAudio.oninput = function() {
    player.volume = sliderAudio.value/100;
};

sliderDuration.oninput = function() {
    player.currentTime = sliderDuration.value;
};

player.addEventListener("loadedmetadata", () => {
    sliderDuration.max = Math.floor(player.duration);
    durationSliderSongLength.innerText = (Math.floor(player.duration/60) > 9 ? Math.floor(player.duration/60) : '0' + Math.floor(player.duration/60))+":"+(Math.floor(player.duration%60) > 9 ? Math.floor(player.duration%60) : '0' + Math.floor(player.duration%60));
    player.volume = sliderAudio.value/100;
});

player.addEventListener("timeupdate", () => {
    sliderDuration.value = player.currentTime;
    durationSliderCurrentTime.innerText = (Math.floor(player.currentTime/60) > 9 ? Math.floor(player.currentTime/60) : '0' + Math.floor(player.currentTime/60))+":"+(Math.floor(player.currentTime%60) > 9 ? Math.floor(player.currentTime%60) : '0' + Math.floor(player.currentTime%60));
});
