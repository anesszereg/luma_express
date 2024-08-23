import React from 'react'
import { Box, Typography, Button ,Input ,InputAdornment } from '@mui/material';
import { FiMail } from "react-icons/fi";





function Subscribe() {
    return (
        <Box sx={
            {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                height: '190px',
                width: '100%',
                backgroundColor: '#EFF2F4'
            }
        }>
            <Typography fontSize={'20px'} fontWeight={'600'}>Subscribe on our newsletter</Typography>
            <Typography fontSize={'14px'} fontWeight={'300'} color='#606060'>Get daily news on upcoming offers from many suppliers all over the world</Typography>

        <Box sx={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            gap:'10px',
            marginTop:'20px'
        }}>

            <input type="text" placeholder='write your email' style={{
                height:'40px',
                width:"275px",
paddingLeft:"10px",
                borderRadius:'6px',
                backgroundColor:'#fff',
                border:'1px solid #EDEDED',
                outline:"none"


            }} />
             {/* <Input
                    type="text"
                    placeholder='Write your email'
                    startAdornment={
                        <InputAdornment position="start">
<FiMail />
                        </InputAdornment>
                    }
                    style={{
                        height: '40px',
                        width: "100%",
                        padding: "5px",
                        borderRadius: '6px',
                        backgroundColor: '#fff',
                        border: '1px solid #EDEDED',
                        outline: "none"
                    }}
                /> */}

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
                width:'110px'

            }}>
            Subscribe
            </Button>
        </Box>
        </Box>
    )
}

export default Subscribe
