import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Fab from '@material-ui/core/Fab';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import NavBar from './Components/navBar.js';
import Floatbot from './Components/floatbot.js';
import Main from './Pages/main.js';
import Tienda from './Pages/tienda.js';
import Shoppingcart from './Pages/shoppingcart.js';
import Contactenos from './Pages/contactenos.js';
import Producto from './Pages/producto.js'
import {Provider} from 'react-redux'
import store from './store';
function App() {
  return (    
    <Provider store={store}>
    <BrowserRouter>
    <NavBar/>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/tienda" component={Tienda} />
            <Route exact path="/carrito" component={Shoppingcart}/>
            <Route exact path="/contacto" component={Contactenos}/>
            <Route exact path="/producto" component={Producto}/>
        </Switch>  
    </BrowserRouter>
    <Floatbot/>
    </Provider>   
  );
}

export default App;
