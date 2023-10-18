import { useState, useEffect, useContext } from "react";
import { getListas } from "./Axios";

function Searcher({context}) {
    const { list, setList, items, setItems, q, setQ,} = useContext(context);
    useEffect(() => {
            getListas().then(res=>{
                setItems(res.data)
                setList(res.data.cpuList)
            })
        }, []);
    

    const filter = (event) => {
        let newList = [];
        list.forEach(item => {
            let words = q.toLocaleLowerCase().split(' ');
            let containsAll=true;
            words.forEach(word => {
                   if (!item.nombre.toLocaleLowerCase().includes(word)) {
                       containsAll=false;
                   }
            });
            if (containsAll) {newList = newList.concat(item);}
        });
        setList(newList);
        event.preventDefault();
       }
    
    return (
        <div className="wrapper">
            <div className="search-wrapper" >
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
            
            {list.length !== 0 ? <ul className="card-grid">
                {list.map((item) => (
                    <li>
                        <article className="card" key={item.type}>
                            
                            <div className="card-content">
                                <h2 className="card-name">{item.nombre}</h2>
                                <ol className="card-list">
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