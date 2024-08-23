import React, {useState} from 'react'
import {Box, Typography} from '@mui/material';
import {
    FaCheck,
    FaMinus,
    FaPlus,
    FaPlusMinus,
    FaX
} from "react-icons/fa6";
import StarRating from '../StarRating';
import {BiCommentDetail} from "react-icons/bi";
import {GoDotFill} from "react-icons/go";
import {MdOutlineShoppingBasket} from "react-icons/md";

function Details() {

    const [isAvilable, setIsAvilable] = useState(true)
    const [color, setColor] = useState(null)
    const [size, setSize] = useState(null)
    const [count, setCount] = useState(1)



    return (
        <Box display={'flex'}
            flexDirection={'column'}
            gap={'5px'}
            width={'31%'}>

            {
            isAvilable ? (
                <Box display={'flex'}
                    alignItems={'center'}
                    gap={'2px'}>
                    <FaCheck size={20}
                        color='#00B517'/>


                    <Typography fontSize={'16px'}
                        fontWeight={'400'}
                        color={'#00B517'}>
                        In stock
                    </Typography>


                </Box>
            ) : (
                <Box display={'flex'}
                    alignItems={'center'}
                    gap={'2px'}>
                    <FaX size={20}
                        color='#FF0000'/>


                    <Typography fontSize={'16px'}
                        fontWeight={'400'}
                        color={'#FF0000'}>
                        Out of stock
                    </Typography>


                </Box>
            )
        }

            <Typography fontSize={'20px'}
                fontWeight={'600'}
                color={'#1C1C1C'}
                width={'100%'}>
                Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle
            </Typography>

            <Box display={'flex'}>
                {/* rating */}
                <Box display={'flex'}
                    alignItems={'center'}
                    gap={'10px'}>
                    <Box display={'flex'}
                        alignItems={'center'}
                        gap={'5px'}>

                        <StarRating totalStars={4}/>
                        <Typography fontSize={'16px'}
                            fontWeight={'400'}
                            color={'#FFC700'}>
                            9.2
                        </Typography>
                    </Box>

                    <GoDotFill color='#8B96A5'/>
                    <Box display={'flex'}
                        alignItems={'center'}
                        gap={'5px'}>

                        <BiCommentDetail color='#8B96A5'/>
                        <Typography fontSize={'16px'}
                            fontWeight={'400'}
                            color={'#8B96A5'}>
                            12 reviews
                        </Typography>
                    </Box>
                    <GoDotFill color='#8B96A5'/>
                    <Box display={'flex'}
                        alignItems={'center'}
                        gap='5px'>
                        <MdOutlineShoppingBasket color='#8B96A5'/>
                        <Typography fontSize={'16px'}
                            fontWeight={'400'}
                            color={'#8B96A5'}>
                            Sold
                        </Typography>

                    </Box>
                </Box>
            </Box>

            {/* pricing */}
            <Box display={'flex'}
                alignItems={'center'}
                gap='5px'
                marginTop={'15px'}>
                {/* new price */}
                <Typography fontSize={'20px'}
                    fontWeight={'600'}
                    color={'#1C1C1C'}>
                    12.00 DA
                </Typography>
                {/* old price */}
                <Typography fontSize={'16px'}
                    fontWeight={'400'}
                    color={'#8B96A5'}
                    sx={
                        {textDecoration: 'line-through'}
                }>
                    20.00 DA
                </Typography>
                {/* promo */}
                <Typography fontSize={'16px'}
                    fontWeight={'400'}
                    color={'#FF0000'}
                    marginLeft={'10px'}>
                    40% off
                </Typography>
            </Box>

            <Box display={'flex'}
                flexDirection={'column'}
                gap='16px'>
                <Box display={'flex'}
                    alignItems={'flex-start'}
                    borderBottom={'1px solid #ededed'}
                    paddingBottom={'15px'}>
                    <Typography fontSize={'16px'}
                        fontWeight={'400'}
                        width='200px'
                        color={'#8B96A5'}>
                        Price:
                    </Typography>
                    <Typography fontSize={'16px'}
                        fontWeight={'400'}
                        color={'#505050'}>
                        Negotiable
                    </Typography>

                </Box>
                <Box display={'flex'}
                    alignItems={'flex-start'}>
                    <Typography fontSize={'16px'}
                        fontWeight={'400'}
                        width='200px'
                        color={'#8B96A5'}>
                        Type:
                    </Typography>
                    <Typography fontSize={'16px'}
                        fontWeight={'400'}
                        color={'#505050'}>
                        Classic  shoes
                    </Typography>

                </Box>
                <Box display={'flex'}
                    alignItems={'flex-start'}>
                    <Typography fontSize={'16px'}
                        fontWeight={'400'}
                        width='200px'
                        color={'#8B96A5'}>
                        Material:
                    </Typography>
                    <Typography fontSize={'16px'}
                        fontWeight={'400'}
                        color={'#505050'}>
                        Plastic material
                    </Typography>

                </Box>
                <Box display={'flex'}
                    alignItems={'flex-start'}
                    borderBottom={'1px solid #ededed'}
                    paddingBottom={'15px'}>
                    <Typography fontSize={'16ps'}
                        fontWeight={'400'}
                        width='200px'
                        color={'#8B96A5'}>
                        Design:
                    </Typography>
                    <Typography fontSize={'16ps'}
                        fontWeight={'400'}
                        color={'#505050'}>
                        Modern nice
                    </Typography>

                </Box>
                <Box display={'flex'}
                    alignItems={'flex-start'}>
                    <Typography fontSize={'16ps'}
                        fontWeight={'400'}
                        width='200px'
                        color={'#8B96A5'}>
                        Customization:
                    </Typography>
                    <Typography fontSize={'16ps'}
                        fontWeight={'400'}
                        color={'#505050'}>
                        Customized logo and design custom packages
                    </Typography>

                </Box>
                <Box display={'flex'}
                    alignItems={'flex-start'}>
                    <Typography fontSize={'16ps'}
                        fontWeight={'400'}
                        width='200px'
                        color={'#8B96A5'}>
                        Protection:
                    </Typography>
                    <Typography fontSize={'16ps'}
                        fontWeight={'400'}
                        color={'#505050'}>
                        Refund Policy
                    </Typography>

                </Box>
                <Box display={'flex'}
                    alignItems={'flex-start'}
                    borderBottom={'1px solid #ededed'}
                    paddingBottom={'15px'}>
                    <Typography fontSize={'16ps'}
                        fontWeight={'400'}
                        width='200px'
                        color={'#8B96A5'}>
                        Warranty:
                    </Typography>
                    <Typography fontSize={'16px'}
                        fontWeight={'400'}
                        color={'#505050'}>
                        2 years full warranty
                    </Typography>

                </Box>


            </Box>

        </Box>
    )
}

export default Details
