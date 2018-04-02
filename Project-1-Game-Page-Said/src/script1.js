$(document).ready(function(){
  let playerName = prompt("Enter your name and then we'll get started...");
  let cloversArr = [];
  let containerForClover = $('<div>').addClass('container')
  $('body').append(containerForClover)
  let numOfClovers = 100; // making clovers and adding them to an empty array: 'cloversArr'
  for(let i = 0; i < numOfClovers; i++){
    let divForClovers = $('<div>').addClass('divForClovers');
    let clover = $('<img>').attr('src', 'src/images/clover.png');
    clover.addClass('clover-image')
    divForClovers.append(clover);
    containerForClover.append(divForClovers);
    cloversArr.push(clover);
  }



let x = 0; // making scorecard
$('.divForClovers').on('click', function(event){
$(this).remove();
x++;
$('.scorecard').text(`score: ${x}`)



})

setInterval(function(){ // moving clovers at random
  for(let i = 0; i <= cloversArr.length; i++){
    $(cloversArr[i]).css("top", Math.random() * window.innerHeight);
    $(cloversArr[i]).css("left", Math.random() * window.innerWidth);

  }
}, 1000);

let time = setInterval(timer,1000); //creating a timer for the game

let allotedTime = 30;

function timer() {
  console.log(allotedTime);
  if(allotedTime >= 10){
    $('h2').html(`00:${allotedTime}`);
    allotedTime--;
  } else if(allotedTime < 10 && allotedTime > 0){
    $('h2').html(`00:0${allotedTime}`);
    allotedTime--;
  } else if(allotedTime === 0){
    $('h2').html(`00:0${allotedTime}`);
    alert(`Your final score is: ${x}`);
    clearInterval(time);
    $('.container').children("div").remove();
    $('.rain').remove();
    $('h2').remove();
    finalPage();
  }
    console.log('functions is over');
}

 function finalPage(){ // creating final page to load up form with artificial high_scores
    $('.scorecard').remove();
    $('body').css('background-image', 'url(src/images/Notre-Dame-du-Haut-Chapel-Ronchamp-Le-Corbusier.jpg)');
    let divForForm = $('<div>').addClass('divForForm');
    let highscoresForm = $('<form>').addClass('hsForm');
    let headerForForm = $(' <h1>Highest_Scores</h1>');
    let pForm = $('<p>');
    $(pForm).html(`E. Badu: 1,000,000<br>Tyrone (from Howard U.): 429,000<br>Ludwig Mies van der Rohe: 20,000<br>kyrie irving: 10,000<br>Aaron: 5,000<br>jon: 1,000<br>${playerName}: ${x}<br>`)
    highscoresForm.append(headerForForm);
    highscoresForm.append(pForm);
    divForForm.append(highscoresForm);
    $('body').append(divForForm);
}

}); // closing tag for document ready...
