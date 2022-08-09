import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ReviewForm from "./ReviewForm";
import Review from "./Review";

const ReviewList = (props) => {
  //list of reviews
  const [reviews, setReviews] = useState([]);
  //individual rating per review
  const [reviewStarRating, setReviewStarRating] = useState(0);
  //list of ratings from all reviews
  const [allReviewStarRatings, setAllReviewStarRatings] = useState([]);
  //average rating per movie
  const [averageRating, setAverageRating] = useState(0);
  //total reviews
  const [reviewCount, setReviewCount] = useState(0);
  useEffect(() => {
    //calculate average

    var sum = 0;

    if (reviewCount !== 0) {
      console.log("------  if");

      for (const rating of allReviewStarRatings) {
        const number = Number(rating);

        console.log("+++ rating: ", number);

        sum = sum + number;
      }

      const average = sum / reviewCount;

      const averageRounded = Math.round(average);

      setAverageRating(averageRounded);
      props.addAverageRating(averageRating);
      props.addReviewCount(reviewCount);

      console.log("+++ averageRating: ", averageRating);
      console.log("+++ reviewCount: ", reviewCount);
    } else {
      console.log("------ else");

      console.log("+++ reviewStarRating: ", reviewStarRating);
      console.log("+++ allReviewStarRatings: ", allReviewStarRatings);
      console.log("+++ averageRating: ", averageRating);
    }
  }, [
    reviews,
    reviewStarRating,
    reviewCount,
    allReviewStarRatings,
    averageRating,
  ]);

  const addReview = (review) => {
    if (!review.text || /^\s*$/.test(review.text) || !review.starRating) {
      return;
    }

    const newReviews = [review, ...reviews];

    setReviews(newReviews);
    setReviewStarRating(review.starRating);

    var array = allReviewStarRatings;
    const joined = array.concat(review.starRating.rating);
    console.log("$$ joined: ", joined);

    setAllReviewStarRatings(joined);
    setReviewCount(reviewCount + 1);

    console.log(...reviews);
    console.log(reviewStarRating);
  };

  return (
    <Container className="review-list-container">
      <Row>
        <Col>
          <h3>
            Reviews:
            <br />
          </h3>
          <Review
            reviews={reviews}
            reviewStarRating={reviewStarRating}
          ></Review>
          <br />
          <ReviewForm onSubmit={addReview}></ReviewForm>
        </Col>
      </Row>
    </Container>
  );
};

export default ReviewList;
