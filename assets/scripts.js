////set the "9am" to the save button
//$("textarea").text(localStorage.getItem("9am"));

// data-time="" attribute added to each text area and button
// use moment to determine if current time is past/present/future and apply class to it
// $("textarea").addClass("present")

//use this to access text area closest to a button with a data-time
let currentDay = moment().format("dddd MMMM Do");
let currentTime = moment().format("HH:mm")
$("#currentDay").text(currentDay)

$('#btn9').on('click',function(event) {

    let $submitText = $(event.target).siblings('textarea').val()
    localStorage.setItem("btn9",$submitText);
 })

 $("#text9").text(localStorage.getItem("btn9"));


