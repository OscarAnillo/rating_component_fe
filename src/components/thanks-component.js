export default function ThanksComponent({ ratingNumber }){
    return (
        <div className="rating">
            <img src="/images/illustration-thank-you.svg" alt="" />
            <p>{ratingNumber && <p>You selected {ratingNumber} out of 5</p>}</p>
            <h3>Thank you!</h3>
            <p className="legend">We appreciate you taking the time to give a rating. If you ever need more support don't hesitate to get in touch!</p>
        </div>
    )
}