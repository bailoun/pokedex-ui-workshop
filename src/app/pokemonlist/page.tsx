'use client'
import PokemonsComp from "@/components/pokemonsComp";
import PokeNavBar from "@/components/pokeNavBarComp";
import PokemonCard from "@/model/pokemonCard";
import { useEffect, useState } from "react";
import { Container, Row, Spinner, Col, Button } from "react-bootstrap";

export default function PokemonList() {
  const [pokemons, setPokemons] = useState<PokemonCard[]>([]);
  const [nextToken, setNextToken] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchPokemons = async (token: string | null = null) => {
    try {
      let url = '/api/pokemon';
      if (token) {
        url += `?nextPage=${token}`;
      }

      const resp = await fetch(url);
      if (resp.ok) {
        const data = await resp.json();
        const nextToken = data.nextPage;
        const newPokemons: PokemonCard[] = data.items;
        setPokemons(prev => [...prev, ...newPokemons]);
        setNextToken(nextToken);
      } else {
        console.error('Error fetching data', resp.statusText);
      }
    } catch (error) {
      console.error('Error fetching data', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <>
      <PokeNavBar />
      {loading ? (
        <Container>
          <Row className="justify-content-center">
            <Col xs="auto" className="text-center">
              <Spinner className='p-2' animation='border' role='status' />
              <p>Loading Pokémon...</p>
            </Col>
          </Row>
        </Container>
      ) : (
        <>
          <PokemonsComp pokemons={pokemons} />
          {nextToken && (
            <Container className="py-5">
              <Row className="justify-content-center">
                <Col xs="auto">
                  <Button variant="primary" onClick={() => fetchPokemons(nextToken)}>
                    More Pokémon!
                  </Button>
                </Col>
              </Row>
            </Container>
          )}
        </>
      )}
    </>
  );
}
