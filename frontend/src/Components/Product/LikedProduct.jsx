import React from 'react'
import { Box, Typography } from '@mui/material';


function LikedProduct({title, price ,url}) {
    return(
      <Box width={'100%'} height={'85px'} display={'flex'} gap={'11px'} alignItems={'center'}>
        <img src={url} alt="" style={{
          height: '80px',
          width: '80px',
          borderRadius: '10px'
          ,border: '1px solid #EAEAEA',
          objectFit: 'contain'
        }} />
        <Box>
          <Typography fontSize={'16px' } fontWeight={'400'} color='#000'>
            {title} </Typography>
          <Typography fontSize={'16px' } fontWeight={'200'} color='#8B96A5'>
            {price+'.00 DA'} </Typography>
        </Box>
      </Box>
    )
}

export default LikedProduct
