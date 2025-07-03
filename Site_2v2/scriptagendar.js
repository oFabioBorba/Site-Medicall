function AgendarDataAnterior() {

    let dataAtual = new Date().toISOString().split('T')[0];
    dataAgendamento.setAttribute('min', dataAtual);

};

document.addEventListener('DOMContentLoaded', AgendarDataAnterior);
