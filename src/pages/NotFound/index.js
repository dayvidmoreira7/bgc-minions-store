import React, { Component } from 'react';

import Header from '../../components/Header';

import Grid from '@material-ui/core/Grid';

import './styles.css';

export default class NotFound extends Component {

    componentWillMount = () => {
        document.title = 'Página não encontrada';
    }

    render() {
        return (
            <div className="notfound-container">
                <Header />
                <Grid container justify="center" align="center">
                    <Grid item sm={4} xs={4}>
                        <h2 className="text">A página que você está procurando não existe</h2>
                    </Grid>
                </Grid>
            </div>
        );
    }
}