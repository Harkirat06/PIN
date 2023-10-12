import { useState, useEffect } from "react";

function Searcher() {
    const lista = [{
        "type": "CPU",
        "marca": "Intel",
        "nombre": "Intel Core i3-13100 3.4 GHz/4.5 GHz",
        "gama": "Alta",
        "socket": "Intel LGA 1700",
        "gpu": true,
    }]

    const [items, setItems] = useState(lista);

    //establece el parámetro de búsqueda a una cadena de texto vacía.
    const [q, setQ] = useState("");
    //     set search parameters establece parámetros de búsqueda
    //     solo queremos buscar países por capital y nombre
    //     esta lista puede ser más larga si quieres
    //     hasta puedes buscar países por su número de población
    // 	  solo tienes que agregarlo al arreglo.

    const filter = (event) => {
        let newItems = [];
        console.log(items);
        lista.forEach(item => {
            if (item.nombre.toLocaleLowerCase().includes(q.toLocaleLowerCase())) {
                newItems = newItems.concat(item);
            }
        });
        console.log(newItems);
        setItems(newItems);
        event.preventDefault();
    }
    
    return (
        <div className="wrapper">
            <div className="search-wrapper">
                <label htmlFor="search-form">
                    <form onSubmit={filter}>
                        <input
                            type="search"
                            name="search-form"
                            id="search-form"
                            className="search-input"
                            placeholder="Buscar componentes"
                            value={q}
                            /*
                            // establece el valor de nuestro parametro q del useState
                            //  cada vez que el usuario tipea en el campo de búsqueda
                            */
                            onChange={(e) => setQ(e.target.value)}
                        />
                    </form>
                </label>
            </div>
            {items.length !== 0 ? <ul className="card-grid">
                {items.map((item) => (
                    <li>
                        <article className="card" key={item.type}>
                            
                            <div className="card-content">
                                <h2 className="card-name">{item.nombre}</h2>
                                <ol className="card-list">
                                    <li>
                                        Socket: <span>{item.socket}</span>
                                    </li>
                                    <li>
                                        Gama: <span>{item.gama}</span>
                                    </li>
                                </ol>
                            </div>
                        </article>
                    </li>
                ))}
            </ul> 
            : 
            <h1>No hay resultados</h1>}
        </div>
    );
}

export default Searcher;