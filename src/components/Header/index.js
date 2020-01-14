import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

const Header = () => {
    return (
        <nav>
            <ul>
                <div className="menu-options">
                    <li>
                        <a href="#presentation">
                            Início
                            <div className="banner"></div>
                        </a>
                    </li>
                    {/* <li>
                        <a href="#">
                            Reservar
                            <div className="banner"></div>
                        </a>
                    </li> */}
                </div>
                <div className="menu-options">
                    <li>
                        <Link to={'/session'} className="session-button">
                            Iniciar sessão
                        </Link>
                    </li>
                </div>
            </ul>
        </nav>
    );
}

export default Header;
