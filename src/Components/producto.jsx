import React ,{useState}from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import {Link} from 'react-router-dom';
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    minHeight:300
  },
});

const  ImgMediaCard =({producto,click})=>{
  const classes = useStyles();
  const [basteknumber,setBasketnumner]=useState(0)
  const addtoBasket = ()=>{
      console.log("agregado")
  }
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="https://www.motociclismo.es/media/cache/big/upload/images/article/29414/article-motos-fabrican-india-china-ninguna-catastrofe-58f71ee1dea51.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {producto.nombre}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {producto.descripcion}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className="lm-5">
        <Link to="/producto"> 
        <Button size="small" color="primary">
          Conoce mas
        </Button>
        </Link>
        <Button size="small" color="primary" onClick={()=>click(producto)}>
        <ShoppingCart/>
        </Button>
      </CardActions>
    </Card>
  );
}

export default ImgMediaCard