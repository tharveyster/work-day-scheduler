var todaysDate = moment().format("dddd, MMMM Do");
$("#currentDay").text(todaysDate);

var currentHour = moment().hour();

var hour09 = parseInt(document.querySelector("#hour09").getAttribute("data-hour"));
var hour10 = parseInt(document.querySelector("#hour10").getAttribute("data-hour"));
var hour11 = parseInt(document.querySelector("#hour11").getAttribute("data-hour"));
var hour12 = parseInt(document.querySelector("#hour12").getAttribute("data-hour"));
var hour13 = parseInt(document.querySelector("#hour13").getAttribute("data-hour"));
var hour14 = parseInt(document.querySelector("#hour14").getAttribute("data-hour"));
var hour15 = parseInt(document.querySelector("#hour15").getAttribute("data-hour"));
var hour16 = parseInt(document.querySelector("#hour16").getAttribute("data-hour"));
var hour17 = parseInt(document.querySelector("#hour17").getAttribute("data-hour"));

if (hour09 < currentHour) {
    $("#desc09").addClass("past");
} else if (hour09 === currentHour) {
    $("#desc09").addClass("present");
} else {
    $("#desc09").addClass("future");
}

if (hour10 < currentHour) {
    $("#desc10").addClass("past");
} else if (hour10 === currentHour) {
    $("#desc10").addClass("present");
} else {
    $("#desc10").addClass("future");
}

if (hour11 < currentHour) {
    $("#desc11").addClass("past");
} else if (hour11 === currentHour) {
    $("#desc11").addClass("present");
} else {
    $("#desc11").addClass("future");
}

if (hour12 < currentHour) {
    $("#desc12").addClass("past");
} else if (hour12 === currentHour) {
    $("#desc12").addClass("present");
} else {
    $("#desc12").addClass("future");
}

if (hour13 < currentHour) {
    $("#desc13").addClass("past");
} else if (hour13 === currentHour) {
    $("#desc13").addClass("present");
} else {
    $("#desc13").addClass("future");
}

if (hour14 < currentHour) {
    $("#desc14").addClass("past");
} else if (hour14 === currentHour) {
    $("#desc14").addClass("present");
} else {
    $("#desc14").addClass("future");
}

if (hour15 < currentHour) {
    $("#desc15").addClass("past");
} else if (hour15 === currentHour) {
    $("#desc15").addClass("present");
} else {
    $("#desc15").addClass("future");
}

if (hour16 < currentHour) {
    $("#desc16").addClass("past");
} else if (hour16 === currentHour) {
    $("#desc16").addClass("present");
} else {
    $("#desc16").addClass("future");
}

if (hour17 < currentHour) {
    $("#desc17").addClass("past");
} else if (hour17 === currentHour) {
    $("#desc17").addClass("present");
} else {
    $("#desc17").addClass("future");
}
