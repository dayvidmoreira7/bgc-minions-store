import React from 'react';
import { Link } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import './styles.css'

const Landing = () => {
    
    document.title = 'BGC Minions Store'

    return (
        <div className="landing-container">
            <nav>
                <ul>
                    <div className="menu-options">
                        <li>
                            <a href="#">
                                Início
                                <div className="banner"></div>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Reservar
                                <div className="banner"></div>
                            </a>
                        </li>
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
            <section className="presentation-section">
                <Grid container>
                    <Grid item sm={6} xs={12}>
                        <span className="presentation-text">
                            <span className="title">Você ja sonhou em ter seu próprio <span className="highlight-text">Minion</span>?</span><br/><br/>
                            <span className="body">Não precisa mais apenas sonhar.<br/>
                            Os <span className="highlight-text">minions</span> em miniatura são perfeitos
                            para que o fã decore sua casa.<br/>
                            Bonecos feitos 100% de materiais recicláveis<br/><br/>
                            Reserve agora a compra do seu próprio<br/>
                            <span className="highlight-text">Minion</span> em <span className="highlight-text">minion</span>tura!</span>
                        </span>
                        <Button className="presentation-button">Reserve agora</Button>
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <img className="presentation-picture" src="./images/minions-presentation.png" />
                    </Grid>
                </Grid>
            </section>
            <section className="form-section">

            </section>
        </div>
    );
}

export default Landing;