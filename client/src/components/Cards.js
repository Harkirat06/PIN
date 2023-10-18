import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Alert } from 'react-bootstrap'
import React from "react";
import Cardd from "./Card";
import { getImage } from "./Axios";
import StateProvider from "./StateProvider";

function Cards({ context }) {
  const ejemplo = [
        {
          nombre: "Producto 1",
          imagen: "url_imagen_1.jpg",
          precioAmazon: 100,
          precioEbay: 90,
          precioSegundaMano: 80,
        },
        {
          nombre: "Producto 2",
          imagen: "url_imagen_2.jpg",
          precioAmazon: 120,
          precioEbay: 110,
          precioSegundaMano: 100,
        },
        // Agrega más cartas manualmente aquí
      ];
      /* items.forEach((item) => {
          useEffect(() => {
          getImage(item.nombre + ".jpg");
          }, []);
          item.image = 
          i++;
}

      */

      return (
        <div className="wrapper">
          <ul className="card-grid">
            {ejemplo.map((item, index) => (
              <li key={index}>
                <Cardd
                  nombre={item.nombre}
                />
              </li>
            ))}
          </ul>
        </div>
      );
    }
    
    export default Cards;