import React from 'react'
import {Box, Typography} from '@mui/material';

function Product({title, price, Product_img}) {
    return (
        <Box sx={
            {
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                padding: '10px',
                border: '1px solid #EDEDED',
                width: '228.4px',
                height: "130px"

            }
        }>
            <Typography fontSize={'16px'}
                fontWeight={'400'}>
                {title} </Typography>
            <Box sx={
                {
                    display: 'flex',
                    alignItems: 'start',
                    justifyContent: 'space-between'
                }
            }>
                <Box sx={
                    {
                        display: 'flex',
                        flexDirection: 'column',
                        width: '60px'
                    }
                }>

                    <Typography fontSize={'13px'}
                        fontWeight={'400'}
                        color={'#8B96A5'}>
                        Form
                    </Typography>
                    <Typography fontSize={'13px'}
                        fontWeight={'400'}
                        color={'#8B96A5'}>
                        {
                        price + "DA"
                    } </Typography>
                </Box>
                <img src={Product_img}
                    alt="product_image"
                    style={
                        {
                            width: '82px',
                            height: '82px',
                            objectFit: 'cover'
                        }
                    }/>

            </Box>
        </Box>
    )
}

export default Product
