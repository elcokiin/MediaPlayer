function MediaPlayer(config){
    this.media = config.el;
    this.plugins = config.plugins || [];

    this._initPlugins();
}

MediaPlayer.prototype._initPlugins = function(){
    const player = {
        play: () => this.play(),
        pause: () => this.pause(),
        media: this.media,
        get muted(){
            return this.media.muted;
        },
        set muted(value) {
            this.media.muted = value;
        }
    }
    this.plugins.forEach(plugin => {
        plugin.run(player);
    })
}
MediaPlayer.prototype.mute = function(){
    this.media.muted = true;
}

MediaPlayer.prototype.unmute = function(){
    this.media.muted = false;
}

MediaPlayer.prototype.play = function(){
    this.media.play();
}
MediaPlayer.prototype.pause = function(){
    this.media.pause();
}
MediaPlayer.prototype.togglePlay = function(buttonPlay){
    if (this.media.paused) {
        this.play();
        buttonPlay.innerHTML = 'Pause';
    }
    else {
        this.pause();
        buttonPlay.innerHTML = 'Play';
    }
}
MediaPlayer.prototype.toggleMute = function(buttonMute){
    if (this.media.muted) {
        this.unmute();
        buttonMute.innerHTML = 'Mute';
    }
    else {
        this.mute();
        buttonMute.innerHTML = 'Unmute';
    }
}

export default MediaPlayer;