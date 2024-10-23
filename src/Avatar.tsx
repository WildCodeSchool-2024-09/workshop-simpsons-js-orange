import React from 'react';

const Avatar = ({ image, firstName, lastName }) => {
  return (
    <div>
      <img src={image} alt={firstName} style={{ width: 100 }} />
      <p>
        {firstName} {lastName}
      </p>
    </div>
  );
};

export default Avatar;
