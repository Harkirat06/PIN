import React, { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";

function Cardd({ nombre, imagen, onClick, precio, esMarketing, context }) {
  const { precioSeleccionado, setPrecioSeleccionado, nombreLista } =
    useContext(context);
  const handlePrecio = (tipo) => {
    setPrecioSeleccionado(() => {
      let elementos = { ...precioSeleccionado[0] };
      let propiedad = nombreLista.replace("List", "");
      console.log(propiedad)
      console.log(tipo)
      if (propiedad === "disco") {
        if (elementos[propiedad] === "") {
          elementos[propiedad] = [tipo];
        } else {
          elementos[propiedad] = elementos[propiedad].concat(tipo);
        }
      }else{
        elementos[propiedad] = tipo;
      }
      console.log(precioSeleccionado);
      return [elementos];
    });
  };
  return (
    <Card className="w-100 col-lg-6 col-md-8 col-sm-10">
      <Card.Img variant="top" src={"/image/" + imagen} className="productImg" />
      <Card.Body>
        <Card.Title className="productName">{nombre}</Card.Title>
        <Card.Text className="mb-2">
          {precio.amazon && (
            <Button
              variant="primary"
              className="price"
              size="sm"
              onClick={() => {
                if(onClick !== undefined){
                  handlePrecio("amazon");
                  onClick();
                }
              }}
            >
              <div>Amazon:</div><div> {precio.amazon} €</div>
            </Button>
          )}
        </Card.Text>
        <Card.Text className="mb-2">
          {precio.ebay && (
            <Button
              variant="primary"
              className="price"
              size="sm"
              onClick={() => {
                if(onClick !== undefined){
                  handlePrecio("ebay");
                  onClick();
                }
              }}
            >
              <div>Ebay:</div><div> {precio.ebay} €</div>
            </Button>
          )}
        </Card.Text>
        <Card.Text className="mb-2">
          {precio.segundaMano && (
            <Button
              variant="primary"
              className="price"
              size="sm"
              onClick={() => {
                if(onClick !== undefined){
                  handlePrecio("segundaMano");
                  console.log(precioSeleccionado);
                  onClick();
                }
              }}
            >
              <div>Second-hand:</div><div> {precio.segundaMano} €</div>
            </Button>
          )}
        </Card.Text>
        <Card.Text className="mb-2 d-flex justify-content-end">
          {esMarketing && (
            <Button variant="primary" size="sm">
              <FaShoppingCart className="icon" />
            </Button>
          )}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Cardd;
