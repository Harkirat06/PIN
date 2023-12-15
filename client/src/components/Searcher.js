import { useEffect, useContext } from "react";

function Searcher({ context}) {
  const { list, setList, items, setItems, q, setQ, checkboxState} = useContext(context);
  useEffect(() => {
    if (q === "") {
      let newList = filterSegundaMano(items)
      setList(newList)
    }
  }, [q]);

  const filterSegundaMano = (lista) =>{
    if (checkboxState){
      let newLista = lista.filter(
        (item) =>
          item.precio.segundaMano
      );
    return newLista
    }
    else{
      return lista
    }
  }

  const filter = (event) => {
    let newList = [];
    items.forEach((item) => {
      let words = q.toLocaleLowerCase().split(" ");
      let containsAll = true;
      words.forEach((word) => {
        if (!item.nombre.toLocaleLowerCase().includes(word)) {
          containsAll = false;
        }
      });
      if (containsAll) {
        newList = newList.concat(item);
      }
    });
    newList = filterSegundaMano(newList)
    setList(newList);
    event.preventDefault();
  };

  return (
    <div className="search-wrapper">
        <form onSubmit={filter} className="search-form">
          <input
            type="search"
            name="search-form"
            id="search-form"
            className="search-input"
            placeholder="Buscar componente..."
            value={q}
            onChange={(e) => {
              setQ(e.target.value);
            }}
          />
          <label htmlFor="search-form" className="searchLabel"/>
        </form>
      </div>
  );
}

export default Searcher;
