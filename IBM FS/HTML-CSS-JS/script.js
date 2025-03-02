window.addEventListener("scroll", function () {
    const homeBtn = document.getElementById("homeBtn");

    if (window.scrollY > 200) {
        homeBtn.style.display = "block"; // Show button when scrolled down
    } else {
        homeBtn.style.display = "none"; // Hide button when at top
    }
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function addRec(){
    const inputMes = document.getElementById("mes-r").value.trim();
    const inputName = document.getElementById("name-r").value.trim();
    const contBox = document.getElementById("cont-box");

    console.log(`${inputMes} ${inputName}`);
    

    if(inputMes === ''){
        alert("You cannot leave your message empty!");
    }
    else{
        let div = document.createElement("li");
        let q = document.createElement("p");
        let pm = document.createElement("p");
        
        div.classList.add("box");
        q.classList.add("q");
        pm.classList.add("rec");
        
        
        q.textContent = '"';
        pm.textContent = `${inputMes}`;
        

        div.appendChild(q);
        div.appendChild(pm);

        if(inputName !== ''){
            let pn = document.createElement("p");
            pn.classList.add("auth-r");
            pn.textContent = `${inputName}`;

            div.appendChild(pn);
        }
        
        showPopup();
        
        contBox.appendChild(div);

        document.getElementById("name-r").value = "";
        document.getElementById("mes-r").value = "";
    }
}

function showPopup() {
    const popup = document.getElementById("popup");
    popup.classList.add("show");
}

function closePopup() {
    const popup = document.getElementById("popup");
    popup.classList.remove("show");
}
