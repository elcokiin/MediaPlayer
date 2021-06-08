class MediaPlayer {
    media: HTMLMediaElement;
    plugins: Array<any>;
    container: HTMLElement;
    constructor(config: { el: HTMLMediaElement; plugins: any[]; }) {
        this.media = config.el;
        this.plugins = config.plugins || [];

        this.initPlayer();
        this.initPlugins();
    }
    private initPlayer() {
        this.container = document.createElement('div');
        this.container.className = 'mediaPlayer';
        this.media.parentNode.insertBefore(this.container, this.media);
        this.container.appendChild(this.media)
    }
    private initPlugins() {
        this.plugins.forEach(plugin => {
            plugin.run(this);
        });
    }
    mute() {
        this.media.muted = true;
    }
    unmute() {
        this.media.muted = false;
    }
    play() {
        this.media.play();
    }
    pause() {
        this.media.pause();
    }
    togglePlay(buttonPlay) {
        if (this.media.paused) {
            this.play();
            buttonPlay.innerHTML = 'Pause';
        }
        else {
            this.pause();
            buttonPlay.innerHTML = 'Play';
        }
    }
    toggleMute(buttonMute) {
        if (this.media.muted) {
            this.unmute();
            buttonMute.innerHTML = 'Mute';
        }
        else {
            this.mute();
            buttonMute.innerHTML = 'Unmute';
        }
    }
}




export default MediaPlayer;