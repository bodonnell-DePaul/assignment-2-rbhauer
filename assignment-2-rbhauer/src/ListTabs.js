import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import {todos} from './todoItems.js';

function ListTabs() {
  return (
    <div className= "List_Tabs">
        <Tab.Container id="ListTabs" defaultActiveKey="#link0">
        <Row>
            <Col sm={4}>
            <ListGroup>
                {todos.map((todos, index) => (
                    <ListGroup.Item eventKey={index.toString()} key={index} action href = {"#link".concat(index.toString())}>
                        {todos.title}
                    </ListGroup.Item>
               ))};
            </ListGroup>
            </Col>
            <Col sm={8}>
            <Tab.Content>
                {todos.map((todos,index) => (
                    <Tab.Pane eventKey={index.toString()}>
                        {todos.description}
                        </Tab.Pane>
                ))};
                
                <Tab.Pane eventKey="#link1">Tab pane content 2</Tab.Pane>
            </Tab.Content>
            </Col>
        </Row>
        </Tab.Container>
    </div>
  );
}

export default ListTabs;