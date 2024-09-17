import { useState, useEffect } from "react";
import { Link,useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import {
  AppBar,
  Toolbar,
  Button,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Tooltip
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LanguageIcon from '@mui/icons-material/Language';



const Navbar = () => {
  const { t } = useTranslation(); 
  const { i18n } = useTranslation();
  const menuItems = [
    { name: t('navbar.home'), path: '/' },
    { name: t('navbar.mission'), path: '/mission' },
    { name: t('navbar.information'), path: '/information' },
    { name: t('navbar.publication'), path: '/publication' },
    { name: t('navbar.news'), path: '/actualite' },
    { name: t('navbar.press'), path: '/presse' }
  ];
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  const [anchorElUser, setAnchorElUser] = useState(null);
  const [activeButton, setActiveButton] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const [isSticky, setIsSticky] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  const handleClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const stickyThreshold = 100; 

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
            src="imgs/red logo.png"
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
          component={Link} // Use Link component for routing
          to={item.path}
          sx={{
            color: currentPath === item.path ? 'white' : '#1A4870',
            border: currentPath === item.path ? '2px solid #5B99C2' : '2px solid transparent',
            backgroundColor: currentPath === item.path ? '#5B99C2' : 'transparent',
            transition: 'all 0.3s ease',
            padding: '8px 16px',
            borderRadius: '30px',
            '&:hover': {
              backgroundColor: currentPath === item.path ? '#5B99C2' : '#e0e0e0', // Change background on hover
              color: currentPath === item.path ? 'white' : '#1A4870', // Change text color on hover
              border: currentPath === item.path ? '2px solid #5B99C2' : '2px solid #e0e0e0', // Change border on hover
            }
          }}
          aria-current={currentPath === item.path ? 'page' : undefined}
        >
          {item.name}
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
            src="imgs/red logo.png"
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
      {/* Tooltip with a button to open the language selection menu */}
        <Tooltip title="Change Language">
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <LanguageIcon sx={{color:'black'}}/>
          </IconButton>
        </Tooltip>

        {/* Menu for language selection */}
        <Menu
          sx={{ mt: '45px' }}
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{ vertical: 'top' }}
          keepMounted
          transformOrigin={{ vertical: 'top' }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          {/* French language option */}
          <MenuItem onClick={() => {changeLanguage('fr'),handleCloseUserMenu()}}>
            <img src="imgs/logo france.png" alt="French" style={{ width: 30, height: 30, marginRight: 8 }} />
            Français
          </MenuItem>

          {/* Arabic language option */}
          <MenuItem onClick={() => {changeLanguage('ar'),handleCloseUserMenu()}}>
            <img src="imgs/tunisia-logo.png" alt="Arabic" style={{ width: 30, height: 30, marginRight: 8 }} />
            العربية
          </MenuItem>
        </Menu>
    </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
