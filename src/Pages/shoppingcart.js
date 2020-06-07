import React ,{Fragment, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import {connect } from 'react-redux';
import {productQuantity} from '../actions/productQuantity'
import {removeItem} from '../actions/removeItem'
import Table from 'react-bootstrap'
import logo from '../logo512.png'
import Modalwindo from '../Components/Modal'
function Shoppingcart({basketProps,productQuantity,removeItem}) {
   const [modalShow,setModalShow] = useState(false);
    let productosEnCarro = []
    Object.keys(basketProps.items).forEach(function(item){
        productosEnCarro.push(basketProps.items[item]);
        //setTotal(total+basketProps.items[item].precio);
        //contador+=basketProps.items[item].precio;
    })

    
  const showModal = () =>{
    setModalShow(true);
  }

    productosEnCarro = productosEnCarro.map((producto,index)=>{
        return(
            <tr key={index}>
            <td><img src="https://dummyimage.com/50x50/55595c/fff" /> </td>
            <td>{producto.nombre}</td>
            <td>In stock</td>
            <td ><ion-icon onClick={()=>productQuantity("decrease",producto.key)} className="decrease" name="remove-circle-outline"></ion-icon>
               <span className="m-3">{producto.cantidad}</span> 
               <ion-icon onClick={()=>productQuantity("increase",producto.key)} className="increase" name="add-circle-outline"></ion-icon>
            </td>
            <td className="text-left">${producto.precio * producto.cantidad}</td>
            <td className="text-right"><button  onClick={()=>removeItem(producto.key)} className="btn btn-sm btn-danger"><FontAwesomeIcon icon={faTrash}/> </button> </td>
            </tr>
        )
    })
    if(productosEnCarro.length >0){
    return (    
      <div  className="my-5">
          <section className="jumbotron text-center">
            <div className="container">
             <h1 className="jumbotron-heading">Bienvenido a su carrito de Compras</h1>
            </div>
            </section>
        <div className="container mb-4">
        <div className="row">
        <div className="col-12">
            <div className="table-responsive">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col"> </th>
                            <th scope="col">Product</th>
                            <th scope="col">Available</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Price</th>
                            <th> </th>
                        </tr>
                    </thead>
                    <tbody>
                        {productosEnCarro}
                        
                    </tbody>
                    <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><strong>Total</strong></td>
                            <td className="text-right"><strong>${basketProps.totalPagar}</strong></td>
                    </tr>
                </table>
            </div>
        </div>
        <div className="col mb-2">
            <div className="row">
                <div className="col-sm-12  col-md-6">
                    <button className="btn btn-block btn-light">Continue Shopping</button>
                </div>
                <div className="col-sm-12 col-md-6 text-right">
                    <button onClick={()=>showModal()} className="btn btn-lg btn-block btn-success text-uppercase">Checkout</button>
                </div>
            </div>
        </div>
    </div>
</div>
        <Modalwindo 
            show={modalShow}
            onHide={() => setModalShow(false)}
        />
      </div>
    );}
    else{
        return(
            <div className="container">
                <section className="jumbotron text-center">
            <div className="container">
             <h1 className="jumbotron-heading">Bienvenido a su carrito de Compras</h1>
            </div>
            </section>
            <h1>NO TIENE NADA EN SU CARRITO</h1>
            </div>

        )
    }
  }

  const mapStateToProps = state => ({
    basketProps : state.basketState
  });

export default connect(mapStateToProps,{productQuantity,removeItem})(Shoppingcart);


/** 
 * 
 *                         <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>Sub-Total</td>
                            <td className="text-right">$ 255,90</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>Shipping</td>
                            <td className="text-right">$ 6,90</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><strong>Total</strong></td>
                            <td className="text-right"><strong>$ 346,90</strong></td>
                        </tr>
*/