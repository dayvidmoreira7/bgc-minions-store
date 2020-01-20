import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import { Link } from 'react-router-dom';

import './styles.css';

const Header = (props) => {

    const [ token, setToken ] = useState('');
    const [ user, setUser ] = useState('');

    const logoff = () => {
        localStorage.clear();
        window.location.reload();
    }

    Auth.currentSession()
    .then(async (userSession) => {
        if(user === '') {
            setUser(userSession.accessToken.payload['username']);
            setToken(userSession.idToken.jwtToken);
        }
    })
    .catch((err) => {
        
    });

    return (
        <nav>
            <ul>
                <div className="menu-options">
                    <li>
                        <Link to="/">
                            Início
                            <div className="banner"></div>
                        </Link>
                    </li>
                    {/* <li>
                        <Link to="/#products">
                            Reservar
                            <div className="banner"></div>
                        </Link>
                    </li> */}
                </div>
                <div className="menu-options">
                    {token ? <>
                    <li>
                        <Link to={'/session'} className="user-name">
                            {user}
                            <div className="banner"></div>
                        </Link>
                    </li>
                    <li>
                        <a onClick={logoff} className="session-button">
                            Sair
                        </a>
                    </li> </>
                    :
                    <li>
                        <Link to={'/session'} className="session-button">
                            Iniciar sessão
                        </Link>
                    </li>}
                </div>
            </ul>
        </nav>
    );
}

export default Header;
