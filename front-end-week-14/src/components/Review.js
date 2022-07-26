import React from "react";
import Container from "react-bootstrap/Container";
import Stars from "./Stars";
import Button from "react-bootstrap/Button";

const Review = ({ reviews }) => {
  return reviews.map((review, index) => (
    <Container id="review-container" key={index}>
      <Stars disabled={true} rating={review.starRating.rating} />
      {review.text}
    </Container>
  ));
};

export default Review;
