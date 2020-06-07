

import React,{useState,useEffect} from "react";

import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ProductoView from '../Components/producto';
import Pagination from '../Components/pagination.js';
import ListGroup from 'react-bootstrap/ListGroup'
import fire from '../config/fire.js';
import {connect } from 'react-redux';
import {addBasket} from '../actions/addAction';
const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: "30px",
    paddingRight: "40px",
    paddingTop: "20px",
    paddingBottom: "30px",
    justify:"flex-start"
  }
});


function Tienda(props) {
  const classes = useStyles();
  const [productos, setproducts] = useState([]);
  const [respaldo, setrespaldo] = useState([]);
  const [categorias,setcategorias]= useState(["Cosmeticos","Productos Naturales","Promociones"])
  useEffect(() => {
    fire.firestore().collection("productos").onSnapshot(
      (snapshot)=>{
        const newProducts = snapshot.docs.map((doc)=>({
          key:doc.id,
          ...doc.data(),
          cantidad:1
        }))
        setproducts(newProducts)
        setrespaldo(newProducts)
        
        console.log("entro",newProducts)
      }
    ) 
  },[])
  //setproducts(props.basketProps.products)
  //setrespaldo(props.basketProps.products)
  const [buscar, setBuscar] = useState("");
  const handleChange = e => setBuscar(e.target.value)
  
  const handleSubmit =e =>{
    setproducts()
    e.preventDefault();
    var newProducts = []
    respaldo.map((pro)=>{
      if(!(buscar!=="" && pro.nombre.indexOf(buscar) === -1)){
        newProducts.push(pro)
      }
    })
    setBuscar("")
    setproducts(newProducts);
  }

  const handleclick = (dato) =>{
    console.log(dato);
  }
  
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(5); // VARIABLE SUPER IMPORTANTE
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = productos.slice(indexOfFirstProduct,indexOfLastProduct);
  const paginate = (pageNumber) => setCurrentPage(pageNumber) //metodo

  return (
    <div className="container my-5">

    <div className="row">
      <div className="col-lg-3">
        <h3 className="my-4">Categorias</h3>
        <ListGroup >{
          categorias.map((cat,index)=>
            <ListGroup.Item action href="/" key={index}>
              {cat} 
            </ListGroup.Item>
          )
        }
        
        </ListGroup>
         
      </div>
      <div className="col-lg-9 mt-5">
      <form className="form-inline ml-3" onSubmit={handleSubmit}>
            <input className="form-control mr-sm-2" value={buscar} onChange={handleChange} type="search" placeholder="vitamina e" aria-label="Search" style={{width:"600px"}}/>
            <button className="btn btn-success my-2 my-sm-0" type="submit">Buscar</button>         
      </form>
      <Grid container spacing={5} className={classes.gridContainer}>
      {
        currentProducts.map((producto) =>
        <Grid item xs={12} sm={6} md={4} key={producto.key}>
          <ProductoView producto={producto} click={props.addBasket}/>
        </Grid>
        )    
      }
    </ Grid>
      <Pagination className="ml-3"
      productsPerPage={productsPerPage} 
      totalProducts={productos.length}
      paginate={paginate}/>
      </div>
    </div>
    </div>

    
  );
}

export default connect(null,{addBasket})(Tienda);
