import Player from '@vimeo/player';

const currentTime = localStorage.getItem("videoplayer-current-time");
const throttle = require('lodash.throttle');
const player = new Player('vimeo-player', {
    id: 236203659,
    width: 640
});

const onTimeupdate = seconds => {
  localStorage.setItem("videoplayer-current-time", seconds);
};

player.on('timeupdate', throttle(({ seconds }) => { onTimeupdate(seconds) }, 1000));
player.setCurrentTime(currentTime);