import React, { useState } from "react";

const ReactUseStateSingleDataType = () => {
  const [count, setCount] = useState(0);

  const handleButtonClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      {count}
      <br />
      <button onClick={handleButtonClick}>Increase Count</button>
    </div>
  );
};

export default ReactUseStateSingleDataType;
