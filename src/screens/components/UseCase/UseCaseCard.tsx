import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';

interface UseCaseCardProps {
  image: string;
  text: string;
}

const UseCaseCard: React.FC<UseCaseCardProps> = ({ image, text }) => {
    const theme = useTheme();

    return (
        <Box
        sx={{
            position: 'relative', 
            borderRadius: theme.shape.borderRadius,
            overflow: 'hidden', 
            transition: 'transform 0.3s, box-shadow 0.3s',
            '&:hover': {
              transform: 'scale(1.05)', 
              boxShadow: theme.shadows[1], 
            },
            cursor: 'pointer', 
            backgroundImage: `linear-gradient(to bottom, rgba(0, 111, 255, 0.1), rgba(51, 136, 255, 0.01))`, // Darker gradient towards bottom
            padding: theme.spacing(2), 
            display: 'flex', 
            flexDirection: 'column',
            alignItems: 'center',
            border: `0.05px solid ${theme.palette.primary.dark}`, 
            borderTop: '0px solid transparent',
            '&::before': {
              content: '""', 
              position: 'absolute', 
              top: 0, 
              left: 0, 
              width: '100%',
              height: '2px', 
              background: `linear-gradient(to right, transparent, ${theme.palette.primary.main}, transparent)`, 
              borderTopLeftRadius: theme.shape.borderRadius, 
              borderTopRightRadius: theme.shape.borderRadius, 
            },
          }}
        >
            <Box
                component="img"
                src={image}
                alt={`Illustration for ${text}`}
                sx={{
                    width: '100%',
                    aspectRatio: '1 / 1', // Ensures the image is square
                    objectFit: 'cover',
                    borderRadius: theme.shape.borderRadius / 2, // Slightly rounded image corners
                }}
            />
            <Typography
                variant="h6"
                sx={{
                    paddingTop: theme.spacing(2),
                    background: `linear-gradient(to bottom, #ffffff, #a0aec0)`, // Gradient text
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    textFillColor: 'transparent',
                    fontSize: { xs: '1rem', sm: '1.25rem' }, // Responsive font sizes
                }}
            >
                {text}
            </Typography>
        </Box>
    );
  };

export default UseCaseCard;
  