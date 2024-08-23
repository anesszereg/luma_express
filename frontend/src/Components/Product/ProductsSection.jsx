import React from 'react'
import { Box, Typography, Button } from '@mui/material';
import Product from './Product';
import coffee from '../../assets/Images/coffee.png'
import soft from '../../assets/Images/rasm.png'
import dishes from '../../assets/Images/dishes.png'
import sofa from '../../assets/Images/lamp.png'
import cup from '../../assets/Images/cup.png'
import mixer from '../../assets/Images/blander.png'
import plants from '../../assets/Images/plants.png'

import phone from '../../assets/Images/phone.png'
import camera from '../../assets/Images/camera.png'
import casque from '../../assets/Images/casque.png'
import macbook from '../../assets/Images/macbook.png'
import watch from '../../assets/Images/watch.png'





const productsData = [
    {
        title: 'coffee maker',
        price: 4000.00,
        Product_img: coffee,
        type:'home'

    },
    {
        title:'Soft chairs',
        price: 3000.00,
        Product_img: soft,
        type:'home'

    }    
    ,
    {
        title:'Sofa & chair',
        price: 3000.00,
        Product_img: sofa,
        type:'home'
    }
    ,
    {
        title:'Kitchen dishes',
        price: 3000.00,
        Product_img: dishes,
        type:'home'
    }
    ,
    {
        title:' cup',
        price: 3000.00,
        Product_img: cup,
        type:'home'
    }
    ,
    {
        title:'Kitchen mixer',
        price: 3000.00,
        Product_img: mixer,
        type:'home'
    }
    ,
    {
        title:'plants',
        price: 3000.00,
        Product_img: plants,
        type:'home'
    },
    {
        title:'Home appliance',
        price: 3000.00,
        Product_img: coffee,
        type:'home'
     
    },
    {
        title:'Kitchen mixer',
        price: 3000.00,
        Product_img: coffee,
        type:'home'
     
    },
    {
        title:'coffee maker',
        price: 3000.00,
        Product_img: coffee,
        type:'home'
     
    },


    // this data for mobile and accessories

    {
        title: 'Smart watches',
        price: 4000.00,
        Product_img: watch ,
        type:'mobile'

    },
    {
        title:'camera',
        price: 3000.00,
        Product_img: camera,
        type:'mobile',
    },
    {
        title:'macbook',
        price: 10000.00,
        Product_img: macbook,
        type:'mobile',
    },

    {
        title: 'phone',
        price: 4000.00,
        Product_img:phone,
        type:'mobile'

        
    },
    {
        title:'headphone',
        price: 3000.00,
        Product_img: casque,
        type:'mobile',
    },
    {
        title:'smart watch',
        price: 10000.00,
        Product_img: watch,
        type:'mobile',
    },


]
function ProductsSection({title,url ,typePass}) {
    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center',   
            border: '1px solid #d1d1d1',
            height: '260px',
            borderRadius:'6px',
            width:'100%',
            backgroundColor:'#fff',
            overflow:'hidden',
        }}>
            <Box sx={{

                backgroundImage: `url(${url})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                width:"281px ",
                height:"100%",
                objectFit:'cover',
                padding:'20px'
            }}>
                <Box width={'281px'}>

                <Typography fontSize={'20px'} fontWeight={'700'} width={'120px'}>
               {title}
                </Typography>
                
                <Button sx={{
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center',
                    backgroundColor:'#fff',
                    color:'#000',
                    borderRadius:'10px',
                    padding:'10px 20px',
                    border: "1px solid #fff",
                    '&:hover': {
                        backgroundColor: '#fff',
                        color: '#1c1c1c',
                        border: "1px solid #666666",
                        transition: 'all 0.3s ease-in-out'
                        
                        
                    },
                    marginTop:'18px'
                }}>
                    Shop Now
                </Button>
                    </Box>


            </Box>
            <Box sx={{
                display:'flex',
                flexFlow:'row wrap',
        }}>
                {
                    productsData.filter((item)=>item.type===typePass.toLowerCase()).map((item,index)=>{
                        return(
                            <Product key={index} title={item.title} price={item.price} Product_img={item.Product_img}/>
                        )
                    })
                }


            </Box>
        </Box>
    )
}

export default ProductsSection

