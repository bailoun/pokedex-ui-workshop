import Pokemon from "@/model/pokemon";
import { Row, Col, Container, Image, ProgressBar, Card, ListGroup, Badge, Tab, Tabs } from 'react-bootstrap';

type Props = {
    pokemon: Pokemon;
}

export default function PokemonComponent(props: Props) {
    const { pokemon } = props;

    const getFamilyTag = (pokemon: Pokemon, evolution: string) => {
        if (evolution === pokemon.devolution) {
          return <Badge bg="danger">Devolution</Badge>
        }
        if (evolution === pokemon.pokemonName) {
          return <Badge bg="primary">Current</Badge>
        }
        if (evolution === pokemon.evolution) {
          return <Badge bg="success">Evolution</Badge>
        }
        return <></>
      }
    
    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col md="auto"><h1>{pokemon.pokemonName}</h1></Col>
            </Row>
            <Row>
                <Col className="d-flex justify-content-md-center">
                    <Image src={pokemon.mainImage} rounded thumbnail fluid style={{width:'20vw', height:'40vh'}}/>
                </Col>
            </Row>
            <Tabs defaultActiveKey={"pokemon-stats"} id={"pokemon-stats-id"} className="mb-3">
                <Tab eventKey={"pokemon-stats"} title={"Pokemon Stats"}>
                    <Row>
                        <Col xs={1}>Speed:</Col>
                        <Col><ProgressBar variant="info" animated now={pokemon.speed} label={pokemon.speed} /></Col>
                    </Row>
                    <Row>
                        <Col xs={1}>Health points: </Col>
                        <Col><ProgressBar variant="danger" animated now={pokemon.healthPoints} label={pokemon.healthPoints} /></Col>
                    </Row>
                    <Row>
                        <Col xs={1}>Attack: </Col>
                        <Col><ProgressBar variant="warning" animated now={pokemon.attack} label={pokemon.attack} /></Col>
                    </Row>
                    <Row>
                        <Col xs={1}>Defense: </Col>
                        <Col><ProgressBar variant="success" animated now={pokemon.defense} label={pokemon.defense} /></Col>
                    </Row>
                </Tab>
                <Tab eventKey={"pokemon-type"} title={"Pokemon Type"}>
                    <Row className="m-2">
                        <Card className="p-0">
                            <Card.Header>Pokemon type</Card.Header>
                            <ListGroup variant="flush">
                                {pokemon.pokemonType.map(type => <ListGroup.Item key={pokemon.pokemonNumber}>{type}</ListGroup.Item>)}
                            </ListGroup>
                        </Card>
                    </Row>
                </Tab>
                <Tab eventKey={"evolution-family"} title={"Evolution Family"}>
                    <Row className="m-2">
                        <Card className="p-0">
                            <Card.Header>Evaluation family</Card.Header>
                            <ListGroup variant="flush">
                                {pokemon.evolutionFamily.map(evolution => <ListGroup.Item key={pokemon.pokemonNumber}>{evolution} {getFamilyTag(pokemon, evolution)}</ListGroup.Item>)}
                            </ListGroup>
                        </Card>
                    </Row>
                </Tab>
                
            </Tabs>
        </Container>
    )
}
    /*return (
        <Container>
            <Row className="justify-content-md-center">
                <Col md="auto"><h1>{pokemon.pokemonName}</h1></Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col md={5}>
                <Image src={pokemon.mainImage} roundedCircle thumbnail fluid style={{ width: '500px', height: '500px' }} /></Col>
                </Row>
                <Row><Col>
                    <Row className="m-2">
                        <Row>
                            <Col xs={3}>Speed:</Col>
                            <Col><ProgressBar variant="info" now={pokemon.speed} label={pokemon.speed} /></Col>
                        </Row>
                        <Row>
                            <Col xs={3}>Health points: </Col>
                            <Col><ProgressBar variant="danger" now={pokemon.healthPoints} label={pokemon.healthPoints} /></Col>
                        </Row>
                        <Row>
                            <Col xs={3}>Attack: </Col>
                            <Col><ProgressBar variant="warning" now={pokemon.attack} label={pokemon.attack} /></Col>
                        </Row>
                        <Row>
                            <Col xs={3}>Defense: </Col>
                            <Col><ProgressBar variant="success" now={pokemon.defense} label={pokemon.defense} /></Col>
                        </Row>
                    </Row>
                    <Row className="m-2">
                        <Card className="p-0">
                            <Card.Header>Pokemon type</Card.Header>
                            <ListGroup variant="flush">
                                {pokemon.pokemonType.map(type => <ListGroup.Item key={pokemon.pokemonNumber}>{type}</ListGroup.Item>)}
                            </ListGroup>
                        </Card>
                    </Row>
                    <Row className="m-2">
                        <Card className="p-0">
                            <Card.Header>Evaluation family</Card.Header>
                            <ListGroup variant="flush">
                                {pokemon.evolutionFamily.map(evolution => <ListGroup.Item key={pokemon.pokemonNumber}>{evolution} {getFamilyTag(pokemon, evolution)}</ListGroup.Item>)}
                            </ListGroup>
                        </Card>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}*/
