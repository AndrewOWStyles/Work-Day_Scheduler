let currentDay = moment().format("dddd MMMM Do");
let currentTime = moment().format("HH:mm")
$("#currentDay").text(currentDay)

$('#btn9').on('click',function(event) {

    let $saveText = $(event.target).siblings('#text10').val()
    localStorage.setItem("btn9",$saveText);
 })
$('#btn10').on('click',function(event) {

    let $saveText = $(event.target).siblings('#text10').val()
    localStorage.setItem("btn10",$saveText);
 })
$('#btn11').on('click',function(event) {

    let $saveText = $(event.target).siblings('#text11').val()
    localStorage.setItem("btn11",$saveText);
 })
$('#btn12').on('click',function(event) {

    let $saveText = $(event.target).siblings('#text12').val()
    localStorage.setItem("btn12",$saveText);
 })
$('#btn13').on('click',function(event) {

    let $saveText = $(event.target).siblings('#text13').val()
    localStorage.setItem("btn13",$saveText);
 })
$('#btn14').on('click',function(event) {

    let $saveText = $(event.target).siblings('#text14').val()
    localStorage.setItem("btn14",$saveText);
 })
$('#btn15').on('click',function(event) {

    let $saveText = $(event.target).siblings('#text15').val()
    localStorage.setItem("btn15",$saveText);
 })
$('#btn16').on('click',function(event) {

    let $saveText = $(event.target).siblings('#text16').val()
    localStorage.setItem("btn16",$saveText);
 })
$('#btn17').on('click',function(event) {

    let $saveText = $(event.target).siblings('#text17').val()
    localStorage.setItem("btn17",$saveText);
 })

 $("#text9").text(localStorage.getItem("btn9"));
 $("#text10").text(localStorage.getItem("btn10"));
 $("#text11").text(localStorage.getItem("btn11"));
 $("#text12").text(localStorage.getItem("btn12"));
 $("#text13").text(localStorage.getItem("btn13"));
 $("#text14").text(localStorage.getItem("btn14"));
 $("#text15").text(localStorage.getItem("btn15"));
 $("#text16").text(localStorage.getItem("btn16"));
 $("#text17").text(localStorage.getItem("btn17"));

if (moment().format('H') == 9) {
    $("#text9").addClass("present");
 
 }else if (moment().format('H') < 9) {
    $("#text9").addClass("future");
    
}else{
    $("#text9").addClass("past");
}

if (moment().format('H') == 10) {
    $("#text10").addClass("present");
 
 }else if (moment().format('H')< 10) {
    $('#text10').addClass("future");
    
}else{
    $('#text10').addClass("past");
}

if (moment().format('H') == 11) {
    $('#text11').addClass("present");
 
 }else if (moment().format('H')< 11) {
    $('#text11').addClass("future");
    
}else{
    $('#text11').addClass("past");
}

if (moment().format('H') == 12) {
    $('#text12').addClass("present");
 
 }else if (moment().format('H')< 12) {
    $('#text12').addClass("future");
    
}else{
    $('#text12').addClass("past");
}

if (moment().format('H') == 13) {
    $('#text13').addClass("present");
 
 }else if (moment().format('H')< 13) {
    $('#text13').addClass("future");
    
}else{
    $('#text13').addClass("past");
}

if (moment().format('H') == 14) {
    $('#text14').addClass("present");
 
 }else if (moment().format('H')< 14) {
    $('#text14').addClass("future");
    
}else{
    $('#text14').addClass("past");
}

if (moment().format('H') == 15) {
    $('#text15').addClass("present");
 
 }else if (moment().format('H')< 15) {
    $('#text15').addClass("future");
    
}else{
    $('#text15').addClass("past");
}

if (moment().format('H') == 16) {
    $('#text16').addClass("present");
 
 }else if (moment().format('H')< 16) {
    $('#text16').addClass("future");
    
}else{
    $('#text16').addClass("past");
}

if (moment().format('H') == 17) {
    $('#text17').addClass("present");
 
 }else if (moment().format('H')< 17) {
    $('#text17').addClass("future");
    
}else{
    $('#text17').addClass("past");
}