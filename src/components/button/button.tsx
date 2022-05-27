type ButtonProps = {
  onClick?: () => void;
};

export const Button: React.FC<ButtonProps> = (x) => {
  return (
    <div onClick={x.onClick}>
      <img src="assets/lupa.svg" alt="" />
    </div>
  );
};
