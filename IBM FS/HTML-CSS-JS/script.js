function addRec(){
    const inputMes = document.getElementById("mes-r").value.trim();
    const inputName = document.getElementById("name-r").value.trim();
    const contBox = document.getElementById("cont-box");

    console.log(`${inputMes} ${inputName}`);
    

    if(inputMes.value === ''){
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

        if(inputName.value === ''){
            let pn = document.createElement("p");
            pn.classList.add("auth-r");
            pn.textContent = `${inputName}`;
            div.appendChild(pn);
        }
        
        contBox.appendChild(div);

        document.getElementById("name-r").value = "";
        document.getElementById("mes-r").value = "";
    }

}
