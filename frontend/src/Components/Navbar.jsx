// import React from 'react'
import {Box, Typography} from '@mui/material'
// import {FiSearch} from "react-icons/fi";
// import {FaShoppingBasket} from "react-icons/fa";
// import {FaRegUserCircle} from "react-icons/fa";
import MegaMart from '../assets/SVGs/Brand.svg'
import logo from '../assets/SVGs/logo-symbol.svg'
// import {HiOutlineMenuAlt2} from "react-icons/hi";
import {IoSearchSharp} from "react-icons/io5";
import {FaShoppingCart, FaUser} from "react-icons/fa";
import {LuShoppingCart} from "react-icons/lu";

function Navbar() {
    return (
        <div style={
            {
                padding: '20px 120px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderBottom: '1px solid #EDEDED'

            }
        }>
            <Box sx={
                {
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px'

                }
            }>

                <Box sx={
                    {
                        display: 'flex',
                        alignItems: 'center',
                        gap: '15px'
                    }
                }>

                    <img src={logo}
                        alt=""/>

                    <img src={MegaMart}
                        alt=""/>
                </Box>
            </Box>

            <Box sx={
                {
                    padding: '15px',
                    height: '48px',
                    backgroundColor: '#F3F9FB',
                    borderRadius: '10px',
                    width: '40%',
                    display: 'flex',
                    alignItems: 'center',
                    border: '2px solid #0D6EFD',
                    overflow:'hidden'
                }
            }>
                <IoSearchSharp size={30}
                    color='#0D6EFD'/>
                <input type="text" placeholder='Search for products, brands and more'
                    style={
                        {
                            height: '48px',
                            width: '100%',
                            border: 'none',
                            fontSize: '18px',
                            color: '#666666',
                            backgroundColor: '#F3F9FB',
                            paddingLeft: '15px',
                            outline: 'none'


                        }
                    }/>

            </Box>

            <Box sx={
                {
                    display: 'flex',
                    alignItems: 'center',
                    gap: '18px',
                    color: '#666666'
                }
            }>
                <Box sx={
                    {
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'column',
                        gap: '4px',
                        borderRadius: '10px',
                        padding: '7px',
                        border: '1px solid #ffffff',
                        cursor:'    pointer'
                        // ':hover': {
                        //     border: '1px solid #0D6EFD'
                        // }
                    }
                }>

                    <FaUser size={20}
                        color='#8B96A5'/>
                    <Typography fontSize={12}
                        fontWeight={400}
                        color={'#8B96A5'}>Profile</Typography>
                </Box>
                <Box sx={
                    {
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'column',
                        gap: '4px',
                        cursor:'pointer'
                    }
                }>
                    <FaShoppingCart size={20}
                        color='#8B96A5'/>

                    <Typography fontSize={12}
                        fontWeight={400}
                        color={'#8B96A5'}>
                        Cart</Typography>
                </Box>


            </Box>

        </div>
    )
}

export default Navbar
