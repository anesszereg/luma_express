import React from 'react'
import { Box, Typography, Button } from '@mui/material';
import imageBack from '../../assets/Images/backgroundImage.png'

function Request() {
    return (
    <Box sx={{
        backgroundImage:`url(${imageBack})`,
        height:'420px',
        width:'100%',
        backgroundSize:'cover',
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        display:'flex',
        justifyContent:'space-between',
        alignItems:'start',
        padding:'30px',
        borderRadius:"6px",
        border:'1px solid #EDEDED',
        overflow:'hidden',
        //do gradient background color
        background: `linear-gradient(95deg, #2C7CF1 7.19%, rgba(0, 209, 255, 0.50) 89.49%) ,url(${imageBack})`

    }}>
        <Box sx={{
            display:'flex',
            flexDirection:'column',
            gap:'13px',
            width:"440px"
        }}>
            <Typography fontSize={'32px'} fontWeight={'400'} color='#fff' > An easy way to send requests to all suppliers</Typography>
            <Typography fontSize={'16px'} fontWeight={'200'} color='#fff' > Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</Typography>
        </Box>
        <Box sx={{
            height:'100%',
            width:'350px',
            backgroundColor:'#fff',
            borderRadius:'6px',
            display:'flex',
            flexDirection:'column',
            gap:'18px',
            padding:'20px'


        }}>
            <Typography  fontSize={'20px'} fontWeight={'600'} color='#1c1c1c'>
            Send quote to suppliers
            </Typography>
            <input type="text"
            placeholder='What item you need?'
            style={{
                height:'40px',
                width:'100%',
                borderRadius:'6px',
                border:'1px solid #EDEDED',
                padding:'10px',
                outline:'none'

            }} />
            <textarea name="" id="" cols="30" rows="10" placeholder='Type more details'  style={{

                width:'100%',
                borderRadius:'6px',
                border:'1px solid #EDEDED',
                padding:'10px',
                outline:'none',
                height:'30%'

            }}>
            
            </textarea>
            <Box sx={{
                display:"flex",
                alignItems:'center',
                gap:'10px',
            }}>


            <input type="number"
            placeholder='Quantity'
            style={{
                height:'40px',
                width:'50%',
                borderRadius:'6px',
                border:'1px solid #EDEDED',
                padding:'10px',
                outline:'none'
                
            }} />
            <select name="" id=""  style={{
                height:'40px',
                width:'20%',
                borderRadius:'6px',
                border:'1px solid #EDEDED',
                padding:'10px',
                outline:'none'
                
            }}> 
                <option value="">Pcs</option>
                <option value="">Select Unit</option>
                <option value="">Select Unit</option>
                <option value="">Select Unit</option>
            </select>
            </Box>
            <Button sx={{
                backgroundColor:'#2C7CF1',
                color:'#fff',
                borderRadius:'6px',
                height:'40px',
                padding:'10px',
                border:'1px solid #2C7CF1',
                
                '&:hover':{
                    backgroundColor:'#fff',
                    color:'#2C7CF1',
                    border:'1px solid #2C7CF1',
                    borderRadius:'6px',
                    padding:'10px',
                },
                textTransform:'none',
                width:'40%'

            }} >
            Send Request
            </Button>


        </Box>
    </Box>
    )
}

export default Request
