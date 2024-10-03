import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListTabs from './ListTabs';
import NewTaskForm from './NewTaskForm';

function ViewPort() {
  return (
    <Container>
      <Row>
        <Col xs={4}>
            <NewTaskForm/>
        </Col>
        <Col>
            <ListTabs/>
        </Col>
      </Row>
    </Container>
  );
}

export default ViewPort;