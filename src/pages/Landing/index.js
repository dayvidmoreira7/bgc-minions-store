import React from 'react';

import Header from '../../components/Header';
import SaleCard from '../../components/SaleCard';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import './styles.css'

const Landing = () => {
    
    document.title = 'BGC Minions Store'

    return (
        <div className="landing-container">
            <Header />
            <section id="presentation" className="presentation-section">
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
                        <Button href="#products" className="presentation-button">Reserve agora</Button>
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <img alt="Minions" className="presentation-picture" src="./images/minions-presentation.png" />
                    </Grid>
                </Grid>
            </section>
            <section id="products" className="products-section">
                <div className="products-carroussel">
                    <SaleCard 
                        name="Kevin" 
                        description="Um minion muito encrenqueiro" 
                        image="https://jflembrancas.com.br/wp-content/uploads/2019/01/PAINEL-MINION-STUART-MENOR-PRECO.jpg" 
                    />
                    <SaleCard 
                        name="Kevin" 
                        description="Um minion muito encrenqueiro" 
                        image="https://jflembrancas.com.br/wp-content/uploads/2019/01/PAINEL-MINION-STUART-MENOR-PRECO.jpg" 
                    />
                    <SaleCard 
                        name="Kevin" 
                        description="Um minion muito encrenqueiro" 
                        image="https://jflembrancas.com.br/wp-content/uploads/2019/01/PAINEL-MINION-STUART-MENOR-PRECO.jpg" 
                    />
                    <SaleCard 
                        name="Kevin" 
                        description="Um minion muito encrenqueiro" 
                        image="https://jflembrancas.com.br/wp-content/uploads/2019/01/PAINEL-MINION-STUART-MENOR-PRECO.jpg" 
                    />
                    <SaleCard 
                        name="Kevin" 
                        description="Um minion muito encrenqueiro" 
                        image="https://jflembrancas.com.br/wp-content/uploads/2019/01/PAINEL-MINION-STUART-MENOR-PRECO.jpg" 
                    />
                    <SaleCard 
                        name="Kevin" 
                        description="Um minion muito encrenqueiro" 
                        image="https://jflembrancas.com.br/wp-content/uploads/2019/01/PAINEL-MINION-STUART-MENOR-PRECO.jpg" 
                    />
                    <SaleCard 
                        name="Kevin" 
                        description="Um minion muito encrenqueiro" 
                        image="https://jflembrancas.com.br/wp-content/uploads/2019/01/PAINEL-MINION-STUART-MENOR-PRECO.jpg" 
                    />
                    <SaleCard 
                        name="Kevin" 
                        description="Um minion muito encrenqueiro" 
                        image="https://jflembrancas.com.br/wp-content/uploads/2019/01/PAINEL-MINION-STUART-MENOR-PRECO.jpg" 
                    />
                </div>
            </section>
        </div>
    );
}

export default Landing;