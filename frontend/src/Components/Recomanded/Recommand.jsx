import React, { useEffect, useState } from 'react'
import { Box, Typography } from '@mui/material';
import ProductCard from './ProductCard';
import Tshirt from '../../assets/Images/tshirt.png'
import vaste from '../../assets/Images/vaste.png'
import hotcup from '../../assets/Images/hotcup.png'
import costume from '../../assets/Images/costume.png'
import bag from '../../assets/Images/bag.png'
import short from '../../assets/Images/short.png'
import portmoney from '../../assets/Images/portmoney.png'


// const productsData = [
//     {
//         title: 'T-shirts with multiple colors, for men',
//         price: 300.00,
//         Product_img: Tshirt,
//         type:'clothes'

//     },
//     {
//         title:'Jeans shorts for men blue color',
//         price: 2300.00,
//         Product_img: short,
//         type:'clothes'
//     },
//     {
//         title: 'Brown winter coat medium size',
//         price: 300.00,
//         Product_img: vaste,
//         type:'clothes'

//     },
//     {
//         title:'Jeans bag for travel for men',
//         price: 3300.00,
//         Product_img: bag,
//         type:'clothes'
//     },
//     {
//         title: 'Blue wallet for men leather metarfial',
//         price: 100.00,
//         Product_img: portmoney,
//         type:'clothes'

//     },
//     {
//         title:'watter cup for hot drinks',
//         price: 2300.00,
//         Product_img: hotcup,
//         type:'clothes'
//     },
//     {
//         title: 'T-shirts with multiple colors, for men',
//         price: 300.00,
//         Product_img: Tshirt,
//         type:'clothes'

//     },
//     {
//         title:'Jeans shorts for men blue color',
//         price: 2300.00,
//         Product_img: short,
//         type:'clothes'
//     },
//     {
//         title: 'Brown winter coat medium size',
//         price: 300.00,
//         Product_img: vaste,
//         type:'clothes'

//     },
//     {
//         title:'Jeans bag for travel for men',
//         price: 3300.00,
//         Product_img: bag,
//         type:'clothes'
//     },
//     {
//         title: 'Blue wallet for men leather metarfial',
//         price: 100.00,
//         Product_img: portmoney,
//         type:'clothes'

//     },
//     {
//         title:'watter cup for hot drinks',
//         price: 2300.00,
//         Product_img: hotcup,
//         type:'clothes'
//     },

// ]

function Recommand() {



    const [productsData, setProductsData] = useState()

    useEffect(() => {

        try {

            const fetchData = async () => {
                const res = await axios.get('http://localhost:3000/api/v1/Product')
                setProductsData(res.data)
                console.log('====================================');
                console.log(res.data);
                console.log('====================================');
            }
        } catch (error) {
            console.log(error)
        }


        fetchData()


    }, [])

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '25px',

        }}>
            <Typography fontSize={'24px'} fontWeight={'600'}>
                Recommended items
            </Typography>
            <Box sx={
                {
                    display: 'flex',
                    gap: '20px',
                    flexWrap: 'wrap'
                }
            }>
                {
                    productsData.map((item, index) => (
                        <ProductCard key={index} title={item.title} price={item.price} Product_img={item.Product_img} type={item.type} />
                    ))
                }
            </Box>
        </Box>
    )
}

export default Recommand
