import { motion } from "framer-motion";

type RatingCardProps = {
  children: React.ReactNode;
};

const TRANSITION = {
  initial: { opacity: 0, scale: 0 },
  animate: { opacity: 1, scale: 1, transition: { delay: 0.1 } },
  exit: { opacity: 0, scale: 0 },
};

const RatingCard = ({ children }: RatingCardProps) => {
  return (
    <motion.div
      {...TRANSITION}
      className="bg-gradient-to-b from-base-300 to-base-200 p-7 rounded-3xl shadow-sm flex flex-col gap-8 w-[24rem] lg:w-[26rem]"
    >
      {children}
    </motion.div>
  );
};

export default RatingCard;
