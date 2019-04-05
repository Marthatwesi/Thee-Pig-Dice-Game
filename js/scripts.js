//back end logic
$(document).ready(function() {
  $("input[type='button']").click(function() {
    //array for storing name ie quiz1 to quiz10 created
    arr = [];
    for (i = 1; i <= 10; i++) {
      query = "quiz" + i;
      arr.push(query);
    }
    //Do a form validation to check if all the questions have been answered
    var inputs = document.getElementById("quiz").elements;
    var count = 0;
    for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].type == 'radio' && inputs[i].checked) {
        count++;
      }
    }
    if (count < 10) {
      alert("Stop kidding and get your work done. :(");
      document.location.reload();
    } else {
      alert("You have answered all the questions,,,yyoooooo :)");
    }

    //an array for storing the checked boxes created
    arr2 = [];
    for (var index = 0; index < arr.length; index += 1) {
      var questions = parseInt($("input[name=" + arr[index] + "]:checked").val());
      arr2.push(questions);
    }
    //total of the checked values collected
    var total = 0;
    for (var index = 0; index < arr2.length; index += 1) {
      total += arr2[index];
    }
    //Display the total marks
    document.getElementById('finalscore').innerHTML = "you have scored " + total + "%";

    //excellent, fair and poor grading
    if (total >= 80) {
      document.getElementById('message').innerHTML = "Conggssssss!!!!!!";
    } else if (total >= 50 && total < 80) {
      document.getElementById('message').innerHTML = "Fairly done";
    } else {
      document.getElementById('message').innerHTML = "Please rebound the test";
    }


  });
});

// scrolldown bar
$(document).ready(function() {
  $(window).scroll(function() {
    var a = $(window).scrollTop(); //shows position of the scroll in pixels
    var b = $(document).height(); //full height of doc
    var c = $(window).height(); //window height
    scrollPercent = (a / (b - c)) * 100;
    var position = scrollPercent;

    $("#progressbar").attr('value', position); //setting the value of the progressbar
    $(event).preventDefault();

  });
});
