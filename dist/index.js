const ticketBookingDiv = document.querySelector(".flex.flex-1.gap-3.rounded-lg.border.bg-slate-50");

ticketBookingDiv.addEventListener("click", function() {
  window.location.href = "booking.html";
});



const registerButton = document.querySelector("button.register");

const signInButton = document.querySelector("button:not(.register)");


registerButton.addEventListener("click", function() {
  window.location.href = "signup.html"; 
});

signInButton.addEventListener("click", function() {
  window.location.href = "login.html"; 
});
