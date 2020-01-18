import React, { useState } from 'react';
import { Auth } from 'aws-amplify';

import Header from '../../components/Header';
import LoginForm from '../../components/LoginForm';
import RegisterForm from '../../components/RegisterForm';

import Grid from '@material-ui/core/Grid';

import './styles.css'

const Session = () => {
    
    document.title = 'BGC Minions Store - Sessão'

    const [ session, setSession ] = useState(false);

    Auth.currentSession()
    .then(async (userSession) => {
        if(!session)
            setSession(userSession.accessToken.payload);
    })
    .catch((err) => {
        
    });

    return (
        <div className="session-container">
            <Header />
            { session ? 
            null 
            :
            <Grid container>
                <Grid item sm={6} xs={12}>
                    <LoginForm />
                </Grid>
                <Grid item sm={6} xs={12}>
                    <RegisterForm />
                </Grid>
            </Grid> }
            
        </div>
    );
}

export default Session;