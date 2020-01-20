import React, { Component } from 'react';
import { Auth } from 'aws-amplify';
import api from '../../services/api';
import mock_products from '../../mock/products';

import Header from '../../components/Header';
import SaleCard from '../../components/SaleCard';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import './styles.css';

export default class Landing extends Component {

    constructor() {
        super();
        this.state = {
            desktop: true,
            products: mock_products,
        }
    }

    resize = () => {
        this.setState({desktop: window.innerWidth > 599})
    }

    renderItems = () => {
        return this.state.products.map((value, i) => {
            return (
                <SaleCard key={i}
                    id={value.id}
                    minion={value.minion} 
                    value={value.value}
                    image={value.image} 
                />
            )
        })
    }

    componentWillMount = () => {
        document.title = 'BGC Minions Store';
        window.addEventListener("resize", this.resize.bind(this));
    }

    render() {
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
                            <img alt="Minions" className="presentation-picture" src={this.state.desktop ? "./images/minions-presentation.png" : "./images/minions-presentation-mobile.png"} />
                        </Grid>
                    </Grid>
                </section>
                <section id="products" className="products-section">
                    <div className="products-carroussel">
                        {
                            this.state.loading ? null : this.renderItems()
                        }
                    </div>
                </section>
            </div>
        );
    }
}