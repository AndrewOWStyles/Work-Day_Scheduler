// localStorage.setItem("9am", "example text") set the "9am" to the save button
// $("textarea").text(localStorage.getItem("9am")) 

// data-time="" attribute added to each text area and button
// use moment to determine if current time is past/present/future and apply class to it
// $("textarea").addClass("present")

//use this to access text area closest to a button with a data-time
$("button").on("click", function(event){

    console.log($(event.target).siblings("textarea").val())
    console.log($(event.target).attr("data-time"))

})

let currentDay = moment().format("dddd MMMM Do");
$("#currentDay").text(currentDay)