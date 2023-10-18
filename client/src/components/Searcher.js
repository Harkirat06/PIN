import { useState, useEffect, useContext } from "react";
import { getListas } from "./Axios";

function Searcher({context}) {
    const { list, setList, items, setItems, q, setQ,} = useContext(context);
    useEffect(() => {
            getListas().then(res=>{
                let array = []
                let objects = Object.values(res.data);
                objects.forEach((item)=> array = array.concat(item))
                setItems(array)
                setList(array)
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
                            onChange={(e) => {
                                setQ(e.target.value)
                                console.log(q)
                                if(q === ""){
                                    setList(items)
                                }
                            }
                                }
                        />
                    </form>
                </label>
            </div>
        </div>
    );
}

export default Searcher;