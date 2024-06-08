import PokeNavBar from "@/components/pokeNavBarComp";
import { Spinner, Button } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <PokeNavBar />
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} className="text-center" style={{ marginTop: '7rem' }}>
            <Image src="/images/pokedex-label.png" rounded style={{ maxWidth: '100%', maxHeight: '100%' }} />
            <h1 style={{ marginTop: '1.5rem' }}>Discover the world of Pokémon with my Pokédex...</h1>
            <Link href="/pokemonlist" passHref>
              <Button variant="warning" size="lg" style={{ marginTop: '3rem' }}>
                Go to Pokémon Page!
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
}
