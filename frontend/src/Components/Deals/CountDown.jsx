import React, { useEffect, useState } from 'react'
import { Box, Typography } from '@mui/material';

function CountDown() {
    const [countdown, setCountdown] = useState({
        days: 10,
        hours: 0,
        minutes: 0,
        seconds: 0,
      });
    
      useEffect(() => {
        const countdownInterval = setInterval(() => {
          setCountdown((prevCountdown) => {
            if (
              prevCountdown.days === 0 &&
              prevCountdown.hours === 0 &&
              prevCountdown.minutes === 0 &&
              prevCountdown.seconds === 0
            ) {
              clearInterval(countdownInterval);
              return prevCountdown;
            }
    
            let updatedCountdown = { ...prevCountdown };
    
            if (updatedCountdown.seconds === 0) {
              if (updatedCountdown.minutes === 0) {
                if (updatedCountdown.hours === 0) {
                  updatedCountdown.days -= 1;
                  updatedCountdown.hours = 23;
                  updatedCountdown.minutes = 59;
                  updatedCountdown.seconds = 59;
                } else {
                  updatedCountdown.hours -= 1;
                  updatedCountdown.minutes = 59;
                  updatedCountdown.seconds = 59;
                }
              } else {
                updatedCountdown.minutes -= 1;
                updatedCountdown.seconds = 59;
              }
            } else {
              updatedCountdown.seconds -= 1;
            }
    
            return updatedCountdown;
          });
        }, 1000);
    
        return () => clearInterval(countdownInterval);
      }, []);
    
      const renderTimeBox = (label, value) => (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            height: '50px',
            width: '45px',
            backgroundColor: '#606060',
            borderRadius: '6px',
       
          }}
        >
          <Typography fontSize={'16px'} fontWeight={'700'} color={'#fff'}>
            {value.toString().padStart(2, '0')}
          </Typography>
          <Typography fontSize={'12px'} fontWeight={'400'} color={'#fff'}>
            {label}
          </Typography>
        </Box>
      );
    
  return (
    <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      padding: '20px',
      borderRight:'1px solid #ededed',
      width:'290px'
    }}
  >
    <Typography fontSize={'20px'} fontWeight={'600'} color={'#000'}>
      Deals and offers
    </Typography>
    <Typography fontSize={'16px'} fontWeight={'400'} color={'#8B96A5'}>
      Hygiene equipment
    </Typography>

    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        marginTop: '16px',
      }}
    >
      {renderTimeBox('Days', countdown.days)}
      {renderTimeBox('Hours', countdown.hours)}
      {renderTimeBox('Min', countdown.minutes)}
      {renderTimeBox('Sec', countdown.seconds)}
    </Box>
  </Box>
  )
}

export default CountDown