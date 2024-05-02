
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

export default function ModalApp({addWordHandler,handleClose,  show}) {
  return (
    <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Добавить</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form >
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Английское слово:</Form.Label>
          
          <Form.Control
          name="word"
            type="engword"
            autoFocus
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Перевод:</Form.Label>
          
          <Form.Control
          name="translation"
            type="translation"
            autoFocus
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Категория:</Form.Label>
          <Form.Select name="category_id" aria-label="Default select example">
      <option value="1">Food</option>
      <option value="2">Animals</option>
      <option value="3">Sport</option>
      <option value="4">Clothes</option>
      <option value="5">Devices</option>
    </Form.Select>
        
        </Form.Group>
        
      </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
      <Button onClick={()=>{
        addWordHandler(item.id);
    handleClose();
    }} variant="primary">
        Save Changes
      </Button>
    </Modal.Footer>
  </Modal>
  )
}
