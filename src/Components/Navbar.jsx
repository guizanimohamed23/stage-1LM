import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const menuItems = [
  { name: "Accueil", path: '/' },
  { name: "Notre Mission", path: '/mission' },
  { name: "Accès à l'information", path: '/information' },
  { name: "Publication", path: '/publication' },
  { name: "Actualités", path: '/actualite' },
  { name: "La Presse", path: '/presse' },
];

const Navbar = () => {
  const [activeButton, setActiveButton] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const [isSticky, setIsSticky] = useState(false);

  const handleClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const stickyThreshold = 100; // Adjust this value based on when you want the AppBar to stick

    if (scrollTop > stickyThreshold) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <AppBar
      position={isSticky ? 'fixed' : 'absolute'}
      sx={{
        left: 0,
        right: 0,
        transition: 'top 0.3s',
        width: '100%',
        bgcolor: 'white',
        zIndex: 1100,
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: {xs:'none',sm:'none',md:'flex'}, alignItems: "center", gap: 2 }}>
          <img
            src="/red logo.png"
            alt="Logo"
            style={{ width: 30, height: 30 }}
          />
        </Box>
        <Box
          sx={{
            display: { xs: 'none', md: 'flex' },
            gap: 2,
          }}
        >
          {menuItems.map((item) => (
            <Button
              key={item.path}
              onClick={() => handleClick(item.name)}
              sx={{
                color: activeButton === item.name ? "white" : "#1A4870",
                border: activeButton === item.name ? "2px #5B99C2" : "none",
                backgroundColor:
                  activeButton === item.name ? "#5B99C2" : "transparent",
                transition: "all 0.3s ease",
                padding: "8px 16px",
                borderRadius: "30px",
              }}
              aria-current={activeButton === item.name ? "page" : undefined}
            >
              <Link to={item.path} style={{ textDecoration: 'none', color: 'inherit' }}>
                {item.name}
              </Link>
            </Button>
          ))}
        </Box>
        <Box
          sx={{
            display: { xs: 'flex', md: 'none' },
          }}
        >
          
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={handleMenuOpen}
          >
            <MenuIcon sx={{ color: 'black' }} />
          </IconButton>
          <Box sx={{ alignItems: "center", gap: 2,position:'absolute',left:'45%',top:'25%'}}>
          <img
            src="/red logo.png"
            alt="Logo"
            style={{ width: 30, height: 30 }}
          />
          </Box>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            {menuItems.map((item) => (
              <MenuItem key={item.path} onClick={() => handleClick(item.name)}>
                <Link to={item.path} style={{ textDecoration: 'none', color: 'inherit' }}>
                  {item.name}
                </Link>
              </MenuItem>
            ))}
          </Menu>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <img
            src="/logo france.png"
            alt="French Flag"
            style={{ width: 30, height: 30 }}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
