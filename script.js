const inputBox =document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");

// Función para crear confeti
function createConfetti() {
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff', '#ffa500', '#ff1493'];
    const confettiCount = 50;
    
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDelay = Math.random() * 0.5 + 's';
        confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
        document.body.appendChild(confetti);
        
        // Eliminar el confeti después de la animación
        setTimeout(() => {
            confetti.remove();
        }, 4000);
    }
}

function addTask(){
    if(inputBox.value===''){
    alert("You must write something!");
}
else{
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listcontainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
}
inputBox.value="";
}
listcontainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        // Si la tarea se marca como completada, lanzar confeti
        if(e.target.classList.contains("checked")){
            createConfetti();
        }
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
}, false);
function saveData(){
    localStorage.setItem("data", listcontainer.innerHTML);
}
function showTask(){
    listcontainer.innerHTML = localStorage.getItem("data");
}
showTask();
listcontainer.addEventListener("click", function(){
    saveData();
}, false);
inputBox.addEventListener("keyup", function(e){
    if(e.key === "Enter"){
        addTask();
        saveData();
    }
}, false);
