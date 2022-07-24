
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
    alert(`Total de respostas: ${totalNotas}
            \n detratores: ${detratores} 
            \n neutros: ${neutros}
            \n promotores: ${promotores}`);
    var resultNPS = ((promotores - detratores) / totalNotas) * 100;
    document.getElementById("respostaNPS").innerHTML = `O valor do nps foi ${resultNPS.toFixed(2)}%`;
    calcBar()
    alert(`O valor do nps foi ${resultNPS.toFixed(2)}%`)
}

function calcBar() {
    var progressBarJS = document.querySelector(".progress-bar");
    progressBarJS.setAttribute(`id`, `play-animation`);
}

function resetPesquisa(){
    document.getElementById("totalRespostas").innerHTML = ``;
    document.getElementById("respostaNPS").innerHTML = ``;
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












