  $(document).ready(function() {
    function marks() {
      var ans1 = document.querySelector('input[name="q1"]:checked').value;
      var ans2 = document.querySelector('input[name="q2"]:checked').value;
      var ans3 = document.querySelector('input[name="q3"]:checked').value;
      var ans4 = document.querySelector('input[name="q4"]:checked').value;
      var ans5 = document.querySelector('input[name="q5"]:checked').value;
    var answer = 0;
    if (ans1 === "script") {
      answer += 10;
  }
  if (ans2 === "?") {
      answer += 10;
  }
  if (ans3 === "var") {
      answer += 10;
  }
  if (ans5 === "c2") {
      answer += 10;
  }
  if (ans5 === "java") {
      answer += 10;
  }

}



    $("#button").click(function result(form) {



        alert(answer);



});
$(".button").click(function() {
  $("#questions").slideToggle();
});
});
