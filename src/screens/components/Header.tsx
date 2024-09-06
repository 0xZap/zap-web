import React from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  Container,
  Box,
  IconButton,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../assets/logo-appname.svg";

const Header: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuItems = ["Home", "How it works", "Product", "Blogs", "Use Cases"];

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
            padding: theme.spacing(2, 0),
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {isMobile && (
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleMenuOpen}
                sx={{ mr: 2, color: "white" }}
              >
                <MenuIcon />
              </IconButton>
            )}
            <Typography component="div">
              <img
                src={logo}
                alt="Logo"
                style={{ marginTop: "8px", height: "44px" }}
              />
            </Typography>
          </Box>

          {isMobile ? (
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              sx={{
                "& .MuiPaper-root": {
                  backgroundColor: "rgba(10, 25, 41, 0.95)",
                  borderRadius: "10px",
                  borderWidth: "0.8px",
                  borderColor: "rgba(255, 255, 255, 0.2)",
                  borderStyle: "solid",
                  minWidth: "200px",
                },
              }}
            >
              {menuItems.map((item) => (
                <MenuItem
                  key={item}
                  onClick={handleMenuClose}
                  sx={{
                    color: "white",
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 0.08)",
                    },
                  }}
                >
                  {item}
                </MenuItem>
              ))}
            </Menu>
          ) : (
            <Box
              sx={{
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                padding: "5px 20px",
                borderRadius: "30px",
                borderWidth: "0.8px",
                borderColor: "gray",
                borderStyle: "solid",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 2,
              }}
            >
              {menuItems.map((item) => (
                <Button key={item} sx={{ color: "white" }}>
                  {item}
                </Button>
              ))}
            </Box>
          )}

          <Button
            variant="contained"
            sx={{
              opacity: 0.8,
              borderRadius: "20px",
              backgroundColor: "#090953",
              padding: "8px 30px",
              fontSize: "16px",
              textTransform: "none",
              display: { xs: "none", sm: "block" },
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
