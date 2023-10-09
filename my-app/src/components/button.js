import { useState } from "react";

export const Button = () => {
  const [display, setDisplay] = useState();
  const handleClick = () => {
    setDisplay(`none`);
  };
  return (
    <button style={{ display: display }} onClick={handleClick}>
      Click Me
    </button>
  );
};
