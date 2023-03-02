import React from 'react';
import styles from './LoginRegister.module.css';
import { Form } from 'react-bootstrap';
import Input from '../Form/Input';
import useForm from '../../hooks/useForm';
import Button from '../Form/Button';
import { POST_CREATE_DIRETOR } from '../../api/api'
import useFetch from '../../hooks/useFetch'
import { useNavigate } from 'react-router-dom'

// nome, cpf, dataNascimento, telefone, email, senha

function LoginRegister() {

	const { data, loading, error, request } = useFetch()

	const navigate = useNavigate()

	const nome = useForm();
	const dataNascimento = useForm('data');
	const cpf = useForm('cpf')
	const telefone = useForm('telefone')
	const email = useForm('email');
	const senha = useForm('senha');

	async function handleSubmit(e) {

		e.preventDefault()


		if (nome.validate() && cpf.validate() && telefone.validate() && email.validate() && senha.validate() && dataNascimento.validate()) {

			const { url, options } = POST_CREATE_DIRETOR({
				nome: nome.value,
				email: email.value,
				senha: senha.value,
				telefone: telefone.value,
				cpf: cpf.value,
				dataNascimento: dataNascimento.value
			})

			const { json, response } = await request(url, options)

			if (response.ok) navigate('/login')
		}

	}

	return (
		<div>
			<Form onSubmit={handleSubmit}>
				<Input
					label='Nome:'
					id='nome'
					{...nome}
				/>
				<Input
					label='Email:'
					id='email'
					{...email}
					placeholder='seuemail@email.com'
				/>
				<Input
					label='CPF:'
					id='cpf'
					{...cpf}
					placeholder='000.000.000-00'
				/>
				<div className={styles.inputContainer}>
					<Input
						label='Telefone:'
						id='telefone'
						{...telefone}
						placeholder='00 00000-0000'
					/>
					<Input
						label='Data de nascimento:'
						id='dataNascimento'
						{...dataNascimento}
						max='2005-01-01'
						type='date'
					/>
				</div>
				<Input
					label='senha:'
					id='senha'
					type='password'
					{...senha}
				/>
				<Button loading={loading}>Enviar</Button>
			</Form>
		</div>
	);
}

export default LoginRegister;
