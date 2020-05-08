
function add() {
var $num = parseInt($('#input').val());

  var $num2 = parseInt($('#variable').text());
 var $answer = $num2 + $num;
 $('#variable').text(`${$answer}`)
}

function subtr() {
    var $num = parseInt($('#input').val());

  var $num2 = parseInt($('#variable').text());
 var $answer = $num2 - $num;
 $('#variable').text(`${$answer}`)
}