import Searcher from "./Searcher";
import Cards from "./Cards";
import Form from 'react-bootstrap/Form';
import {Row,Col} from 'react-bootstrap'
function Marketplace({context}) {
  return (
    <Row>
      <Col>
      <Searcher context={context}></Searcher>
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
      ))
    </Form>
    </Col>
      <Cards context={context}></Cards>
    </Row>
  );
}

export default Marketplace