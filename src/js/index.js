const peso = document.getElementById('peso');
const altura = document.getElementById('altura');
const btn = document.querySelector('.btn');

let imc = 0;


btn.addEventListener('click', function (e) {

  e.preventDefault();

  const p = peso.value;
  const a = altura.value;

  imc = p / (a * a);

  if(imc > 18.5 && imc < 24.99) {
    swal(imc.toFixed(2) + " Peso normal", "","success");


  } else if(imc >= 25 && imc < 29.99) {
    swal(imc.toFixed(2) + " Acima do peso","", "warning");

  } else if(imc >= 30 && imc < 34.99) {
    swal(imc.toFixed(2) + " Obesidade 1","", "error");
  } else {
    swal("Valor indefinido...","","info");
  }

});
