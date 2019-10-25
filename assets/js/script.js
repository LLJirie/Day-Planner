$(document).ready(function () {

  // event listener to add to local storage
  $(".save").on("click", function (event) {
    var timey = event.target.name;
    var hourlySchedule = $(this).siblings("textarea").val();
    console.log(timey)
    localStorage.setItem(timey, hourlySchedule);
  });



})


// This is moment.js current time()
var day = moment();


// $("#moment").text(day);
$("#moment").text(moment().format("dddd, MMMM Do,hh:mm a"));

// // Function () {
// if time < currentHour;
// else if time === currentHour;
// else time > currentHour;}
$("button").on("click", function () {
  var $text9am = $("#text9am");
  var $text10am = $("#text10am");
  var $text11am = $("#text11am");
  var $text12pm = $("#text12pm");
  var $text1pm = $("#text1pm");
  var $text2pm = $("#text2pm");
  var $text3pm = $("#text3pm");
  var $text4pm = $("#text4pm");
  var $text5pm = $("#text5pm");
  localStorage.setItem("9am", ($text9am.val()));
  localStorage.setItem("10am", ($text10am.val()));
  localStorage.setItem("11am", ($text11am.val()));
  localStorage.setItem("12pm", ($text12pm.val()));
  localStorage.setItem("1pm", ($text1pm.val()));
  localStorage.setItem("2pm", ($text2pm.val()));
  localStorage.setItem("3pm", ($text3pm.val()));
  localStorage.setItem("4pm", ($text4pm.val()));
  localStorage.setItem("55pm", ($text5pm.val()));
})
$("#text9am").val((localStorage.getItem("9am")));
$("#text10am").val((localStorage.getItem("10am")));
$("#text11am").val((localStorage.getItem("11am")));
$("#text12pm").val((localStorage.getItem("12pm")));
$("#text1pm").val((localStorage.getItem("1pm")));
$("#text2pm").val((localStorage.getItem("2pm")));
$("#text3pm").val((localStorage.getItem("3pm")));
$("#text4pm").val((localStorage.getItem("4pm")));
$("#text5pm").val((localStorage.getItem("5pm")));

if (day < 10.00) {
  textarea.style.color.pink
} else if (time === 10.00) {
  textarea.style.color.blue;
} else {
  textarea.style.color.yellow;
}