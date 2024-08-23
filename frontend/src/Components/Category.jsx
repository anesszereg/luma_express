import {useState} from 'react';
import {Box, Typography} from '@mui/material';
import {IoMenu} from 'react-icons/io5';

function Category() {
    const [isPressed, setIsPressed] = useState(false);

    const handleCategoryClick = () => { // Toggle the pressed state
        setIsPressed((prevPressed) => !prevPressed);

        // Add any additional logic you want to perform when 'All category' is clicked
    };

    return (
        <div style={
            {
                padding: '16px 120px',
                borderBottom: '1px solid #EDEDED',
                display: 'flex',
                alignItems: "center",
                height: '56px'
            }
        }>
            <Box sx={
                {
                    display: "flex",
                    alignItems: 'center'
                }
            }>
                <Box display={'flex'}
                    gap={'10px'}
                    sx={
                        {
                            cursor: 'pointer',
                            backgroundColor: isPressed ? '#E5F1FF' : '#F3F9FB',
                            padding: '9px',
                            borderRadius: '6px'


                        }
                    }
                    onClick={handleCategoryClick}>
                    <IoMenu size={24}
                        color={
                            isPressed ? '#000' : '#666666'
                        }/>
                    <Typography fontSize={'16px'}
                        fontWeight={'500'}
                        color={
                            isPressed ? '#000' : '#666666'
                    }>
                        All category
                    </Typography>
                </Box>

            </Box>
            <Box></Box>
        </div>
    );
}

export default Category;
