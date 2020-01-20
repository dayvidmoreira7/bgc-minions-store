import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import { Redirect } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';

import './styles.css'

const LoginForm = () => {
    
    const [ redirect, setRedirect ] = useState('');

    const [ user, setUser ] = useState('');
    const [ password, setPassword ] = useState('');

    const handleLoginForm = (e) => {
        e.preventDefault(); // @Dayvid123
        Auth.signIn({
            username: user,
            password: password
        }).then((cognitoUser) => {
            Auth.currentSession()
            .then(async (userSession) => {
                await localStorage.setItem('token', userSession.idToken.jwtToken)
                await localStorage.setItem('userId', userSession.accessToken.payload.sub);
                setRedirect('/');
            })
            .catch((err) => {
                console.log(err)
            });
        }).catch((err) => {
            console.log('Usuário não encontrado');
            console.log(err)
        });
    }

    return (
        <div className="login-container">
            {redirect !== '' ? <Redirect to={redirect} /> : null}
            <h2>Ja tem <span className="highlight-text">conta</span>?</h2>
            <form onSubmit={handleLoginForm}>
                <FormControl fullWidth >
                    <TextField color="primary" className="login-input" value={user} onChange={(e) => {setUser(e.target.value)}} required label="Usuário" type="text" />
                    <TextField className="login-input" value={password} onChange={(e) => {setPassword(e.target.value)}} required label="Senha" type="password" />
                    <Button className="my-button" type="submit" variant="contained">ENTRAR</Button>
                </FormControl>
            </form>
        </div>    
    );
}

export default LoginForm;