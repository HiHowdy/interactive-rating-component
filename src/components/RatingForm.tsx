import { useState } from "react";
import CircleButton from "./common/CircleButton";
import { AiFillStar } from "react-icons/ai";
import Button from "./common/Button";
import RatingCard from "./RatingCard";

type RatingFormProps = {
  onSubmit: (rating: number) => void;
  rating: number;
  setRating: (rating: number) => void;
};

const RatingForm = ({ rating, setRating, onSubmit }: RatingFormProps) => {
  const handleSubmit = () => onSubmit(rating + 1);

  return (
    <RatingCard>
      <CircleButton className="text-primary cursor-default">
        <img src="/icon-star.svg" alt="star" />
      </CircleButton>
      <div className="flex flex-col gap-2">
        <h1 className="text-[1.8rem] font-semibold text-white">
          How did we do?
        </h1>
        <p className="text-gray-300 opacity-70 leading-6">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
      </div>
      <div className="flex justify-between">
        {[1, 2, 3, 4, 5].map((item, index) => (
          <CircleButton
            onClick={() => setRating(index)}
            key={item}
            className={`font-semibold text-md pb-[0.2rem] ${
              index === rating
                ? "text-white"
                : "hover:bg-base-content hover:text-white"
            }`}
            background={`${index === rating ? "bg-primary" : "bg-base-300"}`}
          >
            {index + 1}
          </CircleButton>
        ))}
      </div>
      <Button onClick={handleSubmit}>Submit</Button>
    </RatingCard>
  );
};

export default RatingForm;
