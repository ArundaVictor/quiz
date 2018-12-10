  $(document).ready(function() {
    var answers = []
      answers.push(ans1, ans2, ans3, ans4, ans5);
    var ans1 = parseInt($("input[name=q1]:checked").val());
    var ans2 = parseInt($("input[name=q2]:checked").val());
    var ans3 = parseInt($("input[name=q3]:checked").val());
    var ans4 = parseInt($("input[name=q4]:checked").val());
    var ans5 = parseInt($("input[name=q5]:checked").val());

    $("#button").click(function result(form) {
      for (i=0; i<=answers.length; i++) {
        var total = 0;
        total  += answers[i] <<0 ;
        alert(total);

    };

});
$(".button").click(function() {
  $("#questions").slideToggle();
});
});
