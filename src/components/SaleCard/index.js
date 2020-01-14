import React from 'react';

import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

import './styles.css';

const SaleCard = (props) => {
    return (
        <Card className="salescard" style={{width: 220, margin: 10}}>
            <CardActionArea>
                <CardMedia
                style={{height: 140,}}
                image={props.image}
                title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <IconButton>
                    <AddShoppingCartIcon />
                </IconButton>
                <Button size="small" color="default">
                    Reservar agora
                </Button>
            </CardActions>
        </Card>
    );
}

export default SaleCard