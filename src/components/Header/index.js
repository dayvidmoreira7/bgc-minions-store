import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

const Header = (props) => {
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
                    {/* <li>
                        <Link to={'/session'} className="session-button">
                            Iniciar sessão
                        </Link>
                    </li> */}
                </div>
            </ul>
        </nav>
    );
}

export default Header;
