function formPopUp() { 
    document.getElementById("form-popup").style.display = "flex";
    document.getElementById("open-button").style.display = "none";
    showStep('step-1'); 
}

function closeForm() {
    document.getElementById("form-popup").style.display = "none"; 
    document.getElementById("open-button").style.display = "flex";

}

function showStep(stepId) {
    const steps = document.getElementsByClassName("form-step");
    for (let step of steps) {
        step.style.display = "none"; 
    }
    document.getElementById(stepId).style.display = "flex"; 

}