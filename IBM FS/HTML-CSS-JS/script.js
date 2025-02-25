function addRec(){
    const inputMes = document.getElementById("mes-r");
    const inputName = document.getElementById("name-r");
    const contBox = document.getElementById("cont-box");

    if(inputMes.value === ''){
        alert("You cannot leave your message empty!");
    }
    else{
        let pn = document.createElement("p");
        let pm = document.createElement("p");
        let div = document.createElement("div");
        let q = document.createElement("p");
        q.value = '"'

        
        div.classList.add("box");
        contBox.appendChild(div);

        pm.classList.add("rec");

        pm.innerHTML = inputMes.value;
        pn.innerHTML = inputName.value;
        div.appendChild(pm);
        div.appendChild(pn);
    }

}
