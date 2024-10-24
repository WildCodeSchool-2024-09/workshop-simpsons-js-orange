import { useState } from 'react';

const Avatar = ({ image, firstName, lastName }) => {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <img src={image} alt={firstName} style={{ width: 100 }} />
      <p>
        {firstName} {lastName}
      </p>
      <p>{count}</p>
      <button onClick={handleCount}>Je veux un donut</button>
    </div>
  );
};

export default Avatar;
