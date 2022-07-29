import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Movie from "./Movie";

const MovieList = (props) => {
  const movies = [];
  const movieList = movies.map((movie) => <Movie name={movie.name}></Movie>);
  return (
    <Container fluid>
      <Row>
        <Col>
          <h3>
            List of reviews
            <br />
          </h3>
          <div>{movieList}</div>
        </Col>
      </Row>
    </Container>
  );
};

export default MovieList;
