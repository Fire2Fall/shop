document.addEventListener('DOMContentLoaded', function() {
  new ChiefSlider('.slider');
});
document.addEventListener('DOMContentLoaded', function() {
  var elms = document.querySelectorAll('.slider');
  for (var i = 0, len = elms.length; i < len; i++) {
    new ChiefSlider(elms[i], {
      autoplay: true,
      interval: 5000,
    });
  }
});
