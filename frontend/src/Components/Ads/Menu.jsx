import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';

const data = [
  'Automobiles',
  'Baby Products',
  'Beauty & Personal Care',
  'Books',
  'Clothing & Accessories',
  'Electronics',
  'Garden & Outdoors',
  'Grocery',
  'Health & Household',
];

function Menu() {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (index) => {
    setSelectedItem(index === selectedItem ? null : index);
  };

  return (
    <Box>
      {data.map((item, index) => (
        <Box
          key={index}
          sx={{
            display: 'flex',
            padding: '10px',
            height: '40px',
            width: '250px',
            cursor: 'pointer',
            borderRadius: '6px',
            color: selectedItem === index ? '#000' : '#666666',
            backgroundColor: selectedItem === index ? '#E5F1FF' : '#fff',
            '&:hover': {
              backgroundColor: '#E5F1FF',
            },
          }}
          onClick={() => handleItemClick(index)}
        >
          <Typography>{item}</Typography>
        </Box>
      ))}
    </Box>
  );
}

export default Menu;
