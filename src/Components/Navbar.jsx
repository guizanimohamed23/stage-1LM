import { useState } from "react";
import { Link } from "react-router-dom";
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
  { name: "Accueil", path: "/" },
  { name: "Notre Mission", path: "/notrenimssion" },
  { name: "Accès à l'information", path: "/information" },
  { name: "Publication", path: "publication" },
  { name: "Actualités", path: "actualite" },
  { name: "La Presse", path: "lapresse" },
];

const Navbar = () => {
  const [activeButton, setActiveButton] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("md"));

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
      sx={{ backgroundColor: "#F5F5F5", boxShadow: "none", marginBottom: "" }}
    >
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {isXs ? (
          <>
            <IconButton
              edge="start"
              color="#EABA2B"
              aria-label="menu"
              onClick={handleMenuOpen}
              sx={{ marginRight: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              {menuItems.map((item) => (
                <MenuItem
                  key={item.name}
                  onClick={() => handleClick(item.name)}
                >
                  <Link
                    to={item.path}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    {item.name}
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </>
        ) : (
          <>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <img
                src="/red logo.png"
                alt="Logo"
                style={{ width: 30, height: 30 }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: 2,
              }}
            >
              {menuItems.map((item) => (
                <Button
                  key={item.name}
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
                  <Link
                    to={item.path}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    {item.name}
                  </Link>
                </Button>
              ))}
            </Box>
          </>
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
