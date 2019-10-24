$(document).ready(function(){

// event listener to add to local storage
$(".save").on("click", function() {
            
   var hourlySchedule = $("#text").val();
   localStorage.setItem($((this).attr(hourlySchedule);

    });

}); 
// This is moment.js current time
$(function(){
    var day = new Date(2014, 4, 20,11,48,33);
    moment().format();
    var mome=moment(day);
    $('span').text(day);
    $('p').text(mome.format("MMM D"));
    });

    // // Function () {
    // if time < currentHour;
    // else if time === currentHour;
    // else time > currentHour;}

