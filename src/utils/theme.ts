// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#006FFF', // Your specified primary color
        100: '#f7fafc', // Lightest grey
        200: '#edf2f7', // Light grey
        300: '#e2e8f0', // Grey
        400: '#cbd5e0', // Dark grey
        500: '#a0aec0', // Darker grey
        600: '#718096', // Dark grey
        700: '#4a5568', // Dark grey
        800: '#2d3748', // Dark grey
        900: '#1a202c', // Darkest Grey
        dark: '#002478', // Black
    },
    secondary: {
      main: '#3388FF', // Your specified secondary color
    },
    info: {
      main: '#3388FF', // Your specified info color
    },
    background: {
      paper: '#ffffff', // Keeps the default paper background
    },
  },
  shape: {
    borderRadius: 3, // Example border radius
  },
  spacing: 8, // Default spacing unit (theme.spacing(1) = 8px)
  breakpoints: {
    values: {
      xs: 0, // mobile phones
      sm: 600, // tablets
      md: 960, // small laptops
      lg: 1280, // desktops
      xl: 1920, // large screens
    },
  },
  shadows: [
    'none', // 0
    '0px 0px 20px rgba(51, 136, 255, 0.6)', // 1
    '0px 4px 8px rgba(0, 0, 0, 0.1)', // 2
    '0px 8px 16px rgba(0, 0, 0, 0.1)', // 3
    '0px 16px 24px rgba(0, 0, 0, 0.1)', // 4
    '0px 24px 32px rgba(0, 0, 0, 0.1)', // 5
    '0px 32px 40px rgba(0, 0, 0, 0.1)', // 6
    '0px 40px 48px rgba(0, 0, 0, 0.1)', // 7
    '0px 48px 56px rgba(0, 0, 0, 0.1)', // 8
    '0px 56px 64px rgba(0, 0, 0, 0.1)', // 9
    '0px 64px 72px rgba(0, 0, 0, 0.1)', // 10
    '0px 72px 80px rgba(0, 0, 0, 0.1)', // 11
    '0px 80px 88px rgba(0, 0, 0, 0.1)', // 12
    '0px 88px 96px rgba(0, 0, 0, 0.1)', // 13
    '0px 96px 104px rgba(0, 0, 0, 0.1)', // 14
    '0px 104px 112px rgba(0, 0, 0, 0.1)', // 15
    '0px 112px 120px rgba(0, 0, 0, 0.1)', // 16
    '0px 120px 128px rgba(0, 0, 0, 0.1)', // 17
    '0px 128px 136px rgba(0, 0, 0, 0.1)', // 18
    '0px 136px 144px rgba(0, 0, 0, 0.1)', // 19
    '0px 144px 152px rgba(0, 0, 0, 0.1)', // 20
    '0px 152px 160px rgba(0, 0, 0, 0.1)', // 21
    '0px 160px 168px rgba(0, 0, 0, 0.1)', // 22
    '0px 168px 176px rgba(0, 0, 0, 0.1)', // 23
    '0px 176px 184px rgba(0, 0, 0, 0.1)', // 24
  ],
});

export default theme;
