import React, { useState, useMemo} from 'react'

function StateProvider({ context, children }) {
    const StateContext = context
    const [nombre, setNombre] = useState("")
    const [items, setItems] = useState([]);
    const [q, setQ] = useState("");
   
   

    const contextValue = useMemo(() => ({
       nombre, setNombre, items, setItems, q, setQ
    }), [
        nombre,
        items,
        q
    ]);

    return (
        <StateContext.Provider value={contextValue}>
            {children}
        </StateContext.Provider>
    )
}

export default StateProvider