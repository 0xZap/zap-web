import { Box, Typography, useTheme } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import hugimage from '../../../assets/product/product_hug.svg';
import starsimage from '../../../assets/usecase/use_stars.svg';

const ProductTitle = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Box
        sx={{
            position: 'relative', // Set position relative to contain the background image
            textAlign: 'center',
            padding: '20px 20px',
            maxWidth: '1000px',
            margin: '0 auto', // Center content on the page
            zIndex: 1, // Ensure content appears above the background image
        }}
        >
        {/* Background Image Positioned Absolutely */}
        <Box
            component="img"
            src={starsimage}
            alt=""
            sx={{
            position: 'absolute',
            top: '0',
            left: '50%',
            transform: 'translateX(-50%)', // Center the background image
            width: '100%',
            height: 'auto',
            zIndex: -20, // Send background image behind the content
            }}
        />

        {/* Image Above the Title */}
        <Box
            component="img"
            src={hugimage}
            alt="Use Cases"
            sx={{
            width: isSmallScreen ? '80px' : '120px',
            height: 'auto',
            margin: '0 auto 6px', // Margin to create space below the image
            }}
        />

        {/* Title Typography */}
        <Typography
            variant={isSmallScreen ? 'h4' : 'h3'}
            color="white"
            sx={{
            maxWidth: '800px',
            margin: '0 auto',
            textAlign: 'center',
            paddingLeft: '20px',
            paddingRight: '20px',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 900,
            lineHeight: 1,
            }}
        >
            Products
        </Typography>

        {/* Body Typography */}
        <Typography
            variant="body1"
            sx={{
            maxWidth: isSmallScreen ? '90%' : '600px',
            margin: '16px auto 0',
            textAlign: 'center',
            fontSize: isSmallScreen ? '0.9rem' : '1rem',
            lineHeight: 1.5,
            paddingLeft: '20px',
            paddingRight: '20px',
            paddingBottom: '20px',
            fontFamily: 'Space Grotesk, sans-serif',
            color: '#C2CDE7',
            }}
        >
            Our products are designed to help you get the most out of your data
        </Typography>
        </Box>
    );
};

export default ProductTitle;
