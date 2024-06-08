"use client";

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Container } from 'react-bootstrap';

export default function PokeNavBarComp() {
   return (
       <>
           <Navbar bg="dark" data-bs-theme="dark" sticky="top" >
               <Container>
                   <Navbar.Brand href='/'>Pokédex</Navbar.Brand>
                   <Nav className="me-auto">
                       <Nav.Link href='/'>Home</Nav.Link>
                       <Nav.Link href='/pokemon_list'>Pokémon</Nav.Link>
                   </Nav>
               </Container>
           </Navbar>
       </>
   );
}

