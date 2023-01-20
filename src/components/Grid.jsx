import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../App.css'

function GridExample() {
  return (
      <>
       <h1>Grid1</h1>
    <Container className="show-grid">
      <Row>
        <Col>1 of 1</Col>
      </Row>
    </Container>
    <h1>Grid2</h1>
    <Container className="show-grid">
      <Row>
        <Col>1 of 2</Col>
        <Col>2 of 2</Col>
      </Row>
      <Row>
        <Col>1 of 3</Col>
        <Col>2 of 3</Col>
        <Col>3 of 3</Col>
      </Row>
    </Container>
    </>
  );
}

export default GridExample;