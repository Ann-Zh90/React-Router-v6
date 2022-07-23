import React from "react";

const CustomButton = (props: React.HTMLProps<HTMLInputElement>) => {
  return <input {...props}>Click</input>;
};

export default CustomButton;
