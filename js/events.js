//define functions here
function getIt() {
  $('p').on('click', function() {
    alert("Hey!");
  })
}

function frameIt() {
  $('img').on('load', function() {
      $('img').addClass('tasty');
  })
}

function pressIt() {
  $('form input').on('keydown', function(e) {
    if (e.which == '71')
      alert("You just pressed the forbidden letter!");
  })
}

function submitIt(){
    $('form').on('submit', function() {
      alert("Your form is going to be submitted now.")
    })
}

$(document).ready(function(){
// call functions here
getIt();
frameIt();
pressIt();
submitIt();
});
