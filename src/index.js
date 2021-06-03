import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';

const video = document.querySelector(".video");
const buttonControllerPlay = document.querySelector(".play");
const buttonControllerMute = document.querySelector(".mute");

// Play es metodo y pues lo que ago al decir player.play() es llamar el metodo play y darle play al
//this.media que va a depender de o que sea config que en este caso va a ser un objeto el cual tiene un
//elemento que vamos a utilizar

const player = new MediaPlayer({ el: video, plugins: [
    // new AutoPlay
    ] });

buttonControllerPlay.addEventListener('click',() => {
    player.togglePlay(buttonControllerPlay);
});

buttonControllerMute.addEventListener('click',() => {
    player.toggleMute(buttonControllerMute);
});