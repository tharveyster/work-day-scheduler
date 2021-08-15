// Get current day of week and date
const todaysDate = moment().format("dddd, MMMM Do");
$("#currentDay").text(todaysDate);

$(document).ready(function () {
    // Event listener for save button
    $(".saveBtn").on("click", function () {
        let event = $(this).siblings(".description").val();
        let hour = $(this).siblings().attr("id");
        localStorage.setItem(hour, event);
    })

    function hourColors() {
        // Get current hour
        const currentHour = moment().hour();

        // Determine the background color for each hour
        $('.hour').each(function () {
            const blockHour = parseInt($(this).attr('data-hour'))
            if (blockHour < currentHour) {
                $(this).siblings('textarea').removeClass('present');
                $(this).siblings('textarea').removeClass('future');
                $(this).siblings('textarea').addClass('past');
            } else if (blockHour == currentHour) {
                $(this).siblings('textarea').removeClass('past');
                $(this).siblings('textarea').removeClass('future');
                $(this).siblings('textarea').addClass('present');
            } else {
                $(this).siblings('textarea').removeClass('past');
                $(this).siblings('textarea').removeClass('present');
                $(this).siblings('textarea').addClass('future');
            }
        });
    }

    // Get events from local storage
    $("#desc09").val(localStorage.getItem("hour09"));
    $("#desc10").val(localStorage.getItem("hour10"));
    $("#desc11").val(localStorage.getItem("hour11"));
    $("#desc12").val(localStorage.getItem("hour12"));
    $("#desc13").val(localStorage.getItem("hour13"));
    $("#desc14").val(localStorage.getItem("hour14"));
    $("#desc15").val(localStorage.getItem("hour15"));
    $("#desc16").val(localStorage.getItem("hour16"));
    $("#desc17").val(localStorage.getItem("hour17"));

    hourColors();
})