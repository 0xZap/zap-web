import React, { useEffect, useState } from 'react';
import { useTheme, useMediaQuery, AppBar, Toolbar, IconButton, Typography, Container, Box, Button, Menu, MenuItem, Link as MUILink } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../../assets/logo-appname.svg';
import { useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const theme = useTheme();
  const location = useLocation();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [activeSection, setActiveSection] = useState<string>('home');

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuItems = React.useMemo(() => [
    { label: 'Home', id: 'home', path: '/#home' },
    { label: 'Team', id: 'team', path: '/#team' },
  ], []);

  useEffect(() => {
    // Set active section based on current route
    if (location.pathname === '/') {
      // On homepage, handle scroll
      const handleScroll = () => {
        const scrollPosition = window.scrollY + parseInt(theme.spacing(10), 10);

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
    } else {
      // On other pages, set active section based on pathname
      const currentPath = location.pathname.substring(1); // Remove leading slash
      setActiveSection(currentPath || 'home');
    }
  }, [location.pathname, menuItems, theme]);

  return (
    <AppBar
      position="fixed"
      color="transparent"
      elevation={0}
      sx={{
        backgroundColor: 'rgba(0, 0, 0, 0)',
        zIndex: theme.zIndex.drawer + 1,
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: theme.spacing(2, 0),
          }}
        >
          {/* Logo */}
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

          {/* Center Menu */}
          {!isMobile && (
            <Box
              sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                backdropFilter: 'blur(20px)',
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
                  href={item.path}
                  underline="none"
                  sx={{
                    color: activeSection === item.id ? `${theme.palette.primary.main}` : '#ffffff',
                    textTransform: 'capitalize',
                    fontWeight: activeSection === item.id ? 'bold' : 'normal',
                    '&:hover': {
                      color: activeSection === item.id ? `${theme.palette.primary.main}` : '#a0aec0',
                    },
                    padding: '5px 5px',
                  }}
                >
                  {item.label}
                </MUILink>
              ))}
            </Box>
          )}

          {/* Right Button */}
          {!isMobile && (
            <Button
              href="/projects"
              variant="contained"
              sx={{
                opacity: 0.8,
                borderRadius: "20px",
                backgroundColor: "#0a365e",
                padding: "8px 30px",
                fontSize: "16px",
                textTransform: "none",
                marginTop: "20px",
                '&:hover': {
                  backgroundColor: "#0a365e",
                  cursor: "pointer",
                  transform: "scale(1.05)",
                },
              }}
            >
              Browse Projects
            </Button>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
