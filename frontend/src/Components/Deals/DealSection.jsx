import React, {useState, useEffect} from 'react';
import {Box, Typography} from '@mui/material';
import CountDown from './CountDown';
import Product from './Product';
import phone from '../../assets/Images/phone.png'
import camera from '../../assets/Images/camera.png'
import casque from '../../assets/Images/casque.png'
import macbook from '../../assets/Images/macbook.png'
import watch from '../../assets/Images/watch.png'


const productData = [
    {
        name: 'Product 1',
        discount: 5,
        url:phone },
    {
        name: 'Product 2',
        discount: 25,
        url: camera
    },
    {
        name: 'Product 3',      
        discount: 15,
        url: casque
    },
    {
        name: 'Product 4',
        discount: 20,
        url: watch
    },
    {
        name: 'Product 5',
        discount: 30,
        url: macbook
    },
    {
        name: 'Product 5',
        discount: 30,
        url: macbook
    },
   

]

function DealSection() {


    return (
        <Box sx={
            {
                display: 'flex',
                borderRadius: '6px',
                backgroundColor: '#fff',
                border: '1px solid #EDEDED',
                height: '240px',
                width: '100%'
            }
        }>
            <CountDown/>

            {
                productData.map((item , index)=> (
                    <Product key={index} product_name={item.name} discount={item.discount} url={item.url}/>
                ))
            }


        </Box>
    );
}

export default DealSection;
