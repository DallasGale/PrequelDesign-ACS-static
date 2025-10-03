// FullCalendar initialization
document.addEventListener("DOMContentLoaded", function () {
  const calendarEl = document.getElementById("calendar");

  // Initialize FullCalendar with basic configuration
  const calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: "dayGridMonth",
    // Additional configuration options can be added here:
    // headerToolbar: {
    //   left: 'prev,next today',
    //   center: 'title',
    //   right: 'dayGridMonth,timeGridWeek,timeGridDay'
    // },
    // events: [],
    // eventClick: function(info) { },
    // dateClick: function(info) { }
  });

  // Render the calendar
  calendar.render();
});