console.log("connected");

//select the li elements and toggle the copleted class when clicked

$("ul").on("click", "li", function () {
  $(this).toggleClass("completed");
});

//select the spans and delete the li once the span is clicked

$("ul").on("click", "span", function (event) {
  event.stopPropagation();
  $(this)
    .parent()
    .fadeOut(500, function () {
      $(this).remove();
    });
});

//select input and get the text to make a new li

$("input[type='text']").keypress(function (event) {
  // console.log("Key Pressed");
  if (event.which === 13) {
    var todoText = $(this).val();
    $(this).val("");
    if (todoText.length > 0) {
      $("ul").append(
        "<li><span><i class='far fa-trash-alt'></i></span> " +
          todoText +
          "</li>"
      );
    }
  }
});

//hide and show the input when pressing thw add icon
$(".fas").click(function () {
  $("input").fadeToggle();
});
