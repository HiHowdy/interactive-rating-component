import { motion } from "framer-motion";

type RatingCardProps = {
  children: React.ReactNode;
};

// bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-yellow-700 via-violet-500 to-zinc-800

const TRANSITION = {
  initial: { opacity: 0, scale: 0 },
  animate: { opacity: 1, scale: 1, transition: { delay: 0.1 } },
  exit: { opacity: 0, scale: 0 },
};

const RatingCard = ({ children }: RatingCardProps) => {
  return (
    <motion.div
      {...TRANSITION}
      className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-base-300 to-base-200 p-7 rounded-3xl shadow-sm flex flex-col gap-8 w-[24rem] lg:w-[26rem]"
    >
      {children}
    </motion.div>
  );
};

export default RatingCard;
