$(document).ready(function() {
  $("form#input").submit(function(event) {
    const question1 = $("select#question-1").val();

    if (question1 === "1"){
      $("#output").text("You're a cucumber");
    } else if (question1 === "2"){
      $("#output").text("You're a walrus");
    } else if (question1 === "potatoes") {
      $("#output").text("Why did you pick potatoes");
    } else {
      $("#output").text("Error");
    }
    event.preventDefault();
  });
});