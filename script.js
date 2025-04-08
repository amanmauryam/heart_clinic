// Get buttons
const cardiology = document.getElementById("btn-cardiology");
const ctvs = document.getElementById("btn-ctvs");
const gynecology = document.getElementById("btn-gynecology");
const all = document.getElementById('btn-all')

const cardiologyCard = document.getElementById("cardiology-card");
const ctvsCard = document.getElementById("ctvs-card");
const gynecologyCard = document.getElementById("gynecology-card");


cardiology.addEventListener("click", handleButtonCardiology);
ctvs.addEventListener("click", handleButtonCtvs);
gynecology.addEventListener("click", handleButtonGynecology);
all.addEventListener('click', handleButtonAll);

function handleButtonCardiology() {
  cardiologyCard.style.display = "block"; 
  ctvsCard.style.display = "none"; 
  gynecologyCard.style.display = "none";
}

function handleButtonCtvs() {
  ctvsCard.style.display = "block"; 
  cardiologyCard.style.display = "none"; 
  gynecologyCard.style.display = "none";
}

function handleButtonGynecology() {
  gynecologyCard.style.display = "block"; 
  cardiologyCard.style.display = "none"; 
  ctvsCard.style.display = "none";
}

function handleButtonAll (){
    gynecologyCard.style.display = "block"; 
  cardiologyCard.style.display = "block"; 
  ctvsCard.style.display = "block"
}
