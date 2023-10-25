import Card from 'react-bootstrap/Card'


function Cardd ({ nombre, imagen}) {

    return (
      <div>
      <Card style={{ width: '18rem' }}>
        {
        <Card.Img variant="top" src={"/image/" + imagen} />}
        <Card.Body>
          <Card.Title>{nombre}</Card.Title>
        </Card.Body>
      </Card>
      </div>
    );
}

export default Cardd;
