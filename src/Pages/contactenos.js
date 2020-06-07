import React from 'react';

function Contactenos() {
    return (   
      <div> 
      <header className="bg-primary text-white header2">
      <div className="container text-center">
      <h1>Porque Contactarnos</h1>
      <p className="lead">Ofrecemos asistencia sobre nuestros productos</p>
      </div>
     </header>
      <form className="container my-5">
  <div className="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label for="exampleInputEmail1">Nombre Completo</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ingrese nombre"/>
    <small id="emailHelp" className="form-text text-muted">Escriba su nomrbre</small>
  </div>
  <div className="form-group form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Mensaje</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>

  <button type="submit" className="btn btn-primary">Submit</button>
</form>
</div>
    );
  }

export default Contactenos;


