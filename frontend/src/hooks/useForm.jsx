import React from 'react';

const types = {
	cpf: {
		regex: /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/,
		message: 'Insira um cpf válido'
	},
	email: {
		regex:
			/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
		message: 'Insira um email válido'
	},
	senha: {
		regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
		message:
			'A senha precisa ter 1 caractere maiúsculo, 1 minúsculo e 1 digito. Com no mínimo 8 caracteres'
	},
	monetario: {
		regex: /^[0-9]\d{0,2}(\.\d{3})*\.\d{2}$/,
		message: 'Utilize apenas numeros que sigam padrão monetario'
	},
	numero: {
		regex: /^[0-9]+$/,
		message: 'Utilize apenas números'
	},
	telefone: {
		regex: /^[1-9]{2}(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$/,
		message: 'Insira um número de telefone válido'
	},
	data: {
		regex: /(\d{4})[-.\/](\d{2})[-.\/](\d{2})/,
		message: 'Insira uma data válida'
	},
	boolean: {
		regex: /^true|false$/,
		message: 'Insira um valor correto'
	}
};

function useForm(type) {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(null);

  function validate(value) {
    if (type === false) return true;

    if (value.length === 0) {
      setError('Campo Vazio.');
      return false;

    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message);
      return false;
			
    } else {
      setError(null);
      return true;
    }
  }

  function onChange({ target }) {
    if (error) validate(target.value);
    setValue(target.value);
  }

  return {
    value,
    onChange,
    error,
    onBlur: () => validate(value),
    validate: () => validate(value),
  };
}

export default useForm;