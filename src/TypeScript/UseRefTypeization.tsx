import { FC, useRef, useState } from "react";

const UseRefTypeization: FC = () => {
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const clickHandler = () => {
    console.log("input.current.value");
    if (inputRef.current) {
      console.log("input.current.value");
      setValue(inputRef.current.value);
    }
  };

  return (
    <div>
      <input type="text" placeholder="type text" ref={inputRef} />
      <input type="text" value={value || "see your text here"} />
      <button onClick={clickHandler}>click on useRef</button>
    </div>
  );
};

export default UseRefTypeization;
