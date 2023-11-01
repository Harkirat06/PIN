import React, { useState, useContext } from "react";
import Cardd from "./Card";
import { Container, Row, Col } from "react-bootstrap";
import { getListas } from "./Axios";
import SelectBuild from "./selectBuild";
import { responsivePropType } from "react-bootstrap/esm/createUtilityClasses";


function PcBuilder({ context }) {
    const [listaComponente, setListaComponente] = useState([]);
    const [component,setComponent] = useState();
    const { build,setBuild } = useContext(context);
    var conf = {...build}
    

    // Función para cargar componentes compatibles
    const loadCompatibleComponents = async (componentRemove) => {
      console.log(componentRemove);
      setComponent(componentRemove)
      if (componentRemove && typeof componentRemove === 'string') {
        delete conf[componentRemove]; // Utiliza la notación de corchetes
      } else {
        console.log("componentRemove no es una cadena válida.");
      }
    
      console.log(conf);
    
      try {
        var lista = componentRemove +"List"
        console.log(lista)
        await getListas({conf}).then(r => setListaComponente(r.data[lista]))
      } catch (error) {
        console.error("Error al cargar componentes compatibles", error);
      }
    };
    const cambioComponente = async (componentAdd,component) =>{
      conf[componentAdd] = component
      console.log("Soy bet")
      console.log(conf)
      SelectBuild(conf)


    }


    return (
        <Container>
            <h2>Build</h2>
            <Row>
                <Col>
                    <div className="computer-preview">
                        {Object.entries(build).map(([componentName,component], index) => (
                           <Cardd
                           key={index}
                           nombre={component.nombre}
                           imagen={component.imagen}
                           onClick={() => loadCompatibleComponents(componentName)}
                         />
                         
                        ))}
                    </div>
                </Col>
                <Col>
  <div className="select-component">
    {listaComponente ? (
      Object.entries(listaComponente).map(([componentName,component], index) => (
        <Cardd
          key={index}
          nombre={component.nombre}
          imagen={component.imagen}
          onClick={cambioComponente(componentName,component)}
        />
      ))
    ) : (
      <p>No hay componentes disponibles</p>
    )}
  </div>
</Col>

             
            </Row>
        </Container>
    );
}

export default PcBuilder;

