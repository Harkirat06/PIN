//utilizar boostrap para el return.
function Card ({nombre, imagen, precioAmazon, precioEbay, precioSegundaMano}) {
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
export default Card;