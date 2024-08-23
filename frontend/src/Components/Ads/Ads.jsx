import {Box, Typography, Button} from '@mui/material';
import Menu from './Menu';
import offer from '../../assets/Images/offer.png'

function Ads() {
    return (
        <div style={
            {
                backgroundColor: '#fff',
                height: '400px',
                borderRadius: '16px',
                width: '100%',
                padding: '20px 14px',
                display: 'flex',
                alignItems: 'center',
                gap: '13px',
                border: '1px solid #EDEDED',
            }
        }>
            <Menu/> {/* section for the offer that contain background image for the product and there title with button to check it   */}

            <Box sx={
                {
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',

                    gap: '10px',
                    position: 'relative',
                    height: '100%',
                    // padding:'20px',
                    borderRadius: '10px',
                    backgroundImage: `url(${offer})`,
                    width: '100%',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    objectFit: 'cover',
                    padding: '55px 45px'
                }
            }>

                <Box sx={

                    {
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        justifyContent: 'center',
                        zIndex: '1'

                    }
                }>

                    <Typography fontSize={'28px'}
                        fontWeight={'400'}
                        color={'#1c1c1c'}
                        marginBottom={'-10px'}>
                        Latest trending
                    </Typography>
                    <Typography fontSize={'32px'}
                        fontWeight={'700'}
                        color={'#1c1c1c'}>
                        Offer Zone
                    </Typography>
                    <Button sx={
                        {
                            backgroundColor: '#fff',
                            color: '#1c1c1c',
                            borderRadius: '6px',
                            padding: '5px 10px',
                            width: '120px',
                            border: '1px solid #fff',
                            textTransform: 'none',
                            '&:hover': {
                                backgroundColor: '#fff',
                                color: '#1c1c1c',
                                border: "1px solid #666666"


                            },
                            marginTop:'10px'
                        }
                    }>
                        Learn more
                    </Button>
                </Box>
            </Box>


        </div>
    )
}

export default Ads
