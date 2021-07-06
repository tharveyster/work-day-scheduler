var blockHour;

// Get current day of week and date
var todaysDate = moment().format("dddd, MMMM Do");
$("#currentDay").text(todaysDate);

// Get current time
var currentHour = moment().hour();

// Run these functions to get events from local storage
event09();
event10();
event11();
event12();
event13();
event14();
event15();
event16();
event17();

// Determine the background color for each hour
$('.hour').each(function () {
    blockHour = parseInt($(this).attr('data-hour'))
    if (blockHour < currentHour) {
        $(this).siblings('textarea').addClass('past');
    } else if (blockHour == currentHour) {
        $(this).siblings('textarea').removeClass('past');
        $(this).siblings('textarea').addClass('present');
    } else {
        $(this).siblings('textarea').removeClass('past');
        $(this).siblings('textarea').removeClass('present');
        $(this).siblings('textarea').addClass('future');
    }
});

// Event listener and local storage input/output for 9AM
function event09() {
    var outputArea09 = document.querySelector("#desc09");
    var saveBtn = document.querySelector("#desc09Save");

    saveBtn.addEventListener("click", function () {
        localStorage.setItem("event09", outputArea09.value);
    });

    outputArea09.value = localStorage.getItem("event09");
}

// Event listener and local storage input/output for 10AM
function event10() {
    var outputArea10 = document.querySelector("#desc10");
    var saveBtn = document.querySelector("#desc10Save");

    saveBtn.addEventListener("click", function () {
        localStorage.setItem("event10", outputArea10.value);
    });

    outputArea10.value = localStorage.getItem("event10");
}

// Event listener and local storage input/output for 11AM
function event11() {
    var outputArea11 = document.querySelector("#desc11");
    var saveBtn = document.querySelector("#desc11Save");

    saveBtn.addEventListener("click", function () {
        localStorage.setItem("event11", outputArea11.value);
    });

    outputArea11.value = localStorage.getItem("event11");
}

// Event listener and local storage input/output for 12PM
function event12() {
    var outputArea12 = document.querySelector("#desc12");
    var saveBtn = document.querySelector("#desc12Save");

    saveBtn.addEventListener("click", function () {
        localStorage.setItem("event12", outputArea12.value);
    });

    outputArea12.value = localStorage.getItem("event12");
}

// Event listener and local storage input/output for 1PM
function event13() {
    var outputArea13 = document.querySelector("#desc13");
    var saveBtn = document.querySelector("#desc13Save");

    saveBtn.addEventListener("click", function () {
        localStorage.setItem("event13", outputArea13.value);
    });

    outputArea13.value = localStorage.getItem("event13");
}

// Event listener and local storage input/output for 2PM
function event14() {
    var outputArea14 = document.querySelector("#desc14");
    var saveBtn = document.querySelector("#desc14Save");

    saveBtn.addEventListener("click", function () {
        localStorage.setItem("event14", outputArea14.value);
    });

    outputArea14.value = localStorage.getItem("event14");
}

// Event listener and local storage input/output for 3PM
function event15() {
    var outputArea15 = document.querySelector("#desc15");
    var saveBtn = document.querySelector("#desc15Save");

    saveBtn.addEventListener("click", function () {
        localStorage.setItem("event15", outputArea15.value);
    });

    outputArea15.value = localStorage.getItem("event15");
}

// Event listener and local storage input/output for 4PM
function event16() {
    var outputArea16 = document.querySelector("#desc16");
    var saveBtn = document.querySelector("#desc16Save");

    saveBtn.addEventListener("click", function () {
        localStorage.setItem("event16", outputArea16.value);
    });

    outputArea16.value = localStorage.getItem("event16");
}

// Event listener and local storage input/output for 5PM
function event17() {
    var outputArea17 = document.querySelector("#desc17");
    var saveBtn = document.querySelector("#desc17Save");

    saveBtn.addEventListener("click", function () {
        localStorage.setItem("event17", outputArea17.value);
    });

    outputArea17.value = localStorage.getItem("event17");
}