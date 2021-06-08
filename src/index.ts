import MediaPlayer from './MediaPlayer';
import AutoPlay from './plugins/AutoPlay';
import AutoPause from './plugins/AutoPause';
import Observer, {CountSubscriptions} from './plugins/Observer';
import Ads from './plugins/Ads/index';


const video: HTMLMediaElement = document.querySelector(".video");
const buttonControllerPlay = document.querySelector(".play");
const buttonControllerMute = document.querySelector(".mute");

// Play es metodo y pues lo que ago al decir player.play() es llamar el metodo play y darle play al
//this.media que va a depender de lo que sea config que en este caso va a ser un objeto el cual tiene un
//elemento que vamos a utilizar

const player = new MediaPlayer({
    el: video,
    plugins: [ new AutoPlay(), new AutoPause(), new Ads()]
});

buttonControllerPlay.addEventListener('click',() => {
    player.togglePlay(buttonControllerPlay);
});

buttonControllerMute.addEventListener('click',() => {
    player.toggleMute(buttonControllerMute);
});

// Use offline (serviceWorker);
if('serviceWorker' in navigator){
    navigator.serviceWorker.register('./sw.js').catch(error => {
        console.log(error.message);
    })
}

//Subscriptions

const subscribedBnt: HTMLElement = document.querySelector('.subscribed-btn');

const subscriptions = new Observer(subscribedBnt, 'click');
const countSubscriptions = new CountSubscriptions();

subscriptions.subscribe(countSubscriptions);
