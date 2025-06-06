document.addEventListener('DOMContentLoaded', function() {
  var countdown = document.querySelectorAll('.js-countdown');

  countdown.forEach((countdown) => {
    // Set the date we're counting down to
    var countDown = countdown.dataset.time;
    var countDownDate = new Date(countDown).getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {

      // Get today's date and time
      var now = new Date().getTime();

      // Find the distance between now and the count down date
      var distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if(seconds < 10){
        seconds = '0'+seconds
      }

      if(minutes < 10){
        minutes = '0'+minutes
      }

      if(hours < 10){
        hours = '0'+hours
      }

      if(days > 0) {
        days = days + ' дн. '
      } else {
        days = ''
      }

      // Display the result in the element with id="demo"
      countdown.innerHTML = days + hours + ":" + minutes + ":" + seconds;

      // If the count down is finished, write some text
      if (distance < 0) {
        clearInterval(x);
        countdown.closest('.timer').classList.add('is-disabled');
        countdown.innerHTML = "00:00:00";
      }
    }, 1000);
  });
});
