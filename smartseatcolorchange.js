document.addEventListener("DOMContentLoaded", () => {
  let availableSeats = 45;
  const countDisplay = document.getElementById("countDisplay");

  window.changeSeat = function(seat) {
    if (!seat.classList.contains("yellow") && !seat.classList.contains("red")) {
      seat.classList.remove("green");
      seat.classList.add("yellow");
      availableSeats--;
    } else if (seat.classList.contains("yellow")) {
      seat.classList.remove("yellow");
      seat.classList.add("red");
    } else {
      seat.classList.remove("red");
      seat.classList.add("green");
      availableSeats++;
    }

    if (availableSeats < 0) availableSeats = 0;
    if (availableSeats > 45) availableSeats = 45;

    countDisplay.textContent = availableSeats;
  };
});
