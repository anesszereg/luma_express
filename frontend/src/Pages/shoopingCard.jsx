import React from 'react'

function shoopingCard() {
  return (
    <div>shoopingCard</div>
  )
}

export default shoopingCard

   {/* select color , size  */}
                        {/* <Box display={'flex'} alignItems={'center'} gap={'100px'}>

                            <Box display={'flex'}
                                flexDirection={'column'}
                                // alignItems={'center'}
                                gap={'10px'}
                                marginTop={'20px'}>
                                <Typography fontSize={'16px'}
                                    fontWeight={'400'}
                                    color={'#1C1C1C'}>
                                    Color
                                </Typography>
                                <Box display={'flex'}
                                    alignItems={'center'}
                                    gap={'10px'}>
                                    <Box sx={
                                            {
                                                height: '30px',
                                                width: '30px',
                                                backgroundColor: 'black',
                                                borderRadius: '50%',
                                                cursor: 'pointer',
                                                border: color === 'black' ? "1px solid #EDEDED" : "1px solid #1c1c1c",
                                                // add shadow if color is selected
                                                boxShadow: color === 'black' ? '0px 0px 30px 0px rgba(0,0,0,0.45)' : "none"
                                            }
                                        }
                                        onClick={
                                            () => setColor('black')
                                        }/>
                                    <Box sx={
                                            {
                                                height: '30px',
                                                width: '30px',
                                                backgroundColor: 'grey',
                                                borderRadius: '50%',
                                                cursor: 'pointer',
                                                border: color === 'grey' ? "1px solid #1c1c1c" : "1px solid #EDEDED",
                                                boxShadow: color === 'grey' ? '0px 0px 30px 0px rgba(0,0,0,0.45)' : "none"
                                            }
                                        }
                                        onClick={
                                            () => setColor('grey')
                                        }/>
                                    <Box sx={
                                            {
                                                height: '30px',
                                                width: '30px',
                                                backgroundColor: '#FF0000',
                                                borderRadius: '50%',
                                                cursor: 'pointer',
                                                border: color === '#FF0000' ? "1px solid #1c1c1c" : "1px solid #EDEDED",
                                                boxShadow: color === '#FF0000' ? '0px 0px 30px 0px rgba(0,0,0,0.45)' : "none"
                                            }
                                        }
                                        onClick={
                                            () => setColor('#FF0000')
                                        }/>
                                </Box>
                            </Box>

                            size
                            <Box>
                                <Typography fontSize={'16px'}
                                    fontWeight={'400'}
                                    color={'#1C1C1C'}
                                    marginTop={'20px'}>
                                    Size :
                                </Typography>

                                <Box display={'flex'}

                                    alignItems={'center'}
                                    gap={'10px'}
                                    marginTop={'10px'}>
                                    <Box sx={
                                        {
                                            height: '30px',
                                            width: '30px',
                                            //change the background color if size is selected
                                            backgroundColor: size === 'S' ? '#1c1c1c' : '#fff',
                                            borderRadius: '50%',
                                            cursor: 'pointer',
                                            border: "1px solid #EDEDED",
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }
                                    }
                                    onClick={()=>setSize('S')}
                                    >
                                        <Typography fontSize={'16px'}
                                            fontWeight={'400'}
                                            color={size === 'S' ? '#fff' : '#1c1c1c'}>
                                            S
                                        </Typography>
                                    </Box>
                                    <Box sx={
                                        {
                                            height: '30px',
                                            width: '30px',
                                            backgroundColor: size === 'M' ? '#1c1c1c' : '#fff',
                                            borderRadius: '50%',
                                            cursor: 'pointer',
                                            border: "1px solid #EDEDED",
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }
                                    }
                                    onClick={()=>setSize('M')}
                                    >
                                        <Typography fontSize={'16px'}
                                            fontWeight={'400'}
                                            color={size === 'M' ? '#fff' : '#1c1c1c' }>
                                            M
                                        </Typography>
                                        </Box>
                                    <Box sx={
                                        {
                                            height: '30px',
                                            width: '30px',
                                            backgroundColor:  size === 'L' ? '#1c1c1c' : '#fff',
                                            borderRadius: '50%',
                                            cursor: 'pointer',
                                            border: "1px solid #EDEDED",
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }
                                    }
                                    onClick={()=>setSize('L')}
                                    >
                                        <Typography fontSize={'16px'}
                                            fontWeight={'400'}
                                            color={size === 'L' ? '#fff' : '#1c1c1c'}>
                                            L
                                        </Typography>
                                        </Box>

                                    <Box sx={

                                        {
                                            height: '30px',
                                            width: '30px',
                                            backgroundColor:  size === 'XL' ? '#1c1c1c' : '#fff',
                                            borderRadius: '50%',
                                            cursor: 'pointer',
                                            border: "1px solid #EDEDED",
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }
                                    }
                                    onClick={()=>setSize('XL')}
                                    >
                                        <Typography fontSize={'16px'}
                                            fontWeight={'400'}
                                            color={size === 'XL' ? '#fff' : '#1c1c1c'}>
                                            XL
                                        </Typography>
                                        </Box>


                                   
                                </Box>
                            </Box>


                        </Box> */}
                                    {/* orders button 
                            <Box marginTop={'35px'} display={'flex'} alignItems={'center'} height={'100%'} gap={'10px'}> 
                               count order button 
                               <Box sx={{
                                display:'flex',
                                alignItems:'center',
                                justifyContent:"space-between",
                                padding:'12px ',
                                width:'100px',
                                border:'1px solid #EDEDED',
                                borderRadius:'6px',

                               }}>
                                <FaPlus onClick={()=> setCount(count+1)} />
                                {count}
                                <FaMinus onClick={() => setCount(count > 0 ? count - 1 : 0)} />
                                 
                               </Box>
                               <Button>
                                      Add to cart   <MdOutlineShoppingBasket />
                                 </Button>
                               <Button sx={{
                                      display:'flex',
                                      justifyContent:'center',
                                      alignItems:'center',
                                      backgroundColor:'#fff',
                                      color:'#2C7CF1',
                                      borderRadius:'6px',
                                      padding:'10px 20px',
                                      border: "1px solid #2C7CF1",
                             
                                 }}>
                                      Buy Now <MdOutlineShoppingBasket/>
                                 </Button>

                                 
                            

                            </Box> */}
                            {/* description */}
