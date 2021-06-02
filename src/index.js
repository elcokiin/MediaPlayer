const video = document.querySelector(".video");
const buttonController = document.querySelector(".play");

// Play es metodo y pues lo que ago al decir player.play() es llamar el metodo play y darle play al
//this.media que va a depender de o que sea config que en este caso va a ser un objeto el cual tiene un
//elemento que vamos a utilizar

function MediaPlayer(config){
    this.media = config.el;
}
MediaPlayer.prototype.play = function(){
    this.media.play();
}
MediaPlayer.prototype.pause = function(){
    this.media.pause();
}

const player = new MediaPlayer({ el: video });

buttonController.addEventListener('click',() => {
    const controller = buttonController.classList.toggle("pause");
    (controller) ? player.pause() : player.play();
});