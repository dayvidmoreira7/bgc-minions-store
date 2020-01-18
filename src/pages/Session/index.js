import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import api from '../../services/api';
import mock_products from '../../mock/products';

import Header from '../../components/Header';
import LoginForm from '../../components/LoginForm';
import RegisterForm from '../../components/RegisterForm';

import Grid from '@material-ui/core/Grid';

import './styles.css'

const Session = () => {
    
    document.title = 'BGC Minions Store - Sessão'

    const [ session, setSession ] = useState(false);
    const [ cart, setCart ] = useState([]);

    Auth.currentSession()
    .then(async (userSession) => {
        setSession(true);
    
    })
    .catch((err) => {
        setSession(false);
    });

    return (
        <div className="session-container">
            <Header />
            { session ? 
            <Grid container>
                <Grid item sm={12}>

                </Grid>
            </Grid>
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