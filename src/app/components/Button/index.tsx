import React from "react";

interface Props {
  border?: string;
  color?: string;
  children?: React.ReactNode;
  height?: string;
  onClick?: () => void;
  radius?: string;
  width?: string;
}

const Button: React.FC<Props> = ({ 
    border="none",
    color="#d4d4d5",
    children,
    height="40px",
    onClick, 
    radius="20px",
    width="100%"
  }) => { 
  return (
    <button 
      onClick={onClick}
      style={{
         backgroundColor: color,
         border,
         borderRadius: radius,
         height,
         width,
         cursor:"pointer",
         color:"white"
      }}
    >
    {children}
    </button>
  );
}

export default Button;