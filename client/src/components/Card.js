import { useState, useEffect, useContext } from "react";

function Card ({context}) {
    const {nombre,setNombre,imagen,setImagen,precioAmazon,setPrecioAmazon,
        precioEbay,setPrecioEbay,precioSegundaMano,setPrecioSegundaMano} = useContext(context)
    
    return (
        <div className="Card">
            <img src={context.imagen} alt={context.nombre}/>
            <h3>{context.nombre}</h3>
            <p> PrecioAmazon: ${context.precioAmazon} </p>
            <p> PrecioEbay: ${context.precioEbay} </p>
            <p> PrecioSegundaMano: ${context.precioSegundaMano} </p>
        </div>
    )

}