import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Stars from "./Stars";

function ReviewForm(props) {
  const [input, setInput] = useState("");
  const [id, setId] = useState(0);
  let [starRating, setStarRating] = useState(0);

  const addRating = (rating) => {
    let newStarRating = rating;

    starRating = newStarRating;

    console.log(starRating);
  };

  const handleOnChange = (e) => {
    setInput(e.target.value);
  };

  const handleOnSubmit = (e) => {
    //prevent navigation on submit
    e.preventDefault();

    //increment id of review
    setId(id + 1);

    //read submit set in props of form component from parent component
    props.onSubmit({
      id: id,
      text: input,
      starRating: starRating,
    });

    console.log({
      id: id,
      text: input,
      starRating: starRating,
    });

    //reset input and starRating
    setInput("");
    setStarRating(0);
  };

  return (
    <Container className="small-container" id="review-form-container">
      <Form onSubmit={handleOnSubmit}>
        <Form.Group className="mb-3" controlId="formReview">
          <Form.Control
            type="text"
            name="review"
            value={input}
            onChange={handleOnChange}
            placeholder="Add new review:"
          />
        </Form.Group>

        <Stars disabled={input === ""} onClick={addRating} />

        <Button variant="default" type="submit" id="submit-review">
          Submit review
        </Button>
      </Form>
    </Container>
  );
}

export default ReviewForm;
