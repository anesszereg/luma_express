import React from 'react'
import {Box, Typography} from '@mui/material';

function RelatedPost({url, title, price}) {
    return (
        <Box sx={
            {
                height: "100%",
                width: "175px",
                display: "flex",
                flexDirection: "column",
                gap: "9px"

            }
        }>
            <Box sx={
                {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '175px',
                    width: '100%',
                    backgroundColor: '#eee',
                    borderRadius: '6px',
                    marginBottom: '4px'
                }
            }>

                <img src={url}
                    alt=""
                    style={
                        {
                            width: '155px',
                            height: '155px',
                            objectFit: 'contain'
                        }
                    }/>
            </Box>
            <Typography fontSize={'16px'}
                fontWeight={'400'}
                height={'38px'}>
                {title}</Typography>
            <Typography fontSize={'16px'}
                fontWeight={'400'}
                color={'#8B96A5'}>
                {price}</Typography>
        </Box>
    )
}

export default RelatedPost
