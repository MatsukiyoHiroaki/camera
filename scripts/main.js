(() => {
    console.log("****処理開始*****");

    const video = document.querySelector('video');
    const canvas = document.querySelector('canvas');

    console.log('video', video);
    console.log('canvas', canvas);

    let context = canvas.getContext('2d');

    //カメラ使えるかチェック
    let hasGetUserMedia = function() {
        return !!(navigator.getUserMedia || navigator.webkitGetUserMedia ||
          navigator.mozGetUserMedia || navigator.msGetUserMedia);
    }


    console.log('hasGetUserMedia', hasGetUserMedia());

    window.URL = window.URL || window.webkitURL;
    navigator.getUserMedia({video: true}, function(stream) {
      video.srcObject = stream;
    }, function(e) {
      console.log('エラー!', e);
    });

    console.log("****終了*****");
})();