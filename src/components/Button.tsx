import React, { useState } from 'react';

const IncrementButton: React.FC = () => {
  const [value, setValue] = useState<number>(5);

  const handleClick = () => {
    setValue(value + 50);
  };

  return (
    <button onClick={handleClick}>
      {value}
    </button>
  );
};

export default IncrementButton;