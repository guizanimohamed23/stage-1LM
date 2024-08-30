import React, { useState } from "react";
import { AppBar, Toolbar, Button, Box } from "@mui/material";

const Navbar = () => {
  const [activeButton, setActiveButton] = useState("");

  const handleClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#F5F5F5", boxShadow: "none" }}
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
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            onClick={() => handleClick("Accueil")}
            sx={{
              color: activeButton === "Accueil" ? "white" : "#1A4870",
              border: activeButton === "Accueil" ? "2px #5B99C2" : "none",
              backgroundColor:
                activeButton === "Accueil" ? "#5B99C2" : "transparent",
              transition: "all 0.3s ease",
              padding: "8px 16px",
              borderRadius: "30px",
            }}
          >
            Accueil
          </Button>
          <Button
            onClick={() => handleClick("Notre Mission")}
            sx={{
              color: activeButton === "Notre Mission" ? "white" : "#1A4870",
              border: activeButton === "Notre Mission" ? "2px #5B99C2" : "none",
              backgroundColor:
                activeButton === "Notre Mission" ? "#5B99C2" : "transparent",
              transition: "all 0.3s ease",
              padding: "8px 16px",
              borderRadius: "30px",
            }}
          >
            Notre Mission
          </Button>
          <Button
            onClick={() => handleClick("Accès à l'information")}
            sx={{
              color:
                activeButton === "Accès à l'information" ? "white" : "#1A4870",
              border:
                activeButton === "Accès à l'information"
                  ? "2px #5B99C2"
                  : "none",
              backgroundColor:
                activeButton === "Accès à l'information"
                  ? "#5B99C2"
                  : "transparent",
              transition: "all 0.3s ease",
              padding: "8px 16px",
              borderRadius: "30px",
            }}
          >
            Accès à l'information
          </Button>
          <Button
            onClick={() => handleClick("Publication")}
            sx={{
              color: activeButton === "Publication" ? "white" : "#1A4870",
              border: activeButton === "Publication" ? "2px #5B99C2" : "none",
              backgroundColor:
                activeButton === "Publication" ? "#5B99C2" : "transparent",
              transition: "all 0.3s ease",
              padding: "8px 16px",
              borderRadius: "30px",
            }}
          >
            Publication
          </Button>
          <Button
            onClick={() => handleClick("Actualités")}
            sx={{
              color: activeButton === "Actualités" ? "white" : "#1A4870",
              border: activeButton === "Actualités" ? "2px #5B99C2" : "none",
              backgroundColor:
                activeButton === "Actualités" ? "#5B99C2" : "transparent",
              transition: "all 0.3s ease",
              padding: "8px 16px",
              borderRadius: "30px",
            }}
          >
            Actualités
          </Button>
          <Button
            onClick={() => handleClick("La Presse")}
            sx={{
              color: activeButton === "La Presse" ? "white" : "#1A4870",
              border: activeButton === "La Presse" ? "2px #5B99C2" : "none",
              backgroundColor:
                activeButton === "La Presse" ? "#5B99C2" : "transparent",
              transition: "all 0.3s ease",
              padding: "8px 16px",
              borderRadius: "30px",
            }}
          >
            La Presse
          </Button>
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
