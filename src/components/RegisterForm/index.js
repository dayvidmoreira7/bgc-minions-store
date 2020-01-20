import React, { useState } from 'react';
import { Auth } from 'aws-amplify';

import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';

import './styles.css'

const RegisterForm = () => {

    const [ signedUp, setSignedUp] = useState(false);
    const [ alreadyCode, setAlreadyCode ] = useState(false);

    const [ registerUser, setRegisterUser ] = useState('');
    const [ registerPassword, setRegisterPassword ] = useState('');
    const [ registerConfirmPassword, setRegisterConfirmPassword ] = useState('');
    const [ registerEmail, setRegisterEmail ] = useState('');

    const [ confirmCode, setConfirmCode ] = useState('');

    const handleRegisterForm = (e) => {
        e.preventDefault();
        if(registerUser.length > 14) return alert('Usuário muito grande (max. 14)')
        if(registerPassword.length < 6) return alert('A senha é muito curta (min. 6)')
        if(registerPassword !== registerConfirmPassword) return alert('As senhas não coincidem');
        Auth.signUp({
            username: registerUser,
            password: registerPassword,
            attributes: {
                email: registerEmail
            }
        })
        .then((response) => {
            alert('Enviamos um código de confirmação para seu e-mail');
            setSignedUp(true);
        })
        .catch(err => {

        });
    }

    const handleConfirmRegisterForm = (e) => {
        e.preventDefault();
        Auth.confirmSignUp(registerUser, confirmCode)
        .then((response) => {
            alert('Agora é só entrar na plataforma!')
            window.location.reload();
        })
        .catch((err) => {
            console.log(err);
        });
    }

    return (
        <div className="register-container">
            <h4 className="only-mobile">Ou</h4>
            <h2>Ainda não tem <span className="highlight-text">conta</span>?</h2>
            { signedUp ? 
                <form onSubmit={handleConfirmRegisterForm}>
                    <FormControl fullWidth >
                        {alreadyCode ? <TextField color="primary" className="login-input" value={registerUser} onChange={(e) => {setRegisterUser(e.target.value)}} required label="Usuário" type="text" /> : null }
                        <TextField color="primary" className="login-input" value={confirmCode} onChange={(e) => {setConfirmCode(e.target.value)}} required label="Código de verificação" type="text" />
                        <Button className="my-button" type="submit" variant="contained">CONFIRMAR</Button>
                    </FormControl>
                </form>
                :
                <form onSubmit={handleRegisterForm}>
                    <FormControl fullWidth >
                        <TextField color="primary" className="login-input" value={registerUser} onChange={(e) => {setRegisterUser(e.target.value)}} required label="Usuário" type="text" />
                        <TextField className="login-input" value={registerPassword} onChange={(e) => {setRegisterPassword(e.target.value)}} required label="Senha" type="password" />
                        <TextField color="primary" className="login-input" value={registerConfirmPassword} onChange={(e) => {setRegisterConfirmPassword(e.target.value)}} required label="Confirmar senha" type="password" />
                        <TextField color="primary" className="login-input" value={registerEmail} onChange={(e) => {setRegisterEmail(e.target.value)}} required label="Email" type="email" />
                        <Button className="my-button" type="submit" variant="contained">REGISTRAR</Button>
                        {!alreadyCode ? <a className="already-code" onClick={() => {setAlreadyCode(true); setSignedUp(true)}}>Já tenho código de validação</a> : null}
                    </FormControl>
                </form>
            }
        </div>
    )
}

export default RegisterForm;
