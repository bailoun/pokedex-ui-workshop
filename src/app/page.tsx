'use client'

import PokeNavBar from "@/components/pokeNavBarComp";
import { Spinner, Button } from "react-bootstrap"; // Import Button
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Link from 'next/link'; // Import Link for navigation

export default function Home() {
  return (
    <>
      <PokeNavBar />
      <div>
        <Container>
          <Row className="justify-content-center">
            <Col xs={6} md={6} lg={6} xl={6} className="text-center" style={{ marginTop: '7rem' }}>
              <Image src="/images/pokedex-label.png" rounded />
              <h1>Discover the world of Pokémon with my Pokédex...</h1>
              <div style={{ marginTop: '1rem' }}>
                <Link href="/pokemonlist" passHref>
                  <Button variant="warning" size="lg">
                    Go to Pokémon Page!
                  </Button>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
