import React, { useState } from 'react';

const StarRating = ({ totalStars }) => {




  return (
    <div>
      {[...Array(5)].map((_, index) => (
        <span
          key={index}

          style={{
            cursor: 'pointer',
            color: index + 1 <= totalStars ? 'orange' : 'gray',
          }}
        >
          ★
        </span>
      ))}

    </div>
  );
};

export default StarRating;
