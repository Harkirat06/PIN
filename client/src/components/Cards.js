import { useContext } from "react"
import React from "react";
import Cardd from "./Card";

function Cards({ context }) {
  const { list } = useContext(context);

      return (
        <div className="wrapper">
          <ul className="card-grid">
            {list.length !== 0 ? 
            list.map((item, index) => (
              <li key={index}>
                <Cardd
                  nombre= {item.nombre}
                  imagen = {item.imagen}
                />
              </li>
            ))
            :
            <h1>No hay resultados</h1>
            }
          </ul>
        </div>
      );
    }
    
    export default Cards;