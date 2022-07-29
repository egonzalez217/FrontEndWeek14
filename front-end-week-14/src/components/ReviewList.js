import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ReviewForm from "./ReviewForm";
import Review from "./Review";

const ReviewList = () => {
  const [reviews, setReviews] = useState([]);

  const addReview = (review) => {
    if (!review.text || /^\s*$/.test(review.text) || !review.starRating) {
      return;
    }

    const newReviews = [review, ...reviews];

    setReviews(newReviews);

    console.log(...reviews);
  };

  return (
    <Container fluid>
      <Row>
        <Col>
          <h3>
            List of reviews
            <br />
          </h3>
          <Review reviews={reviews}></Review>
          <ReviewForm onSubmit={addReview}></ReviewForm>
        </Col>
      </Row>
    </Container>
  );
};

export default ReviewList;
