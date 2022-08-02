import { useState } from "react";

export default function FormComponent(){
    const rateNumbers = [1, 2, 3, 4, 5];
    const [ratingNumber, setRatingNumber] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    const clickHandler = (e) => {
      setRatingNumber(e.target.value);
    };

    const submitHandler = (e) => {
      e.preventDefault();
      if (!ratingNumber) {
        alert("Please select a rating!");
      } else {
        setIsSubmitted(true);
      }
    };

    return (
      <div>
        {!isSubmitted ? (
          <form className="form" onSubmit={submitHandler}>
            {rateNumbers.map((item) => (
              <div key={item}>
                <input type="button" value={item} onClick={clickHandler} />
              </div>
            ))}
            <button>Submit</button>
            {ratingNumber && <p>You have selected {ratingNumber} out of 5</p>}
          </form>
        ) : (
          <h1>Component here!</h1>
        )}
      </div>
    );
}