import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box sx={{ padding: 2, background: 'transparent', color: 'white', textAlign: 'center', marginTop: '40px' }}>
      <Typography variant="body2" align="center">
        &copy; {new Date().getFullYear()} Zap. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
