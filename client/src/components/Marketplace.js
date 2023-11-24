import Searcher from "./Searcher";
import Cards from "./Cards";
import Form from 'react-bootstrap/Form';
import {Row,Col} from 'react-bootstrap'
import { useContext, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
function Marketplace({context}) {
  const {user} = useContext(context)
  const navigate = useNavigate()
  useEffect(()=>{
    if(!user){
      navigate("/")
    }
  },[])
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
            type={'SegundaMano'}
            id={`default-${'checkbox'}`}
            label={`Solo Segunda Mano`}
          />
        </div>
    </Form>
    </Col>
      <Cards context={context}></Cards>
    </Row>
  );
}

export default Marketplace