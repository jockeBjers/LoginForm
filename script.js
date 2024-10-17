function formPopUp() {
    document.getElementById("form-popup").style.display = "flex";
    document.getElementById("open-button").style.display = "none"; // Hide the open button
}

// Function to close the form
function closeForm() {
    document.getElementById("form-popup").style.display = "none"; // Hide the form
    document.getElementById("open-button").style.display = "block"; // Show the open button
}