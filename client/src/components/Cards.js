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
        <div className="container">
          <div className="row">
            {ejemplo.map((cardData, index) => (
              <div className="col-12 col-md-6 col-lg-4" key={index}>
                <Card
                  nombre={cardData.nombre}
                  imagen={cardData.imagen}
                  precioAmazon={cardData.precioAmazon}
                  precioEbay={cardData.precioEbay}
                  precioSegundaMano={cardData.precioSegundaMano}
                  context={context}
                />
              </div>
            ))}
          </div>
        </div>
      );
    }