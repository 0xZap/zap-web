// src/components/Footer.tsx
import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer: React.FC = () => {
  return (
    <Box
      sx={{
        padding: '20px 0',
        backgroundColor: 'transparent',
        color: 'white',
        textAlign: 'center',
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: '16px', marginBottom: '12px' }}>
        <IconButton
          href="https://instagram.com"
          target="_blank"
          sx={{ color: 'white' }}
        >
          <InstagramIcon />
        </IconButton>
        <IconButton
          href="https://x.com/0xzaplab"
          target="_blank"
          sx={{ color: 'white' }}
        >
          <TwitterIcon />
        </IconButton>
        <IconButton
          href="https://linkedin.com"
          target="_blank"
          sx={{ color: 'white' }}
        >
          <LinkedInIcon />
        </IconButton>
      </Box>
      <Typography variant="body2" sx={{ color: '#aaa' }}>
        &copy; 2024 Zap. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
