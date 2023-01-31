type CircleButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  background?: string;
};

const CircleButton = ({ children, onClick, className, background = 'bg-base-300' }: CircleButtonProps) => {
  return (
    <button
      className={`${className} ${background} w-14 h-14 rounded-full shadow-sm flex items-center justify-center`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default CircleButton;
