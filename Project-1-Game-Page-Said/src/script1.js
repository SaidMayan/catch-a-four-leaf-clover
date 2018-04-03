$(document).ready(() => {
  const playerName = prompt("Enter your name and then we'll get started...");
  const cloversArr = []; // empty array to hold clovers
  const containerForClover = $('<div>').addClass('container');
  $('body').append(containerForClover);
  const numOfClovers = 100; // making clovers and adding them to an empty array: 'cloversArr'
  for (let i = 0; i < numOfClovers; i++) {
    const divForClovers = $('<div>').addClass('divForClovers');
    const clover = $('<img>').attr('src', 'src/images/clover.png');
    clover.addClass('clover-image');
    divForClovers.append(clover);
    containerForClover.append(divForClovers);
    cloversArr.push(clover);
  }


  let x = 0; // making scorecard, where x variable holds the score
  $('.divForClovers').on('click', function (event) {
    $(this).remove();
    x++;
    $('.scorecard').text(`score: ${x}`);
  });

  setInterval(() => { // moving clovers at random, code sourced from 'duckhunter' game...
    for (let i = 0; i <= cloversArr.length; i++) {
      $(cloversArr[i]).css('top', Math.random() * window.innerHeight);
      $(cloversArr[i]).css('left', Math.random() * window.innerWidth);
    }
  }, 1000);

  const time = setInterval(timer, 1000); // creating a timer for the game
  let allotedTime = 60;
  function timer() {
    if (allotedTime >= 10) {
      $('h2').html(`00:${allotedTime}`);
      allotedTime--;
    } else if (allotedTime < 10 && allotedTime > 0) {
      $('h2').html(`00:0${allotedTime}`);
      allotedTime--;
    } else if (allotedTime === 0) {
      $('h2').html(`00:0${allotedTime}`);
      alert(`Your final score is: ${x}`);
      clearInterval(time);
      $('.container').children('div').remove();
      $('.rain').remove();
      $('h2').remove();
      finalPage();
      resetGame();
    }
  }

  function finalPage() { // creating final page to load up form with artificial high_scores
    $('.scorecard').remove();
    $('body').css('background-image', 'url(src/images/Notre-Dame-du-Haut-Chapel-Ronchamp-Le-Corbusier.jpg)');
    const divForForm = $('<div>').addClass('divForForm');
    const highscoresForm = $('<form>').addClass('hsForm');
    const headerForForm = $(' <h1>Highest_Scores</h1>');
    const pForm = $('<p>');
    $(pForm).html(`E. Badu: 1,000,000<br>Tyrone (from Howard U.): 429,000<br>Ludwig Mies van der Rohe: 20,000<br>kyrie irving: 10,000<br>Aaron: 5,000<br>jon: 1,000<br>${playerName}: ${x}<br>`);
    highscoresForm.append(headerForForm);
    highscoresForm.append(pForm);
    divForForm.append(highscoresForm);
    $('body').append(divForForm);
  }

  function resetGame() { // function to reload game if player isn't happy with his/her score
    const reset = confirm("Try again at your luck? If so, click 'OK'...\nOtherwise, click cancel to see High_Scores.");
    if (reset === true) {
      location.reload();
    }
  }
}); // closing tag for document ready...
