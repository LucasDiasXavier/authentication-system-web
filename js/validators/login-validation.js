export function criarValidadorLogin(aoValidar) {
  const validator = new JustValidate('#form-login', {
    errorFieldCssClass: ['outline-red-500!'],
    successFieldCssClass: ['outline-teal-600!'],
    errorLabelCssClass: ['mt-1.5', 'block', 'text-sm', 'text-red-600', 'dark:text-red-400'],
    validateBeforeSubmitting: false,
  });

  validator
    .addField(
      '#email',
      [
        { rule: 'required', errorMessage: 'O campo de email não pode ser vazio.' },
        { rule: 'email', errorMessage: 'Digite um e-mail válido' },
      ],
      { errorsContainer: '#email-erro' }
    )
    .onSuccess(aoValidar);

  return validator;
}