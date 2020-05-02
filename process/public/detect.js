/* window.onload = function () {
      var image = document.querySelector('.img-container');
      var result = document.querySelector('#getCroppedCanvasModal');
      var minCroppedWidth = 320;
      var minCroppedHeight = 160;
      var maxCroppedWidth = 640;
      var maxCroppedHeight = 320;
      var cropper = new Cropper(image, {
        viewMode: 3,

        data: {
          x : 12 ,
          y : 12,
          width: 20,
          height: 15,
        },

        crop: function (event) {
          var width = event.detail.width;
          var height = event.detail.height;

          if (
            width < minCroppedWidth
            || height < minCroppedHeight
            || width > maxCroppedWidth
            || height > maxCroppedHeight
          ) {
            cropper.setData({
              width: 800,
              height: Math.max(minCroppedHeight, Math.min(maxCroppedHeight, height)),
            });
          }

          data.textContent = JSON.stringify(cropper.getData(true));
        },
        ready: function () {
          var image = new Image();

          image.src = cropper.getCroppedCanvas().toDataURL('image/jpeg');
          result.appendChild(image);
        },
      });
    }; */