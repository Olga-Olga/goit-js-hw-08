
import Player from '@vimeo/player';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
// player.play(); // Воспроизведение
// player.pause(); // Пауза
// player.setCurrentTime(30); // Установка времени воспроизведения
// player.setVolume(0.5);


 player.on('play', function() {
        console.log('Воспроизведение началось');
    });

player.on('pause', function() {
  console.log('Воспроизведение приостановлено');
});
    

player.on('timeupdate', function (data) {
    console.log(data.seconds);
    localStorage.setItem("videoplayer-current-time", data.seconds);
});
    
 
const theme = localStorage.getItem("videoplayer-current-time");
console.log(theme)


player.setCurrentTime(theme)
