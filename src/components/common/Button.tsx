type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

const Button = ({ children, onClick, className }: ButtonProps) => {
  return (
    <button
      className={`${className} w-full bg-primary text-white py-3 uppercase tracking-widest rounded-full font-semibold text-sm transition ease-in-out hover:bg-white hover:text-primary`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
