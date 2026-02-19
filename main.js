const musicDB = [
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
    },{
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
    }   
];

const songlist = document.getElementById("songlist");
const player = document.getElementById("player");
const sliderAudio = document.getElementById("sliderAudio")
const sliderDuration = document.getElementById("sliderDuration")
const prevBtn = document.getElementById("previous");
const nextBtn = document.getElementById("next");
const playPause = document.getElementById("playpause");

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
        var songIndex = musicDB.indexOf(song);
        console.log(songIndex);
        player.src = song.file;
        player.play();
    };
    
    const deadline = document.createElement("hr");


    songBox.appendChild(title)
    songBox.appendChild(btn);
    songBox.appendChild(deadline)

    songlist.appendChild(songBox);
});


playPause.onclick = function() {
    if (player.paused){
        player.play();
        playPause.innerHTML = `
        <img src="./images/pauseBtn.png/">`;
    } else if (player.paused === false){
        player.pause();
        playPause.innerHTML = `
        <img src="./images/playBtn.png/">`;
    };
};


sliderAudio.oninput = function() {
    player.volume = sliderAudio.value;
};

sliderDuration.oninput = function() {
    player.currentTime = sliderDuration.value;
};

player.addEventListener("loadedmetadata", () => {
    sliderDuration.max = Math.floor(player.duration);
});

player.addEventListener("timeupdate", () => {
    sliderDuration.value = player.currentTime;
});