import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Auth } from 'aws-amplify';
import api from '../../services/api';
import Util from '../../util';
import mock_products from '../../mock/products';

import Header from '../../components/Header';

import LoginForm from '../../components/LoginForm';
import RegisterForm from '../../components/RegisterForm';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import CloseIcon from '@material-ui/icons/Close';

import './styles.css';

export default class Session extends Component {

    constructor() {
        super();
        this.state = {
            redirect: '',
            session: null,
            cart: [],

            loading: true,
        }
    }

    setupSession = async () => {
        Auth.currentSession()
        .then(async (userSession) => {
            this.setState({session: true});
            this.getCartItems(userSession.accessToken.payload.sub);
        })
        .catch((err) => {
            this.setState({session: false});
        });
    }

    getCartItems = async (id) => {
        api.get(`/cart/${id}`)
        .then(response => {
            let cart = response.data;
            let myItems = [];

            for(let item of cart) {
                for(let product of mock_products) {
                    if(item.itemId === product.id) {
                        let _item = {
                            id: product.id,
                            minion: product.minion,
                            value: product.value,
                            reserveId: item.id
                        }
                        myItems.push(_item);
                    }
                }
            }
            // if(myItems.length == 0 && cart.length > 0) window.location.reload();
            this.setState({cart: myItems, loading: false});
        }).catch(error => {
            
        })
    }

    removeCartItem = async (id) => {
        let response = await api.delete(`/cart/reserve/${id}`)
        if(response.status == 200) {
            this.setState({redirect: `/root?path=${window.location.pathname}`});
        }
    }

    componentDidMount = () => {
        document.title = 'BGC Minions Store - Sessão'
        this.setupSession();
    }

    render() {
        return (
            <div className="session-container">
                {this.state.redirect === '' ? null : <Redirect to={this.state.redirect} />}
                <Header />
                { this.state.session == null ? null :
                this.state.session ? 
                <Grid container justify="center" align="center">
                    <Grid item sm={8} xs={10} >
                        { this.state.loading ? 
                        <h3>Carregando ...</h3> 
                        :
                        this.state.cart.length > 0 ? <>
                        <h3>Seu carrinho de reservas</h3>
                        <TableContainer component={Paper}>
                            <Table aria-label="simple table">
                                <TableHead>
                                <TableRow>
                                    <TableCell>ID</TableCell>
                                    <TableCell align="center">Produto</TableCell>
                                    <TableCell align="center">Valor</TableCell>
                                    <TableCell align="right">Remover</TableCell>
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                {this.state.cart.map((item, i) => (
                                    <TableRow key={i}>
                                        <TableCell>{item.id}</TableCell>
                                        <TableCell>{item.minion}</TableCell>
                                        <TableCell align="center">R$ {Util.toCurrency(item.value)}</TableCell>
                                        <TableCell align="right">
                                            <Fab onClick={() => {this.removeCartItem(item.reserveId)}} size="small" color="secondary" aria-label="edit">
                                                <CloseIcon />
                                            </Fab>
                                        </TableCell>
                                    </TableRow>
                                )) } 
                                </TableBody>
                            </Table>
                        </TableContainer> </>
                        :
                        <h3>Seu carrinho de reservas está vazio</h3>    
                        }
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
}