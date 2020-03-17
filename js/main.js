const tarjeta = document.querySelector('#tarjeta'),
      btnAbrirFomulario = document.querySelector('#btn-abrir-formulario'),
      formulario = document.querySelector('#formulario-tarjerta');


tarjeta.addEventListener('click',() => {
    tarjeta.classList.toggle('active');
});


btnAbrirFomulario.addEventListener('click',() =>{
    btnAbrirFomulario.classList.toggle('active');
    formulario.classList.toggle('active');
});
