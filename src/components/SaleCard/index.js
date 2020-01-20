import React, { useState } from 'react';
import api from '../../services/api';
import Util from '../../util';

import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Collapse from '@material-ui/core/Collapse';
import TextField from '@material-ui/core/TextField';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

import './styles.css';

const SaleCard = (props) => {

    const [ expanded, setExpanded ] = useState(false);
    const [ loading, setLoading ] = useState(false);
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ quantity ] = useState(1);
    const [ success, setSuccess ] = useState(false);

    const handleExpanded = () => {
        setExpanded(!expanded);
    };

    const handleReserveForm = async (event) => {
        event.preventDefault();
        setLoading(true);
        api.post(`/reserve`, {
            name,
            email,
            quantity,
            minion: props.minion
        }, {
            headers : {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            setSuccess(true);
        }).catch(error => {
            alert('Ocorreu algum erro, tente novamente mais tarde');
        })
        setLoading(false);
    }

    const handleCart = async () => {
        if(!await localStorage.getItem('userId'))    return alert('Logue-se para adicionar algo ao carrinho');
        api.post(`/cart/reserve`, {
            itemId: props.id,
            userId: await localStorage.getItem('userId')
        }).then(response => {
            alert('Item adicionado ao carrinho com sucesso');
            // window.location.reload();
        }).catch(error => {
            console.log(error);
        });
    }

    return (
        <Card className="salescard" style={{minWidth: 220, width: 220,  margin: 10}}>
            <CardActionArea>
                <CardMedia
                style={{height: 140,}}
                image={props.image}
                title={`Minion - ${props.minion}`}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.minion} - R$ {Util.toCurrency(props.value)}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <IconButton onClick={handleCart}>
                    <AddShoppingCartIcon />
                </IconButton>
                <Button size="small" color="default" onClick={handleExpanded}>
                    {success ? 'RESERVADO' : 'RESERVAR AGORA'}
                </Button>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <form id="reserve-form" onSubmit={handleReserveForm}>
                        <div>
                            <TextField disabled={success} value={name} onChange={(e) => {setName(e.target.value)}} className="reserve-input" required label="Nome" type="text" />
                            <TextField disabled={success} value={email} onChange={(e) => {setEmail(e.target.value)}} className="reserve-input" required label="Email" type="email" />
                            {/* <TextField disabled={success} value={quantity} onChange={(e) => {setQuantity(e.target.value)}} className="reserve-input" required label="Quantidade" type="number" /> */}
                            <Button disabled={loading || success} type="submit" className={`confirm-button ${success ? 'success' : ''}`} variant="contained">{success ? '✓' : 'Reservar'}</Button>
                        </div>
                    </form>
                </CardContent>
            </Collapse>
        </Card> 
    );
}

export default SaleCard