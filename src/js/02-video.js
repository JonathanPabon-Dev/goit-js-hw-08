import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

let currentTime = localStorage.getItem('videoplayer-current-time');
if (currentTime) {
  player.setCurrentTime(currentTime);
}

player.on(
  'timeupdate',
  throttle(data => {
    localStorage.setItem('videoplayer-current-time', data.seconds);
  }, 1000)
);
