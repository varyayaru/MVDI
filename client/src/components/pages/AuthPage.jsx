import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

export default function AuthPage({loginHandler,signupHandler}) {
    const [formData,setFormData] = useState({
        email: '',
        password: '',
        name: ''
      })
      const handlerChange = (e) => setFormData(
        (prev) => ({ ...prev, [e.target.name]: e.target.value }),
      );
  return ( 
  <> 
  <div>ВОЙТИ</div>
    <Form onSubmit={loginHandler}>

    <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
      <Form.Label column sm={2}>
        Email
      </Form.Label>
      <Col sm={10}>
        <Form.Control name="email" type="email" placeholder="Email" />
      </Col>
    </Form.Group>

    <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
      <Form.Label column sm={2}>
        Password
      </Form.Label>
      <Col sm={10}>
        <Form.Control name="password" type="password" placeholder="Password" />
      </Col>
    </Form.Group>
    
    <Form.Group as={Row} className="mb-3">
      <Col sm={{ span: 10, offset: 2 }}>
        <Button type="submit">Войти</Button>
      </Col>
    </Form.Group>

  </Form>
  <div>ЗАРЕГИСТРИРОВАТЬСЯ</div>
  <Form onSubmit={(e) => {
      e.preventDefault();
      if (formData.password.length < 3) return;
      signupHandler(formData).catch(() => alert('Ошибка регистрации'));
    }}>
    <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
      <Form.Label column sm={2}>
        Name
      </Form.Label>
      <Col sm={10}>
        <Form.Control onChange={handlerChange} value={formData.name} name="name" type="name" placeholder="Name" />
      </Col>
    </Form.Group>
 <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
      <Form.Label column sm={2}>
        Email
      </Form.Label>
      <Col sm={10}>
        <Form.Control onChange={handlerChange} value={formData.email} name="email" type="email" placeholder="Email" />
      </Col>
    </Form.Group>
    <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
      <Form.Label column sm={2}>
        Password
      </Form.Label>
      <Col sm={10}>
        <Form.Control onChange={handlerChange} value={formData.password} name="password" type="password" placeholder="Password" />
      </Col>
    </Form.Group>
    

    <Form.Group as={Row} className="mb-3">
      <Col sm={{ span: 10, offset: 2 }}>
        <Button type="submit">Регистрация</Button>
      </Col>
    </Form.Group>
  </Form>
  </>)
}
