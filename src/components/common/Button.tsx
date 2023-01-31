type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

const Button = ({ children, onClick, className }: ButtonProps) => {
  return (
    <button
      className={`${className} hover:bg-white hover:text-primary w-full bg-primary text-white py-3 uppercase tracking-widest rounded-full font-semibold text-sm`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
