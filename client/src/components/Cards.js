import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Alert } from 'react-bootstrap'
import React from "react";
import Cardd from "./Card";
import { getImage } from "./Axios";
import StateProvider from "./StateProvider";
import imagen2 from "../images/imagen2.jpg"

function Cards({ context }) {
  const { list, setList, items, setItems, q, setQ,} = useContext(context);

      return (
        <div className="wrapper">
          <ul className="card-grid">
            {list.length !== 0 ? 
            list.map((item, index) => (
              <li key={index}>
                <Cardd
                  nombre= {item.nombre}
                  imagen = {imagen2}
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