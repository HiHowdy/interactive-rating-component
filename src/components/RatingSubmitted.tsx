import RatingCard from "./RatingCard";
import { motion } from "framer-motion";

type RatingSubmittedProps = {
  rating: number;
};

const TRANSITION = {
  initial: { opacity: 0, y: 20, scale: 0 },
  animate: { opacity: 1, y: 0, scale: 1, transition: { delay: 0.2 } },
  exit: { opacity: 0, y: 20, scale: 0 },
};

const RatingSubmitted = ({ rating = 1 }: RatingSubmittedProps) => {
  return (
    <RatingCard>
      <div className="flex items-center justify-center mt-4">
        <motion.img
          {...TRANSITION}
          src="/illustration-thank-you.svg"
          alt="illustration"
          className="w-34"
        />
      </div>
      <div className="text-center text-primary mt-1">
        <span className="bg-base-300 py-2 px-5 rounded-full text-[0.85rem]">
          You selected {rating} out of 5
        </span>
      </div>
      <div className="text-center flex flex-col gap-3 mb-4">
        <h1 className="text-[1.8rem] font-semibold text-white">Thank you!</h1>
        <p className="text-gray-300 opacity-70 leading-6">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don't hesitate to get in touch!
        </p>
      </div>
    </RatingCard>
  );
};

export default RatingSubmitted;
