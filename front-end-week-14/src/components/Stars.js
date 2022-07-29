import React, { useState } from "react";

function Stars(props) {
  let [rating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleOnClick = (e) => {
    //initialize function level rating variable
    var ratingValue = 0;

    //if target is span grab parent node value, else grab value from button
    if (e.target.tagName === "SPAN") {
      ratingValue = e.target.parentNode.dataset.key;
    } else {
      ratingValue = e.target.dataset.key;
    }
    console.log(ratingValue);

    rating = ratingValue;

    console.log(rating);

    props.onClick({
      rating: rating,
    });
  };

  //dynamic class display for stars used in parent components
  const newClass = (x, index) => {
    let classString = "";
    if (!props.rating) {
      classString = index <= (hover || rating) ? "on" : "off";
    } else {
      classString = index <= (hover || props.rating) ? "on" : "off";
    }
    return classString;
  };

  return (
    <div className="star-wrapper">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            id="stars"
            type="button"
            key={index}
            data-key={index}
            className={newClass(star, index)}
            onClick={handleOnClick}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
            disabled={props.disabled}
          >
            <span className="star">&#9733;</span>
          </button>
        );
      })}
    </div>
  );
}

export default Stars;
