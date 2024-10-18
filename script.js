function formPopUp() {
    document.getElementById("form-popup").style.display = "flex";
    document.getElementById("open-button").style.display = "none";
}

function closeForm() {
    document.getElementById("form-popup").style.display = "none"; 
    document.getElementById("open-button").style.display = "flex";
}