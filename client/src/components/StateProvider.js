import React, { useState, useMemo } from "react";

function StateProvider({ context, children }) {
  const StateContext = context;
  const [nombre, setNombre] = useState("");
  const [items, setItems] = useState([]);
  const [q, setQ] = useState("");
  const [list, setList] = useState([]);
  const [build, setBuild] = useState([{}]);
  const [listasComponentes, setListasComponentes] = useState({});
  const [show, setShow] = useState(false);
  const [listaComponente, setListaComponente] = useState([]);
  const [nombreLista, setNombreLista] = useState("");
  const [elementosSeleccionados, setElementosSeleccionados] = useState([
    {
      placas: "Elemento no seleccionado",
      cpu: "Elemento no seleccionado",
      gpu: "Elemento no seleccionado",
      ram: "Elemento no seleccionado",
      disipador: "Elemento no seleccionado",
      fuente: "Elemento no seleccionado",
      disco: "Elemento no seleccionado",
      caja: "Elemento no seleccionado",
      monitor: "Elemento no seleccionado",
      teclado: "Elemento no seleccionado",
      raton: "Elemento no seleccionado",
    },
  ]);
  const [precioSeleccionado, setPrecioSeleccionado] = useState([{
    placas: "",
    cpu: "",
    gpu: "",
    ram: "",
    disipador: "",
    fuente: "",
    disco: "",
    caja: "",
    monitor: "",
    teclado: "",
    raton: "",
  }]);

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
      show,
      setShow,
      elementosSeleccionados,
      setElementosSeleccionados,
      listaComponente,
      setListaComponente,
      nombreLista,
      setNombreLista,
      precioSeleccionado,
      setPrecioSeleccionado,
    }),
    [
      nombre,
      items,
      q,
      list,
      build,
      listasComponentes,
      show,
      elementosSeleccionados,
      listaComponente,
      nombreLista,
      precioSeleccionado,
    ]
  );

  return (
    <StateContext.Provider value={contextValue}>
      {children}
    </StateContext.Provider>
  );
}

export default StateProvider;
