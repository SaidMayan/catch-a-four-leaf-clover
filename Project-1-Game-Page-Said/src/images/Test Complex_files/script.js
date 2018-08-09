$(document).ready(() => {
let x = 0;
let y = -20;
let container = $('.container');
let overlay = $('.overlay');
let overlay2 = $('.overlay2');
let wakeUpAndLive = $('.wakeUpAndLive');
// let nixonWatch = $('.nixonWatch');
// let theDiplomat = $('.theDiplomat');
// let shopNow = $('.shopNow');
// let nixonCopy = $('.nixonCopy');
overlay.hide();
overlay2.hide();


container.delay(1000).fadeIn("slow", "swing", function() {
  $(this).css("background-image", "url('src/images/morgan-massen-waves.jpg')");
});

container.css('backgroundPosition', x + 'px' + ' ' + y + 'px');
let interval_1 = setInterval(function() {
  container.css('backgroundPosition', x + 'px' + ' ' + y + 'px');
  y = y - 1.5;
  if( y === -275 ){
  overlay.fadeIn('slow');
  clearInterval(interval_1);
  }
}, 30);

setTimeout(nextBackground, 10000);

function nextBackground() {
  container.css("background-image", "none");
  overlay2.fadeIn('slow');
}

function repeatedBackground() {

}

});
