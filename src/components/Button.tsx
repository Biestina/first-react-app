type Color = "primary" | "secondary" | "success" | "danger" | "warning" | "info";

interface Props {
  children: string;
  color?: Color;
  onClick: () => void;
}

const Button = ({children, onClick, color = 'primary'}: Props) => {
  return (
    <button className={'btn btn-' + color} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button