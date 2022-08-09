import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Movie from "./Movie";

const MovieList = () => {
  const movies = [
    {
      image: "./assets/DespicableMe.jpg",
      imageDescription: "despicable me image",
      movieName: "Despicable Me",
      synopsis:
        "Supervillain Gru, a man who delights in all things wicked, hatches a plan to steal the moon. Surrounded by an army of little yellow minions and his impenetrable arsenal of weapons and war machines, Gru prepares to vanquish all who stand in his way. However, nothing in his calculations and groundwork has prepared him for his greatest challenge: three adorable orphan girls who want to make him their dad.",
    },
    {
      image: "./assets/interstellar.jpg",
      imageDescription: "Interstellar image",
      movieName: "Interstellar",
      synopsis:
        "In Earth's future, a global crop blight and second Dust Bowl are slowly rendering the planet uninhabitable. Professor Brand (Michael Caine), a brilliant NASA physicist, is working on plans to save mankind by transporting Earth's population to a new home via a wormhole. But first, Brand must send former NASA pilot Cooper (Matthew McConaughey) and a team of researchers through the wormhole and across the galaxy to find out which of three planets could be mankind's new home.",
    },
    {
      image: "./assets/TheDarkKnight.jpg",
      imageDescription: "the dark knight image",
      movieName: "The Dark Knight",
      synopsis:
        "With the help of allies Lt. Jim Gordon (Gary Oldman) and DA Harvey Dent (Aaron Eckhart), Batman (Christian Bale) has been able to keep a tight lid on crime in Gotham City. But when a vile young criminal calling himself the Joker (Heath Ledger) suddenly throws the town into chaos, the caped Crusader begins to tread a fine line between heroism and vigilantism.",
    },
  ];
  const movieList = movies.map((movie) => (
    <Movie
      image={movie.image}
      imageDescription={movie.imageDescription}
      movieName={movie.movieName}
      synopsis={movie.synopsis}
    ></Movie>
  ));
  return (
    <Container fluid>
      <Row>
        <Col>
          <h3>
            Movies
            <br />
            <br />
          </h3>
          <div>{movieList}</div>
        </Col>
      </Row>
    </Container>
  );
};

export default MovieList;
