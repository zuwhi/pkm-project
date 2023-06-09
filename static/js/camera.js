const video = document.getElementById('video');
const wadah = document.getElementById('wadah');
const canvas = document.getElementById('canvas');
const snap = document.getElementById('snap');
const errorMsgElement = document.querySelector('span#errorMsg');

// Cek apakah peramban web mendukung API kamera web
if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
  // Dapatkan kamera belakang
    
  navigator.mediaDevices.getUserMedia({ 
    video: {
      width: { ideal: 1000 },
      height: { ideal: 600 },
      facingMode: { 
        exact: "environment" 
      } 
    } 
  }).then(function(stream) {
    // Atur stream ke elemen video HTML
    video.srcObject = stream;
    video.play();
  });
}
snap.addEventListener('click', function() {
   
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
    });

    init();