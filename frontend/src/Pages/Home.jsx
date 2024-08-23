// import React from 'react'

import Ads from "../Components/Ads/Ads";
import Category from "../Components/Category"
import DealSection from "../Components/Deals/DealSection";
// import HeroSection from "../Components/HeroSection"
import Navbar from "../Components/Navbar"
import { Box } from '@mui/material';
import ProductsSection from "../Components/Product/ProductsSection";
import homeProduct  from '../assets/Images/homeProduct.png'
import MobileAccess  from '../assets/Images/MobileAccess.png'
import Request from "../Components/requestSection/Request";
import Recommand from "../Components/Recomanded/Recommand";
import Subscribe from "../Components/Subscribe";
import Footer from "../Components/Footer";
import Login from "./Login";


function Home() {
  return (
    <div >
        <Navbar/>
        <Category/>
        <Box sx={{
          padding:'10px 120px',
          backgroundColor:'#F3F9FB',
          height:"100%",
          display:'flex',
          justifyContent:'center',
          alignItems:'center',
          gap:'20px',
          flexDirection:'column'
        }}>
          <Ads/>
          {/* <DealSection/>
        <ProductsSection title={'Home and outdoor'} url={homeProduct} typePass={'home'}/>
        <ProductsSection title={'Consumer electronics and gadgets'} url={MobileAccess}  typePass={'mobile'}/>
        <Request/> */}
        <Recommand/>



        </Box>
        <Subscribe/>
        <Footer/>
        {/* <HeroSection/> */}
    </div>
  )
}

export default Home