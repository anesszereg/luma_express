import React, {useState} from 'react'
import {Box, Typography, Button} from '@mui/material';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Category from '../Components/Category';

import Shirt from '../assets/Images/shirt.png'
import shirtb from '../assets/Images/shirtb.png'
import shirtF from '../assets/Images/shirtF.png'
import shirtcloser from '../assets/Images/shirtcloser.png'
import shirtmodel from '../assets/Images/shirtmodel.png'
import shirtO from '../assets/Images/shirtO.png'
import costume from '../assets/Images/costume.png'
import bag from '../assets/Images/bag.png'

import Details from '../Components/Product/Details';
import LikedProduct from '../Components/Product/LikedProduct';
import RelatedPost from '../Components/Product/RelatedPost';


const productImages = [
    {
        img: Shirt,
        title: 'Shirt'
    },
    {
        img: shirtb,
        title: 'Shirt'
    },
    {
        img: shirtF,
        title: 'Shirt'
    },
    {
        img: shirtcloser,
        title: 'Shirt'
    }, {
        img: shirtmodel,
        title: 'Shirt'
    }, {
        img: shirtO,
        title: 'Shirt'
    }
]

const productDetails = [
    {

        title: 'Men Blazers Sets Elegant Formal',
        price: '1,500',
        url:costume
    }, {
        title: 'Men Shirt Sleeve Polo Contrast',
        price: '2,500',
        url:Shirt

    }, {
        title: 'New Summer Mens  castrol T-Shirts',
        price: '200',
        url: bag
    },
    {

        title: 'Men Blazers Sets Elegant Formal',
        price: '1,500',
        url:costume
    }, {
        title: 'Men Shirt Sleeve Polo Contrast',
        price: '2,500',
        url:Shirt

    }, {
        title: 'New Summer Mens  castrol T-Shirts',
        price: '200',
        url: bag
    },
    {

        title: 'Men Blazers Sets Elegant Formal',
        price: '1,500',
        url:costume
    }, {
        title: 'Men Shirt Sleeve Polo Contrast',
        price: '2,500',
        url:Shirt

    }, {
        title: 'New Summer Mens  castrol T-Shirts',
        price: '200',
        url: bag
    },
]


function ProductPage() {

    const [image, setImage] = useState(productImages[0].img)
    const [isAvilable, setIsAvilable] = useState(true)
    const [color, setColor] = useState(null)
    const [size, setSize] = useState(null)
    const [count, setCount] = useState(1)
    return (
        <Box sx={
            {
                backgroundColor: '#F3F9FB',
                height: '100%',
                width: '100%',
                display: 'flex',
                flexDirection: 'column'


            }
        }>
            <Navbar/>
            <Category/>
            <Box sx={
                {padding: '50px 120px',
                display:'flex',
                flexDirection:'column',
                gap:'20px',


                }
            }>
                <Box sx={
                    {
                        height: '580px',
                        width: '100%',
                        backgroundColor: '#fff',
                        borderRadius: '6px',
                        border: "1px solid #EDEDED",
                        display: 'flex',
                        padding: '20px',
                        justifyContent: 'space-between'

                    }
                }>

                    <Box display={'flex'}
                        flexDirection={'column'}
                        gap='20px'>

                        {/* main image  */}
                        <img src={image}
                            alt="main_image"
                            style={
                                {
                                    height: "380px",
                                    width: "380px",
                                    objectFit: 'cover',
                                    borderRadius: '6px',
                                    border: "1px solid #1c1c1c",
                                    cursor: 'pointer'
                                }
                            }/>
                        <Box sx={
                            {
                                display: 'flex',
                                alignItems: 'center',
                                gap: '9px'
                            }
                        }>
                            {
                            productImages.map((item, index) => {
                                return (
                                    <img src={
                                            item.img
                                        }
                                        alt=""
                                        key={index}
                                        style={
                                            {
                                                height: "56px",
                                                width: "56px",
                                                objectFit: 'contain',
                                                borderRadius: '4px',
                                                border: image === item.img ? "1px solid #1c1c1c" : "1px solid #EDEDED",
                                                cursor: 'pointer',
                                                '&:hover': {
                                                    border: "1px solid #1c1c1c",
                                                    // transition: 'all 0.3s ease-in-out'
                                                }

                                            }
                                        }
                                        onClick={
                                            () => setImage(item.img)
                                        }/>


                                )
                            })
                        } </Box>

                    </Box>
                    <Details/>
                    <Box sx={
                        {
                            width:"30%",
                            display:'flex',
                            flexDirection:'column',
                            justifyContent:'space-between'

                        }
                    }>
                        <Box
                        sx={{
                            padding: '20px 16px',
                            backgroundColor: '#fff',
                            borderRadius: '6px',
                            border: '1px solid #EDEDED',

                            height:'auto'

                        }}>
                        <Typography fontSize={'16px'}
                            fontWeight={'bold'}
                            marginBottom={'12px'}>
                            You may like
                        </Typography>
                        <Box sx={
                            {
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '20px'

                            }
                        }>

                            {
                            productDetails.slice(0, 3).map((item, index) => {
                                return (
                                    <LikedProduct title={
                                            item.title
                                        }
                                        price={
                                            item.price
                                        }
                                        url={item.url}
                                        key={index}/>
                                );
                            })
                        }</Box>

                        {/* add button of order now  */}
                        </Box>
                        <Box  display={'flex'} alignItem='center' justifyContent={'space-between'} width={'100%'}>
                            <Button  sx={{
                                      display:'flex',
                                      justifyContent:'center',
                                      alignItems:'center',
                                      backgroundColor:'#2C7CF1',
                                      gap:"10px",
                                      color:'#fff',
                                      borderRadius:'6px',
                                      padding:'10px 20px',
                                      border: "1px solid #2C7CF1",
                                      width:'45%',
                                      textTransform:'none',
                                      '&:hover': {
                                        backgroundColor: '#fff',
                                        color: '#2C7CF1',
                                        border: "1px solid #2C7CF1",
                                        transition: 'all 0.3s ease-in-out'
                                        
                                        
                                  },
                                 }}> buy now</Button> 
                            <Button  sx={{
                                width:'45%',
                                textTransform:'none',
                                      display:'flex',
                                      justifyContent:'center',
                                      alignItems:'center',
                                      backgroundColor:'#fff',
                                      gap:"10px",
                                      color:'#2C7CF1',
                                      borderRadius:'6px',
                                      padding:'10px 20px',
                                      border: "1px solid #2C7CF1",
                                      '&:hover': {
                                        backgroundColor: '#2C7CF1',
                                        color: '#fff',
                                        border: "1px solid #fff",
                                        transition: 'all 0.3s ease-in-out'
                                        
                                        
                                  },
                                 }}> add to cart </Button> 

                        </Box>


                    </Box>
                </Box>

                <Box sx={{
                    display:'flex',
                    flexDirection:'column',
                    gap:'20px',
                    width: '100%',
                    backgroundColor: '#fff',
                    borderRadius: '6px',
                    border: "1px solid #EDEDED",
                    height:'360px',
                    padding:"20px 16px"
                }}>
                    <Typography fontSize={'20px'} fontWeight={'600'}>Related products  </Typography>

                    <Box display={'flex'} alignItems={'center'} gap={'20px'} overflow={'scroll'} 
                  > 


                    {
                        productDetails.map((item,index)=>{
                            return(
                                <RelatedPost url={item.url} title={item.title} price={item.price} key={index}/>
                                )
                            })
                        }
                        </Box>
                </Box>

            </Box>


            <Footer/>
        </Box>
    )
}

export default ProductPage
