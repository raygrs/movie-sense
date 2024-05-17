// function validar (){
//   const USER = document.querySelectorAll('user');
//   const SENHA = document.querySelectorAll('password');
//   let valid = true;

//   if (USER.value == '' || SENHA.value == '') {
//     alert('Preencha todos os campos')
//     valid = false;
//   }else if (SENHA.value.length <= 6 || USER.value.length <= 6) {
//     alert('Os campos devem conter mais de 6 caracteres')
//   }
//   else{
//     alert('Formulario enviado com sucesso');
//   }

//   return valid;

// }

function entrar() {
  const LOGIN = document.querySelector('.login');
  const CADASTRO = document.querySelector('.cadastro');
  LOGIN.classList.remove('hide');
  CADASTRO.classList.add('hide');
  const USER = document.querySelector('user');
  const SENHA = document.querySelector('password');
  let valid = true;

  if (USER.value == '' || SENHA.value == '') {
    alert('Preencha todos os campos')
    valid = false;
  }else if (SENHA.value.length <= 6 || USER.value.length <= 6) {
    alert('Os campos devem conter mais de 6 caracteres')
    valid = false;
  }
  else{
    alert('Formulario enviado com sucesso');
    valid = true;
  }

  return valid;
}

function cadastrar() {
  const LOGIN = document.querySelector('.login');
  const CADASTRO = document.querySelector('.cadastro');
  CADASTRO.classList.remove('hide');
  LOGIN.classList.add('hide');
  validar();
}