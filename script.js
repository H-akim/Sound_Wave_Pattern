var preloader = document.getElementById("preloader");
window.addEventListener("load",function(){
    preloader.style.display = "none";
})

var wavesurfer = WaveSurfer.create({
    container: '#waveform',
    waveColor: '#ddd',
    progressColor: '#ff006c',
    responsive: true,
    height: 100,
    
    url: 'images/Mariam.mp3',
})

wavesurfer.on('interaction', () => {
    wavesurfer.play();
})

var playBtn = document.getElementById("play_btn");
playBtn.addEventListener("click", ()=>{
    wavesurfer.playPause();
    if(playBtn.src.includes("play.png")){
        playBtn.src = "images/pause.png";
    }else{
        playBtn.src = "images/play.png";
    }
})

wavesurfer.on('finish', () => {
    playBtn.src = "images/play.png";
    wavesurfer.stop();
})