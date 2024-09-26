import React, { useEffect, useState } from 'react';
import { useTheme, useMediaQuery, AppBar, Toolbar, IconButton, Typography, Container, Box, Button, Menu, MenuItem, Link as MUILink } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../../assets/logo-appname.svg';

const Header: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [activeSection, setActiveSection] = useState<string>('home');

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuItems = React.useMemo(() => [
    { label: 'Home', id: 'home' },
    { label: 'How it Works', id: 'how-it-works' },
    { label: 'Product', id: 'product' },
    // { label: 'Blogs', id: 'blogs' },
    { label: 'Use Cases', id: 'use-cases' },
    { label: 'Team', id: 'team' },
  ], []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + parseInt(theme.spacing(10), 10); // Adjust based on header height

      menuItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(item.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [menuItems, theme]);

  return (
    <AppBar
      position="fixed"
      color="transparent"
      elevation={0}
      sx={{
        backgroundColor: 'rgba(0, 0, 0, 0)',
        // backdropFilter: 'blur(10px)',
        zIndex: theme.zIndex.drawer + 1,
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: theme.spacing(2, 0),
          }}
        >
          {/* Logo and Mobile Menu Icon */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {isMobile && (
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleMenuOpen}
                sx={{ mr: 2, color: 'white' }}
              >
                <MenuIcon />
              </IconButton>
            )}
            <Typography component="div">
              <img
                src={logo}
                alt="Logo"
                style={{ marginTop: '8px', height: '44px' }}
              />
            </Typography>
          </Box>

          {/* Menu Items */}
          {isMobile ? (
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              sx={{
                '& .MuiPaper-root': {
                  backgroundColor: 'rgba(10, 25, 41, 0.95)',
                  borderRadius: '10px',
                  borderWidth: '0.8px',
                  borderColor: 'rgba(255, 255, 255, 0.2)',
                  borderStyle: 'solid',
                  minWidth: '200px',
                },
              }}
            >
              {menuItems.map((item) => (
                <MenuItem
                  key={item.id}
                  onClick={handleMenuClose}
                  sx={{
                    color: 'white',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    },
                  }}
                >
                  <MUILink
                    href={`#${item.id}`}
                    underline="none"
                    color="inherit"
                    sx={{ width: '100%' }}
                  >
                    {item.label}
                  </MUILink>
                </MenuItem>
              ))}
            </Menu>
          ) : (
            <Box
              sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                backdropFilter: 'blur(10px)',
                padding: '10px 40px',
                borderRadius: '30px',
                borderWidth: '0.6px',
                borderColor: `${theme.palette.primary.main}`,
                borderStyle: 'solid',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 2,
              }}
            >
              {menuItems.map((item) => (
                <MUILink
                  key={item.id}
                  href={`#${item.id}`}
                  underline="none"
                  sx={{
                    color: activeSection === item.id ? `${theme.palette.primary.main}` : '#ffffff', // Highlight active section
                    textTransform: 'capitalize',
                    fontWeight: activeSection === item.id ? 'bold' : 'normal',
                    '&:hover': {
                      color: '#ffffff',
                    },
                    padding: '5px 5px',
                  }}
                >
                  {item.label}
                </MUILink>
              ))}
            </Box>
          )}

          {/* "Coming Soon" Button */}
          <Button
            variant="contained"
            sx={{
              opacity: 0.8,
              borderRadius: '20px',
              backgroundColor: '#090953',
              padding: '8px 30px',
              borderWidth: '0.6px',
              borderColor: `${theme.palette.primary.main}`,
              borderStyle: 'solid',
              fontSize: '16px',
              textTransform: 'none',
              transition: 'transform 0.7s, box-shadow 0.3s',
              display: { xs: 'none', sm: 'block' },
              '&:hover': {
                backgroundColor: '#090953',
                cursor: 'pointer',
                transform: 'scale(1.05)', 
                boxShadow: theme.shadows[1], 
              },
            }}
          >
            Coming Soon
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
