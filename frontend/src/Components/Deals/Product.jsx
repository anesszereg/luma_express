import React from 'react'
import {Box, Typography} from '@mui/material';

function Product({url, product_name,discount}) {
    return (
        <Box sx={
            {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                width:'200px',
                height:'100%',
                borderRight:'1px solid #EDEDED',
            }
        }>

            <img src={url}
                alt=""
                style={
                    {
                        objectFit: 'cover',
                        marginTop:'20px'
                    }
                }/>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-end',
                gap: '7px',
                height:'100%',
                padding:'10px'

            }}>
                <Typography fontSize={'16px'} fontWeight={'400'} color={'#000'}> {product_name} </Typography>

                <Box sx={{
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'center',
                    borderRadius:'40px',
                    height:'28px',
                    padding:'0 13px',
                    backgroundColor:'#FFE3E3',
                }}>
                <Typography fontSize={'14px'} fontWeight={'500'} color={'#EB001B'}>-{discount}%</Typography>


                </Box>

            </Box>
        </Box>
    )
}

export default Product
