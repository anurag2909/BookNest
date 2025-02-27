import ReviewModel from "../../models/ReviewModel";
import { StarsReview } from "./StarsReview";

export const Review: React.FC<{ review: ReviewModel }> = (props) => {
  const date = new Date(props.review.date);

  const month = date.toLocaleString("en-us", { month: "long" });
  const day = date.getDate();
  const year = date.getFullYear();

  const finalDate = month + " " + day + " " + year;
  //console.log(finalDate);

  return (
    <div>
      <div className="col-sm-8 col-md-8">
        <h5>{props.review.userEmail}</h5>
        <div className="row">
          <div className="col">{finalDate}</div>
          <div className="col">
            <StarsReview rating={props.review.rating} size={16} />
          </div>
        </div>
        <div className="mt-2">
          <p>{props.review.reviewDescription}</p>
        </div>
      </div>
    </div>
  );
};
