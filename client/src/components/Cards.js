import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Alert } from 'react-bootstrap'
import React from "react";
import Cardd from "./Card";
import { getImage } from "./Axios";
import StateProvider from "./StateProvider";

function Cards({ context }) {
  const { list, setList, items, setItems, q, setQ,} = useContext(context);
  console.log(list)
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
            {list.map((item, index) => (
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