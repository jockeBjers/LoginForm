function formPopUp() { 
    document.getElementById("form-popup").style.display = "flex";
    document.getElementById("open-button").style.display = "none";
    showStep('step-1'); 
}

function closeForm() {
    document.getElementById("form-popup").style.display = "none"; 
    document.getElementById("open-button").style.display = "block";
}