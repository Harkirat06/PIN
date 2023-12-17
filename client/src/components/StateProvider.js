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
  const [login, setLogin] = useState(true);
  const [user, setUser] = useState(false);
  const [checkboxState, setCheckboxState] = useState(false);
  const [imagen, setImagen] = useState("/image/PC.png")

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
      login,
      setLogin,
      user,
      setUser,
      checkboxState,
      setCheckboxState,
      imagen, setImagen
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
      login,
      user,
      checkboxState,
      imagen
    ]
  );

  return (
    <StateContext.Provider value={contextValue}>
      {children}
    </StateContext.Provider>
  );
}

export default StateProvider;
