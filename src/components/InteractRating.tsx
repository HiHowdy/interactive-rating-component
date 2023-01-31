import { useState } from "react";
import RatingForm from "./RatingForm";
import RatingSubmitted from "./RatingSubmitted";
import { AnimatePresence } from "framer-motion";

const InteractRating = () => {
  const [submitted, setSubmitted] = useState(false);
  const [rating, setRating] = useState(0);

  const handleSubmit = (rating: number) => {
    setRating(rating);
    setSubmitted(true);
  };

  return (
    <AnimatePresence>
      {submitted ? (
        <RatingSubmitted rating={rating} />
      ) : (
        <RatingForm onSubmit={handleSubmit} />
      )}
    </AnimatePresence>
  );
};

export default InteractRating;
