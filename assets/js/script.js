var todaysDate = moment().format("dddd, MMMM Do");
$("#currentDay").text(todaysDate);

var currentHour = moment().hour();

event09();
event10();
event11();
event12();
event13();
event14();
event15();
event16();
event17();

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
    $("#desc09").removeClass("present");
    $("#desc09").removeClass("future");
    $("#desc09").addClass("past");
} else if (hour09 === currentHour) {
    $("#desc09").removeClass("past");
    $("#desc09").removeClass("future");
    $("#desc09").addClass("present");
} else {
    $("#desc09").removeClass("past");
    $("#desc09").removeClass("present");
    $("#desc09").addClass("future");
}

if (hour10 < currentHour) {
    $("#desc10").removeClass("present");
    $("#desc10").removeClass("future");
    $("#desc10").addClass("past");
} else if (hour10 === currentHour) {
    $("#desc10").removeClass("past");
    $("#desc10").removeClass("future");
    $("#desc10").addClass("present");
} else {
    $("#desc10").addClass("future");
}

if (hour11 < currentHour) {
    $("#desc11").removeClass("present");
    $("#desc11").removeClass("future");
    $("#desc11").addClass("past");
} else if (hour11 === currentHour) {
    $("#desc11").removeClass("past");
    $("#desc11").removeClass("future");
    $("#desc11").addClass("present");
} else {
    $("#desc11").addClass("future");
}

if (hour12 < currentHour) {
    $("#desc12").removeClass("present");
    $("#desc12").removeClass("future");
    $("#desc12").addClass("past");
} else if (hour12 === currentHour) {
    $("#desc12").removeClass("past");
    $("#desc12").removeClass("future");
    $("#desc12").addClass("present");
} else {
    $("#desc12").addClass("future");
}

if (hour13 < currentHour) {
    $("#desc13").removeClass("present");
    $("#desc13").removeClass("future");
    $("#desc13").addClass("past");
} else if (hour13 === currentHour) {
    $("#desc13").removeClass("past");
    $("#desc13").removeClass("future");
    $("#desc13").addClass("present");
} else {
    $("#desc13").addClass("future");
}

if (hour14 < currentHour) {
    $("#desc14").removeClass("present");
    $("#desc14").removeClass("future");
    $("#desc14").addClass("past");
} else if (hour14 === currentHour) {
    $("#desc14").removeClass("past");
    $("#desc14").removeClass("future");
    $("#desc14").addClass("present");
} else {
    $("#desc14").addClass("future");
}

if (hour15 < currentHour) {
    $("#desc15").removeClass("present");
    $("#desc15").removeClass("future");
    $("#desc15").addClass("past");
} else if (hour15 === currentHour) {
    $("#desc15").removeClass("past");
    $("#desc15").removeClass("future");
    $("#desc15").addClass("present");
} else {
    $("#desc15").addClass("future");
}

if (hour16 < currentHour) {
    $("#desc16").removeClass("present");
    $("#desc16").removeClass("future");
    $("#desc16").addClass("past");
} else if (hour16 === currentHour) {
    $("#desc16").removeClass("past");
    $("#desc16").removeClass("future");
    $("#desc16").addClass("present");
} else {
    $("#desc16").addClass("future");
}

if (hour17 < currentHour) {
    $("#desc17").removeClass("present");
    $("#desc17").removeClass("future");
    $("#desc17").addClass("past");
} else if (hour17 === currentHour) {
    $("#desc17").removeClass("past");
    $("#desc17").removeClass("future");
    $("#desc17").addClass("present");
} else {
    $("#desc17").addClass("future");
}

function event09() {
    var outputArea09 = document.querySelector("#desc09");
    var saveBtn = document.querySelector("#desc09Save");

    saveBtn.addEventListener("click", function() {
        localStorage.setItem("event09", outputArea09.value);
    });

    outputArea09.value = localStorage.getItem("event09");
}

function event10() {
    var outputArea10 = document.querySelector("#desc10");
    var saveBtn = document.querySelector("#desc10Save");

    saveBtn.addEventListener("click", function() {
        localStorage.setItem("event10", outputArea10.value);
    });

    outputArea10.value = localStorage.getItem("event10");
}

function event11() {
    var outputArea11 = document.querySelector("#desc11");
    var saveBtn = document.querySelector("#desc11Save");

    saveBtn.addEventListener("click", function() {
        localStorage.setItem("event11", outputArea11.value);
    });

    outputArea11.value = localStorage.getItem("event11");
}

function event12() {
    var outputArea12 = document.querySelector("#desc12");
    var saveBtn = document.querySelector("#desc12Save");

    saveBtn.addEventListener("click", function() {
        localStorage.setItem("event12", outputArea12.value);
    });

    outputArea12.value = localStorage.getItem("event12");
}

function event13() {
    var outputArea13 = document.querySelector("#desc13");
    var saveBtn = document.querySelector("#desc13Save");

    saveBtn.addEventListener("click", function() {
        localStorage.setItem("event13", outputArea13.value);
    });

    outputArea13.value = localStorage.getItem("event13");
}

function event14() {
    var outputArea14 = document.querySelector("#desc14");
    var saveBtn = document.querySelector("#desc14Save");

    saveBtn.addEventListener("click", function() {
        localStorage.setItem("event14", outputArea14.value);
    });

    outputArea14.value = localStorage.getItem("event14");
}

function event15() {
    var outputArea15 = document.querySelector("#desc15");
    var saveBtn = document.querySelector("#desc15Save");

    saveBtn.addEventListener("click", function() {
        localStorage.setItem("event15", outputArea15.value);
    });

    outputArea15.value = localStorage.getItem("event15");
}

function event16() {
    var outputArea16 = document.querySelector("#desc16");
    var saveBtn = document.querySelector("#desc16Save");

    saveBtn.addEventListener("click", function() {
        localStorage.setItem("event16", outputArea16.value);
    });

    outputArea16.value = localStorage.getItem("event16");
}

function event17() {
    var outputArea17 = document.querySelector("#desc17");
    var saveBtn = document.querySelector("#desc17Save");

    saveBtn.addEventListener("click", function() {
        localStorage.setItem("event17", outputArea17.value);
    });

    outputArea17.value = localStorage.getItem("event17");
}