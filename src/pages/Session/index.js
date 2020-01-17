import React from 'react';

import Header from '../../components/Header';

import './styles.css'

const Login = () => {
    
    document.title = 'BGC Minions Store - Sessão'

    return (
        <div className="session-container">
            <Header />
            <h4>Sessão</h4>
        </div>
    );
}

export default Login;