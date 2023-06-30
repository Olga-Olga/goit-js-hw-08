
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
player.play(); // Воспроизведение
player.pause(); // Пауза
player.setCurrentTime(30); // Установка времени воспроизведения
player.setVolume(0.5); 
    player.on('play', function() {
        console.log('Воспроизведение началось');
    });

    player.on('pause', function() {
  console.log('Воспроизведение приостановлено');
    });

player.on('timeupdate', function () {
    console.log('timeupdate', data.seconds);
    });


    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });

    const onPlay = function(data) {
    // data is an object containing properties specific to that event
};

player.on('play', onPlay);

