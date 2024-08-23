import React from 'react'
import { Box, Typography } from '@mui/material';

function ProductCard({title,price,Product_img,type}) {
    return (
        <Box sx={{
            display:"flex",
            flexDirection:'column',
            justifyContent:'space-between',
            padding:'10px 20px',
            alignItems:'center',
            height:"310px",
            width:"220px",
            backgroundColor:'#fff',
            borderRadius:'6px',
            border:"1px solid #EDEDED",

        }}>
            <Box>
                <img src={Product_img} alt="" style={{
                    height:'170px',
                    width:'150px',
                    objectFit:'contain'
                }} />
            </Box>
            <Box>
                <Typography fontSize={'16px'} fontWeight={'bold'}>
                {price+'.00'+' DA'}
                </Typography>
                <Typography fontSize={'14px'} fontWeight={'200'} color={'#8B96A5'}>
                {title}
                </Typography>
             
            </Box>
        </Box>
    )
}

export default ProductCard
