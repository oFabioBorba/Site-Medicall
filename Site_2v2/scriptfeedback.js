const form = document.getElementById('feedbackForm');
const enviarBtn = document.getElementById('enviarBtn');
const obrigadoMsg = document.getElementById('obrigadoMsg');
const erroMsg = document.getElementById('erroMsg');


form.addEventListener('input', function () {
  erroMsg.style.display = 'none';
  obrigadoMsg.style.display = 'none';
});


form.addEventListener('submit', function (event) {
  event.preventDefault();

  if (!form.checkValidity()) {
    erroMsg.style.display = 'block';
    obrigadoMsg.style.display = 'none'; // <-- criado isto para esconder a mensagem verde ao inserirem um feedback correto e depois um errado, porque antes estava aparecendo as 2 mensagens juntas.


    [...form.elements].forEach(el => {
      if (!el.checkValidity()) {
        el.classList.add('invalid');
      } else {
        el.classList.remove('invalid');
      }
    });

    return;
  }

  erroMsg.style.display = 'none';
  obrigadoMsg.style.display = 'block';
  form.reset();


  [...form.elements].forEach(el => el.classList.remove('invalid'));
});