document.addEventListener("DOMContentLoaded", () => {
    console.log("Website loaded!");
  });
  
  document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for reaching out. We will get back to you shortly!");
});
