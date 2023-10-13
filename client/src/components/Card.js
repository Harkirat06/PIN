import { useState, useEffect, useContext } from "react";

function Card ({context}) {
    const {nombre,setNombre,imagen,setImagen,precioAmazon,setPrecioAmazon,
        precioEbay,setPrecioEbay,precioSegundaMano,setPrecioSegundaMano} = useContext(context)
    
    return (
        <div className="Card">
            <img src={imagen} alt={nombre}/>
            <h3>{nombre}</h3>
            <p> PrecioAmazon: ${precioAmazon} </p>
            <p> PrecioEbay: ${precioEbay} </p>
            <p> PrecioSegundaMano: ${precioSegundaMano} </p>
        </div>
    )

}