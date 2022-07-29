import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ReviewList from "./ReviewList";

const Movie = (props) => {
  return (
    <Container id="movie-container">
      <Row>
        <Col>
          <h3>
            {props.movieName}
            <br />
          </h3>

          <ReviewList></ReviewList>
        </Col>
      </Row>
    </Container>
  );
};

export default Movie;
