import Searcher from "./Searcher";
import Cards from "./Cards";
import Form from 'react-bootstrap/Form';
import {Row,Col} from 'react-bootstrap'
import { useContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import { Button } from "react-bootstrap";
import './Marketplace.css'


function Marketplace({context}) {
  const {user, checkboxState, setCheckboxState, list, setList, items} = useContext(context)

  const navigate = useNavigate()
  useEffect(()=>{
    if(!user){
      navigate("/")
    }
  },[])
  useEffect(() => {
    if (!checkboxState) {
      setList(items);
    }
  }, [checkboxState]);

  const handleCheckboxChange = () => {
    let newList = filterSegundaMano(list)
    console.log(newList)
    setList(newList)
    setCheckboxState((prev)=>!prev);
  };
  const filterSegundaMano = (lista) =>{
    if (!checkboxState){
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
    <div className="Marketplace">
      <div className="header">
        <a>
          <img className="logo"/>
        </a>
        <a onClick={() => navigate("/SelectBuild")} className="selectBtn">Select Build</a>
        <a>
          <img className="userProfile"/>
        </a>
      </div>
      <div className="search-header">
        {/*<Button onClick={() => navigate("/SelectBuild")} className="selectBtn">
          Select Build
  </Button>*/}
        <Searcher context={context}></Searcher>
        <Form>
          <div key={`default-${'checkbox'}`} className="mb-3">
            <span>Second-hand only</span>
            <input // prettier-ignore
              type="checkbox"
              id={`default-${'checkbox'}`}
              checked={checkboxState} 
              onChange={handleCheckboxChange}
              className="checkBox"
              />
          </div>
        </Form>
      </div>
      <Row className="productsList"><Cards context={context}></Cards></Row>
    </div>
  );
}

export default Marketplace