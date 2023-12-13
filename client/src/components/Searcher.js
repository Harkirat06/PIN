import { useEffect, useContext } from "react";
import { getListas } from "./Axios";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Searcher({ context }) {
  const { list, setList, items, setItems, q, setQ } = useContext(context);
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
    setList(newList);
    event.preventDefault();
  };

  return (
    <div className="search-wrapper">
        <label htmlFor="search-form"/>
          <form onSubmit={filter} className="search-form">
            <input
              type="search"
              name="search-form"
              id="search-form"
              className="search-input"
              placeholder="Buscar..."
              value={q}
              onChange={(e) => {
                setQ(e.target.value);
              }}
            />
          </form>
      </div>
  );
}

export default Searcher;
