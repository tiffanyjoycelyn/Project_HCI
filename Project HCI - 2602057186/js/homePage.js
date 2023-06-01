$(document).ready(function () {
  var slides = $(".slides");
  var curr = 0;
  var prev = 0;

  for (let i = 1; i < slides.length; i++) {
    slides.eq(i).hide();
  }

  $("#slide-right").click(nextImage);
  $("#slide-left").click(prevImage);

  setInterval(() => {
    prev = curr;
    curr++;
    if (curr > slides.length) {
      curr = 0;
    }
    slides.eq(prev).fadeOut(0);
    slides.eq(curr).fadeIn(1000);
  }, 7000);

  function prevImage() {
    prev = curr;
    curr--;
    if (curr < 0) {
      curr = slides.length - 1;
    }
    slides.eq(prev).fadeOut(0);
    slides.eq(curr).fadeIn(1000);
  }

  function nextImage() {
    prev = curr;
    curr++;
    if (curr > slides.length) {
      curr = 0;
    }
    slides.eq(prev).fadeOut(0);
    slides.eq(curr).fadeIn(1000);
  }
});

runSlider();

