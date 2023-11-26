import { useEffect, useContext } from "react";
import { getListas } from "./Axios";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Searcher({ context }) {
  const { list, setList, items, setItems, q, setQ, checkboxState } = useContext(context);
  useEffect(() => {
    getListas().then((res) => {
      let array = [];
      let objects = Object.values(res.data);
      objects.forEach((item) => (array = array.concat(item)));
      setItems(array);
      setList(array);
    });
  }, []);
  useEffect(() => {
    if (q === "") {
      setList(items);
      let lista = filterSegundaMano(list)
      setList(lista)
    }
  }, [q]);

  const navigate = useNavigate();
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
              onChange={(e) => {
                setQ(e.target.value);
              }}
            />
          </form>
        </label>
      </div>
      <div>
        <Button onClick={() => navigate("/SelectBuild")}>
          Seleccionar Build
        </Button>
      </div>
    </div>
  );
}

export default Searcher;
