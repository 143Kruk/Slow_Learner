 // DOM Content Loaded to apply animations
 document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("contact-us").classList.add("active");
});

// Form Validation
function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    if (!name || !email || !message) {
        alert("All fields are required!");
        return false;
    }
    return true;
}

// Event Handling
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        alert(`You clicked on ${event.target.innerText}`);
    });
});

// Cookies and Local Storage
document.getElementById("name").addEventListener("blur", () => {
    localStorage.setItem("visitorName", document.getElementById("name").value);
});

window.addEventListener("load", () => {
    const visitorName = localStorage.getItem("visitorName");
    if (visitorName) alert(`Thank for contact me!, ${visitorName}!`);
});




