import { criarValidadorLogin } from './validators/login-validation.js';

criarValidadorLogin((event) => {
  event.preventDefault();
  console.log('Validação passou:', document.querySelector('#email').value);
});