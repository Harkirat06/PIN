import React, { useState, useMemo } from "react";

function StateProvider({ context, children }) {
  const StateContext = context;
  const [nombre, setNombre] = useState("");
  const [items, setItems] = useState([]);
  const [q, setQ] = useState("");
  const [list, setList] = useState([]);
  const [build, setBuild] = useState({});
  const [listasComponentes, setListasComponentes] = useState({});
  const [show, setShow] = useState(false);

  const contextValue = useMemo(
    () => ({
      nombre,
      setNombre,
      items,
      setItems,
      q,
      setQ,
      list,
      setList,
      build,
      setBuild,
      listasComponentes,
      setListasComponentes,
      show, setShow
    }),
    [nombre, items, q, list, build, listasComponentes, show]
  );

  return (
    <StateContext.Provider value={contextValue}>
      {children}
    </StateContext.Provider>
  );
}

export default StateProvider;
