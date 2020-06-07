import React,{useEffect,useState} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import {connect } from 'react-redux';
import {getNumbers} from '../actions/getAction';
import {Link} from 'react-router-dom';

function NavBar(props){
    const [buscar, setBuscar] = useState("");
    const handleChange = e => setBuscar(e.target.value)
    //console.log(props)
    useEffect(()=>{
      getNumbers();
    },[]);
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
        <Link className="navbar-brand" to="/">Herbanase</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Quienes Somos <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/tienda">Tienda</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contacto">Contactenos</Link>
            </li>
            

            
          </ul>
          <form className="form-inline my-0 my-lg-0">
            <input className="form-control mr-sm-2" value={buscar} onChange={handleChange}type="search" placeholder="Buscar productos" aria-label="Search"/>
            <button className="btn btn-outline-light  my-2 my-sm-0" type="submit">Buscar</button>
            
          </form>
        </div>
        <div className="hearer_icon d-flex align-items-center">
        <Link className="btn btn-success btn-sm ml-3" to="/carrito">
              <FontAwesomeIcon icon={faShoppingCart}/>
              <span className="badge badge-light ml-1">{props.basketProps.basketNumbers}</span>
            </Link>
        </div>
        
      </nav>
    );
  }
  
  const mapStateToProps = state => ({
    basketProps : state.basketState
  })
  export default connect(mapStateToProps,{getNumbers})(NavBar);

  
  /*
  
  <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
  
  */