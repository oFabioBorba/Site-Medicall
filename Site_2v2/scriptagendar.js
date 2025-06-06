function VerificarCampos() {
    const agendamentoForm = document.querySelector('.agendamento-form');
    const especialidades = document.getElementById('especialidades');
    const planos = document.getElementById('planos');
    const dataAgendamento = document.getElementById('dataAgendamento');
    let dataAtual = new Date().toISOString().split('T')[0];


        if (
            especialidades.value === '' ||
            planos.value === '' ||
            dataAgendamento.value === ''
        );
    dataAgendamento.setAttribute('min', dataAtual);
};

document.addEventListener('DOMContentLoaded', VerificarCampos);

