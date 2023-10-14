import { useState, useEffect, useContext } from "react";

function Card ({context}) {
    const {nombre,setNombre,imagen,setImagen,precioAmazon,setPrecioAmazon,
        precioEbay,setPrecioEbay,precioSegundaMano,setPrecioSegundaMano} = useContext(context)
    
    return (
        <div className="Card">
            <img src={imagen} alt={nombre}/>
            <h3>{nombre}</h3>
            if (precioAmazon != null){
            <p> PrecioAmazon: ${precioAmazon} </p>
}
            if (precioEbay != null) {
            <p> PrecioEbay: ${precioEbay} </p>
}
            if (precioSegundaMano != null){
            <p> PrecioSegundaMano: ${precioSegundaMano} </p>
}
        </div>
    )

}