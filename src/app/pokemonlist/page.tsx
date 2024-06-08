'use client'
import PokemonsComp from "@/components/pokemonsComp";
import PokeNavBar from "@/components/pokeNavBarComp";
import PokemonCard from "@/model/pokemonCard";
import { useEffect, useState } from "react";
import { Container, Row, Spinner, Col } from "react-bootstrap";


export default function PokemonList() {


 const [pokemons, setPokemons] = useState<PokemonCard[]>();


 useEffect(() => {
   const fetchData = async () => {
     const resp = await fetch('/api/pokemon');
     if (resp.ok) {
       const pokemons: PokemonCard[] = (await resp.json()).items;
       console.log(pokemons);
       setPokemons(pokemons);
     }
   };


   fetchData()
     // Making sure to log errors on the console
     .catch(error => {
       console.error(error);
     });
 }, []);


 return (
   <>
     <PokeNavBar></PokeNavBar>
     {pokemons ?
       <PokemonsComp pokemons={pokemons}></PokemonsComp> :
       <Container>
            <Row className="justify-content-center">
                <Col xs="auto" className="text-center">
                    <Spinner className='p-2' animation='border' role='status' />
                    <p>Loading Pokémon...</p>
                </Col>
            </Row>
        </Container>
     }
   </>
 );
}
