import { React, useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ReviewList from "./ReviewList";
import Stars from "./Stars";

const Movie = (props) => {
  const [averageRating, setAverageRating] = useState(0);
  const [reviewCount, setReviewCount] = useState(0);

  useEffect(() => {
    console.log("From movie component averageRating: ", averageRating);
    console.log("From movie component reviewCount: ", reviewCount);
  });

  const addAverageRating = (averageRatingFromChild) => {
    setAverageRating(averageRatingFromChild);
  };

  const addReviewCount = (reviewCountFromChild) => {
    setReviewCount(reviewCountFromChild);

    console.log(reviewCount);
  };

  return (
    <Container id="movie-container">
      <Row>
        <Col>
          <h3>
            {props.movieName}
            <br />
          </h3>
          <br />
          <img
            className="movie-image"
            src={props.image}
            alt={props.imageDescription}
          ></img>
          <br />
          <br />
        </Col>
        <Col id="vertical-center">
          {props.synopsis} <br />
          <br />
          {reviewCount} Reviews
          <Stars disabled rating={averageRating}></Stars>
        </Col>
        <Row>
          <ReviewList
            addAverageRating={addAverageRating}
            addReviewCount={addReviewCount}
          ></ReviewList>
        </Row>
      </Row>
    </Container>
  );
};

export default Movie;
