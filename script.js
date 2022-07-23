
let detratores = 0;
let neutros = 0;
let promotores = 0;


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
}


function calcularNPS() {
    var totalRespostas = detratores + neutros + promotores;
    alert(`Total de respostas: ${totalRespostas}
            \n detratores: ${detratores} 
            \n neutros: ${neutros}
            \n promotores: ${promotores}`);
    var resultNPS = ((promotores - detratores) / totalRespostas) * 100;
    document.getElementById("respostaNPS").innerHTML = `O valor do nps foi ${resultNPS.toFixed(2)}%`
    alert(`O valor do nps foi ${resultNPS.toFixed(2)}%`)
}

function resetPesquisa(){
    document.getElementById("respostaNPS").innerHTML = ``;
    detratores = 0;
    neutros = 0;
    promotores = 0;
}

function resetRadio() {
    var radioButton = document.getElementsByName("notas");
    for (var i = 0; i < radioButton.length; i++) {
        radioButton[i].checked = false;
    }
}












