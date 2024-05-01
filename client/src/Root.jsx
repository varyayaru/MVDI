import React from 'react'
import { Outlet } from "react-router-dom";
import Container from "react-bootstrap/Container";
import NavbarPage from "./components/ui/NavbarPage";

export default function Root() {
  return (
    <Container>
    <NavbarPage/>
    <Outlet/>
     </Container>
  )
}
