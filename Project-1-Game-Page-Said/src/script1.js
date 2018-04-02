$(document).ready(function(){


  let cloversArr = [];
  let containerForClover = $('<div>').addClass('container')
  $('body').append(containerForClover)
  let numOfClovers = 100;
  for(let i = 0; i < numOfClovers; i++){
    let divForClovers = $('<div>').addClass('divForClovers');
    let clover = $('<img>').attr('src', 'src/images/clover.png');
    clover.addClass('clover-image')
    divForClovers.append(clover);
    containerForClover.append(divForClovers);
    cloversArr.push(clover);
  }



let x = 0;
$('.divForClovers').on('click', function(event){
$(this).remove();
x++;
$('.scorecard').text(`score: ${x}`)



})

setInterval(function(){
  for(let i = 0; i <= cloversArr.length; i++){
    $(cloversArr[i]).css("top", Math.random() * window.innerHeight);
    $(cloversArr[i]).css("left", Math.random() * window.innerWidth);

  }
}, 1000);

let time = setInterval(timer,1000);

let allotedTime = 10;

function timer() {
  console.log(allotedTime);
  if(allotedTime >= 10){
    $('h2').html(`00:${allotedTime}`);
    allotedTime--;
    console.log('timer is above 10');
  } else if(allotedTime < 10 && allotedTime > 0){
    $('h2').html(`00:0${allotedTime}`);
    allotedTime--;
    console.log('timer is below 10');
  } else if(allotedTime === 0){
    $('h2').html(`00:0${allotedTime}`);
    // console.log(allotedTime);
    // clearInterval(time);
    alert(`Your final score is: ${x}`);
    clearInterval(time);
    $('.container').children("div").remove();
    $('.rain').remove();
    $('body').css('background-image', 'url(src/images/Notre-Dame-du-Haut-Chapel-Ronchamp-Le-Corbusier.jpg)');
    let divForForm = $('<div>').addClass('divForForm');
    let highscoresForm = $('<form>').addClass('hsForm');
    let headerForForm = $(' <h1>Highest_Scores</h1>');
    let pForm = $('<p>');
    $(pForm).html(`E. Badu: 1,000,000<br>Tyrone (from Howard U.): 429,000<br>Ludwig Mies van der Rohe: 20,000<br>Kyrie Irving: 10,000<br>Aaron: 5,000<br>Jon: 1,000<br>Einstein: ${x}<br>`)
    highscoresForm.append(headerForForm);
    highscoresForm.append(pForm);
    divForForm.append(highscoresForm);
    $('body').append(divForForm);
  }
    console.log('functions is over');
}

}); // closing tag for document ready...
