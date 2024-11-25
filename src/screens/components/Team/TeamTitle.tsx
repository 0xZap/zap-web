import { Box, Typography, useTheme } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import hugimage from '../../../assets/usecase/use_hug.svg';
import starsimage from '../../../assets/usecase/use_stars.svg';
import Button from '@mui/material/Button';

const TeamTitle = () => {
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
        {/* <Box
            component="img"
            src={hugimage}
            alt="Use Cases"
            sx={{
                height: isSmallScreen ? '30px' : '35px',
                width: 'auto',
                margin: '0 auto 6px', // Margin to create space below the image
            }}
        /> */}

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
            Our Team
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
                paddingBottom: '100px',
                fontFamily: 'Space Grotesk, sans-serif',
                color: '#C2CDE7',
            }}
        >
            We are united by our passion to bring <br></br> the decentralized data concept to the masses.
        </Typography>

        </Box>
    );
};

export default TeamTitle;
