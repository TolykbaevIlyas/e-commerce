interface IButton{
  type?:"submit" | "reset" | "button" | undefined;
  onClick?: ()=>void;
  children?: React.ReactNode;
  className?: string;
}


const Button = ({type,onClick,children,className}:IButton) => {
  return (
    <button 
        type={type}
        onClick={onClick}
        className={`${className} btn btn-primary`}>
      {children}
    </button>
  )
}

export default Button