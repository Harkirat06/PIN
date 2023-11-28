import Searcher from "./Searcher";
import Cards from "./Cards";
import Form from 'react-bootstrap/Form';
import {Row,Col} from 'react-bootstrap'
import { useContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'


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
    <Row>
      <Col>
      <Searcher context={context}></Searcher>
      <br/>
      </Col>
      <Col>
      <Form>
        <div key={`default-${'checkbox'}`} className="mb-3">
          <Form.Check // prettier-ignore
            type={'checkbox'}
            id={`default-${'checkbox'}`}
            label={`Solo Segunda Mano`}
            checked={checkboxState} 
            onChange={handleCheckboxChange}
            style={{color: "white"}}
          />
        </div>
    </Form>
    </Col>
      <Cards context={context}></Cards>
    </Row>
  );
}

export default Marketplace