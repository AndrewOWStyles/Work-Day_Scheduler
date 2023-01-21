let currentDay = moment().format("dddd MMMM Do");
let currentTime = moment().format("HH:mm")
$("#currentDay").text(currentDay)

$('#btn9').on('click',function(event) {

    let $saveText = $(event.target).siblings('textarea').val()
    localStorage.setItem("btn9",$saveText);
 })
$('#btn10').on('click',function(event) {

    let $saveText = $(event.target).siblings('textarea').val()
    localStorage.setItem("btn10",$saveText);
 })
$('#btn11').on('click',function(event) {

    let $saveText = $(event.target).siblings('textarea').val()
    localStorage.setItem("btn11",$saveText);
 })
$('#btn12').on('click',function(event) {

    let $saveText = $(event.target).siblings('textarea').val()
    localStorage.setItem("btn12",$saveText);
 })
$('#btn13').on('click',function(event) {

    let $saveText = $(event.target).siblings('textarea').val()
    localStorage.setItem("btn13",$saveText);
 })
$('#btn14').on('click',function(event) {

    let $saveText = $(event.target).siblings('textarea').val()
    localStorage.setItem("btn14",$saveText);
 })
$('#btn15').on('click',function(event) {

    let $saveText = $(event.target).siblings('textarea').val()
    localStorage.setItem("btn15",$saveText);
 })
$('#btn16').on('click',function(event) {

    let $saveText = $(event.target).siblings('textarea').val()
    localStorage.setItem("btn16",$saveText);
 })
$('#btn17').on('click',function(event) {

    let $saveText = $(event.target).siblings('textarea').val()
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
    $('textarea').addClass("present");
 
 }else if (moment().format('H')< 9) {
    $('textarea').addClass("future");
    
}else{
    $('textarea').addClass("past");
}

if (moment().format('H') == 10) {
    $('textarea').addClass("present");
 
 }else if (moment().format('H')< 10) {
    $('textarea').addClass("future");
    
}else{
    $('textarea').addClass("past");
}
if (moment().format('H') == 11) {
    $('textarea').addClass("present");
 
 }else if (moment().format('H')< 11) {
    $('textarea').addClass("future");
    
}else{
    $('textarea').addClass("past");
}
if (moment().format('H') == 12) {
    $('textarea').addClass("present");
 
 }else if (moment().format('H')< 12) {
    $('textarea').addClass("future");
    
}else{
    $('textarea').addClass("past");
}
if (moment().format('H') == 13) {
    $('textarea').addClass("present");
 
 }else if (moment().format('H')< 13) {
    $('textarea').addClass("future");
    
}else{
    $('textarea').addClass("past");
}
if (moment().format('H') == 14) {
    $('textarea').addClass("present");
 
 }else if (moment().format('H')< 14) {
    $('textarea').addClass("future");
    
}else{
    $('textarea').addClass("past");
}
if (moment().format('H') == 15) {
    $('textarea').addClass("present");
 
 }else if (moment().format('H')< 15) {
    $('textarea').addClass("future");
    
}else{
    $('textarea').addClass("past");
}
if (moment().format('H') == 16) {
    $('textarea').addClass("present");
 
 }else if (moment().format('H')< 16) {
    $('textarea').addClass("future");
    
}else{
    $('textarea').addClass("past");
}
if (moment().format('H') == 17) {
    $('textarea').addClass("present");
 
 }else if (moment().format('H')< 17) {
    $('textarea').addClass("future");
    
}else{
    $('textarea').addClass("past");
}