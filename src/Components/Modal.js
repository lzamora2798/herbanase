import React from 'react';
import {Modal,Button,Row,Col,Form} from 'react-bootstrap'
const Modalwindo= (props)=>{
    return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Ingrese su Informacion
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form>
            <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Nombre Completo</Form.Label>
                <Form.Control type="name" placeholder="Ingrese Nombre" />
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Cedula</Form.Label>
                <Form.Control type="number" placeholder="Ingrese cedula" />
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Ciudad</Form.Label>
                <Form.Control />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridDire">
                <Form.Label>Direccion</Form.Label>
                <Form.Control />
                </Form.Group>
            </Form.Row>

            <Form.Group id="formGridCheckbox">
                <Form.Check type="checkbox" label="Transferencia" />
                <Form.Check type="checkbox" label="Pago efectivo" />
            </Form.Group>
        </Form>
    </Modal.Body>
    <Modal.Footer>
            <Button variant="danger" onClick={props.onHide}>Confirmar Pedido</Button>
          </Modal.Footer>
        </Modal>
      );
}

export default Modalwindo;


