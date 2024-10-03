import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './NewTaskForm.css';

function NewTaskForm() {
  return (
    <Form className="NewTaskForm">
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>ToDo Item</Form.Label>
        <Form.Control type="email" placeholder="Add todo item" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Due Date</Form.Label>
        <Form.Control 
                type="date"
                name="duedate"
                placeholder="Due date" />
      </Form.Group>
      <div class="SubmitSection">
        <Button className="SubmitButton" variant="primary" >Add ToDo</Button>
      </div>
    </Form>
  );
}

export default NewTaskForm;