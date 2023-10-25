import React, { useState, useMemo} from 'react'

function StateProvider({ context, children }) {
    const StateContext = context
    const [nombre, setNombre] = useState("")
    const [items, setItems] = useState([]);
    const [q, setQ] = useState("");
    const [list, setList] = useState([]);
    const [build, setBuild] = useState([])
   
   

    const contextValue = useMemo(() => ({
       nombre, setNombre, items, setItems, q, setQ,
       list, setList, build, setBuild
    }), [
        nombre,
        items,
        q,
        list,
        build
    ]);

    return (
        <StateContext.Provider value={contextValue}>
            {children}
        </StateContext.Provider>
    )
}

export default StateProvider