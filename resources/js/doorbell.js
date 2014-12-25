window.onload = function() {
  window.addEventListener('userproximity', function(event){
    var audio = new Audio('	http://www.soundjay.com/door/sounds/doorbell-6.mp3');             
    audio.mozAudioChannelType = 'alarm';
    audio.volume.alarm = 15;
    
    if (event.near){
      audio.play();
      console.log("activado")
    }
    else {
      audio.pause();
      console.log("desactivado")
    }
  });
}
