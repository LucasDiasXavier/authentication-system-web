const validator = new JustValidate('#form-registro', {
  errorFieldCssClass: 'outline-red-500! focus:outline-red-500!',
  errorLabelStyle: {
    color: '#dc2626',
    fontSize: '0.875rem',
    marginTop: '0.375rem',
  },
});
validator

.addField('#nome', [
     { rule: 'required', errorMessage: 'O campo não pode ser vazio.' },
     { rule: 'minLength', value: 3, errorMessage: 'O nome deve ter pelo menos 3 caracteres.' },
    ], { errorsContainer: '#nome-erro' }
)