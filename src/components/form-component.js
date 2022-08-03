import { useState } from "react";
import TextComponent from "./text-component";
import ThanksComponent from "./thanks-component";

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
        return;
      } 
        setIsSubmitted(true);
    };

    return (
      <div className="container">
        {!isSubmitted ? (
          <>
            <TextComponent />
            <form className="form" onSubmit={submitHandler}>
              <div>
              {rateNumbers.map((item) => (
                  <input key={item} type="button" value={item} onClick={clickHandler} />
                  ))}
              </div>
                <button>Submit</button>
            </form>
          </>
        ) : (
          <h1>
            <ThanksComponent ratingNumber={ratingNumber} />
          </h1>
        )}
      </div>
    );
}