import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import {todos} from './todoItems.js';
import './ListTabs.css'
import React, {useState} from "react";

function ListTabs() {
    const [value, setValue] = useState("");
    function handleChange(index, e)
    {
    todos[index].dueDate = e.target.value; 
    setValue(e.target.value);
    }

  return (
    <div className= "List_Tabs">
        <Tab.Container id="ListTabs" defaultActiveKey="#link0">
        <Row>
            <Col sm={4}>
            <ListGroup>
                {todos.map((todos, index) => (
                    <ListGroup.Item className="ListItem" eventKey={index.toString()} key={index} action href = {"#link".concat(index.toString())} variant={tabColor(todos.dueDate)} >
                        {todos.title}
                    </ListGroup.Item>
               ))}
            </ListGroup>
            </Col>
            <Col sm={8}>
            <Tab.Content contentEditable="true">
                {todos.map((todos,index) => (
                    
                    <Tab.Pane className = "content" eventKey={index.toString()} contentEditable="true" >
                        {todos.description}
                        <div className= "dateInput" contentEditable="true">
                            <input type="date" value={todos.dueDate} contentEditable="true" onChange={(e) => handleChange(index, e)}>
                            </input>
                        </div>
                        </Tab.Pane>
                ))}
            
            </Tab.Content>
            </Col>
        </Row>
        </Tab.Container>
    </div>
  );
}


function tabColor(inDate)
{
    const sevenDays = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
    const fourDays = new Date(Date.now() + 4 * 24 * 60 * 60 * 1000);
    const twoDays = new Date(Date.now() + 2 * 24 * 60 * 60 * 1000);
    const check = new Date(inDate); 

    if (check < twoDays)
    {
        return "danger";
    }
    else if (check < fourDays)
    {
        return "warning";
    } 
    else if (check < sevenDays)
    {
        return "success";
    } 
    else if (check > sevenDays)
    {
        return "primary";
    }
}

export default ListTabs;