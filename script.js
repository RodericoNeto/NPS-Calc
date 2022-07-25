
let detratores = 0;
let neutros = 0;
let promotores = 0;
let totalNotas = 0;


function submitNota() {
    var notaDadaJS = document.querySelectorAll('input[type=radio]:checked')[0].value;
    
    alert(`A nota escolhida foi: ${notaDadaJS}. \n Obrigado pela participação!`);
    console.log(notaDadaJS);

    switch (notaDadaJS) {
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
            detratores++;
            resetRadio();
            break;
        case "7":
        case "8":
            neutros++;
            resetRadio();
            break;
        case "9":
        case "10":
            promotores++;
            resetRadio();
            break;
        default:
            alert("Por favor, insira uma nota")
    }
    totalNotas++;
    document.getElementById("totalRespostas").innerHTML = `Total de respostas submetidas: ${totalNotas}`;
}


function calcularNPS() {
    if(totalNotas == 0){
        alert("Por favor, envie uma nota para começar")
    } else {
        document.querySelector(".progress-bar").setAttribute(`id`, ``)
        console.log(`Total de respostas: ${totalNotas}
                \n detratores: ${detratores} 
                \n neutros: ${neutros}
                \n promotores: ${promotores}`);
        var resultNPS = ((promotores - detratores) / totalNotas) * 100;
        var barResultNPS = resultNPS + 100;
        if(resultNPS>=75){
            document.getElementById("respostaNPS").innerHTML = `Parabéns, ótimo resultado! \n O valor do NPS foi de <strong>${resultNPS.toFixed(0)}%</strong> e a empresa está na <strong>Zona de Excelencia</strong>(75% a 100%)!`;
        }else if(resultNPS>=50){
            document.getElementById("respostaNPS").innerHTML = `Bom resultado! \n O valor do NPS foi de <strong>${resultNPS.toFixed(0)}%</strong> e a empresa está na <strong>Zona de Qualidade</strong>(50% a 74%)!`;
        }else if(resultNPS>=0){
            document.getElementById("respostaNPS").innerHTML = `Atenção! \n O valor do NPS foi de <strong>${resultNPS.toFixed(0)}%</strong> e a empresa está na <strong>Zona de Aperfeiçoamento</strong>(0% a 49%)!`;
        }else{
            document.getElementById("respostaNPS").innerHTML = `Situação perigosa! O valor do NPS foi de <strong>${resultNPS.toFixed(0)}%</strong> e a empresa está na <strong>Zona Crítica</strong>(-100% a -1%)!`;
        }
        
        document.querySelector(".barSubContainer").setAttribute(`style`, `width: ${barResultNPS.toFixed(0)}px`);
        calcBar();
        console.log(`O valor do nps foi ${resultNPS.toFixed(2)}%`);
    }

}

function calcBar() {
    var progressBarJS = document.querySelector(".progress-bar");
    progressBarJS.setAttribute(`id`, `play-animation`);
}

function resetPesquisa(){
    document.getElementById("totalRespostas").innerHTML = ``;
    document.getElementById("respostaNPS").innerHTML = ``;
    document.querySelector(".progress-bar").setAttribute(`id`, ``)
    resetRadio();
    detratores = 0;
    neutros = 0;
    promotores = 0;
    totalNotas = 0;
}

function resetRadio() {
    var radioButton = document.getElementsByName("notas");
    for (var i = 0; i < radioButton.length; i++) {
        radioButton[i].checked = false;
    }
}












