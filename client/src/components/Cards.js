import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Alert } from 'react-bootstrap'
import React from "react";
import Card from "./Card";

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

      return (
        <div className="wrapper">
          <ul className="card-grid">
            {ejemplo.map((item, index) => (
              <li key={index}>
                <Card
                  nombre={item.nombre}
                  imagen={item.imagen}
                  precioAmazon={item.precioAmazon}
                  precioEbay={item.precioEbay}
                  precioSegundaMano={item.precioSegundaMano}
                />
              </li>
            ))}
          </ul>
        </div>
      );
    }
    
    export default Cards;