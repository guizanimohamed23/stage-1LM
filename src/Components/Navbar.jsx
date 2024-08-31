import { useState } from "react";
import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  IconButton,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const menuItems = [
  {name: "Accueil", path:'/'},
  {name: "Notre Mission", path: '/notrenimssion'},
  {name: "Accès à l'information", path:'/accesalinformation'},
  {name: "Publication", path: 'publication'},
  {name: "Actualités", path:'actualite'},
  {name: "La Presse", path: 'lapresse'},
];

const Navbar = () => {
  const [activeButton, setActiveButton] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("lg"));

  const handleClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#F5F5F5", boxShadow: "none",marginBottom:'' }}
    >
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <img
            src="/red logo.png"
            alt="Logo"
            style={{ width: 30, height: 30 }}
          />
        </Box>
        {isXs ? (
          <>
            <IconButton
              edge="end"
              color="#EABA2B"
              aria-label="menu"
              onClick={handleMenuOpen}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              {menuItems.map((item) => (
                <MenuItem key={item} onClick={() => handleClick(item)}>
                  <Link to={item.path} key={item} style={{ textDecoration: 'none' }}>
                  {item.name}
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </>
        ) : (
          <Box
            sx={{
              display: "flex",
              gap: 2,
            }}
          >
            {menuItems.map((item) => (
              <Button
                key={item}
                onClick={() => handleClick(item)}
                sx={{
                  color: activeButton === item ? "white" : "#1A4870",
                  border: activeButton === item ? "2px #5B99C2" : "none",
                  backgroundColor:
                    activeButton === item ? "#5B99C2" : "transparent",
                  transition: "all 0.3s ease",
                  padding: "8px 16px",
                  borderRadius: "30px",
                }}
                aria-current={activeButton === item ? "page" : undefined}
              >
                <Link to={item.path} key={item} style={{ textDecoration: 'none' }}>
                {item.name}
                </Link>
              </Button>
            ))}
          </Box>
        )}
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
