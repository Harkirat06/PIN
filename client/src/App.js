import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from "react";
import {Button} from "react-bootstrap";

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{!data ? "Loading..." : data}</p>
        <Button variant="primary">Empieza Ahora</Button>
      </header>
    </div>
  );
}

export default App;
