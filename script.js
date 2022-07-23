

let corpoNotas = {
    detratores: 0,
    neutros: 0,
    promotores: 0
};


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
            corpoNotas.detratores++;
            console.log(corpoNotas);
            resetRadio();      
            break;
        case "7":
        case "8":
            corpoNotas.neutros++;
            console.log(corpoNotas);
            resetRadio(); 
            break;
        case "9":
        case "10":
            corpoNotas.promotores++;
            console.log(corpoNotas);
            resetRadio(); 
            break;
        default:
            alert("Por favor, insira uma nota")
    }
}


function calcularNPS() {
    var totalRespostas = corpoNotas.detratores + corpoNotas.neutros + corpoNotas.promotores;
    alert(`Total de respostas: ${totalRespostas}
            \n detratores: ${corpoNotas.detratores} 
            \n neutros: ${corpoNotas.neutros}
            \n promotores: ${corpoNotas.promotores}`);
    var resultNPS = ((corpoNotas.promotores - corpoNotas.detratores)/totalRespostas)*100;
    alert(`O valor do nps foi ${resultNPS.toFixed(2)}%`)
}

function resetRadio() {
    var radioButton = document.getElementsByName("notas");
    for(var i=0; i<radioButton.length; i++){
        radioButton[i].checked = false;
    }   
}












