// src/components/Footer.tsx
import React from 'react';
import { Box, Typography } from '@mui/material';
import styled from 'styled-components';

const FooterContainer = styled(Box)`
  background: #0f2027;
  color: white;
  padding: 20px 0;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <Typography variant="body2" align="center">
        &copy; {new Date().getFullYear()} Zap. All rights reserved.
      </Typography>
    </FooterContainer>
  );
};

export default Footer;
