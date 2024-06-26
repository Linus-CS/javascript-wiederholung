function bildFallenLassen(beginnAbstandLinks, ressourcenBild){
    let bild = document.createElement("img");

    bild.src = ressourcenBild;
    let oben = 0;

    bild.style.display = "none";
    bild.style.position = "absolute";
    bild.style.left = beginnAbstandLinks + "px";
    bild.style.width = "200px";

    document.body.appendChild(bild);

    let speed = 10;
    function verschieben(){
        speed += 0.5
        bild.style.display = "block";
        if(oben >= window.innerHeight - 220){
            document.body.removeChild(bild);
            clearInterval(id);
        }

        oben += speed;
        bild.style.top = oben + "px";
    }

    let id = setInterval(verschieben, 10);  
}

function bilderRegen(ressourcenBild){
    let count = 0;

    function fallen(){
        count += 1;
        if (count == 50){
            clearInterval(idInterval);
        }
        let zufallsZahl = Math.random() * (window.innerWidth - 200);  
        bildFallenLassen(zufallsZahl, ressourcenBild);
    }

    let idInterval = setInterval(fallen, 10);
}


function saphireRegen(){
    bilderRegen("saphire.png");
}

function goldRegen(){
    bilderRegen("gold.png");
}

function eisenRegen(){
    bilderRegen("eisen.png");
}


let goldBild = document.getElementById("gold");
let eisenBild = document.getElementById("eisen");
let saphireBild = document.getElementById("saphire");


goldBild.onclick = goldRegen;
eisenBild.onclick = eisenRegen;
saphireBild.onclick = saphireRegen;
