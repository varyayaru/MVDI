import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import ModalApp from './ModalApp';

export default function NavbarPage({user,logoutHandler}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
 <>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>EnLearn</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        {user && (
      <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">Начать тренировку</Nav.Link>
            <NavDropdown title="Личный кабинет" id="basic-nav-dropdown">
              <NavDropdown.Item as={NavLink} to="/process">Прогресс</NavDropdown.Item>
              
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={handleShow}>
              Добавить слово
              </NavDropdown.Item>
            </NavDropdown>
            {user ? (
              <Nav.Link onClick={() => logoutHandler()} >Logout</Nav.Link>
  
) : (<div></div>)}
          </Nav>
    )}
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <ModalApp show={show} handleClose={handleClose} handleShow={handleShow}/>
    </>
  )
}

