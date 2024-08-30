import React from "react";
import { Typography, IconButton, Box, Link } from "@mui/material";
import Grid from "@mui/material/Grid2";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import EmailIcon from "@mui/icons-material/Email";

export default function Footer({ style }) {
  return (
    <footer
      style={{
        backgroundColor: "#002b5c",
        color: "#fff",
        padding: "18px 0",
        marginTop: "auto",
        width: "100%",
        ...style,
      }}
    >
      <Grid container spacing={3} alignItems="center">
        <Grid
          item
          size={{ xs: 12, sm: 4, md: 2 }}
          style={{ textAlign: "center" }}
        >
          <Box>
            <img
              src="./src/assets/logowhite.png"
              alt="Logo"
              style={{ marginBottom: "10px", maxWidth: "100px" }}
            />
            <Box display="flex" justifyContent="center" mt={1}>
              <IconButton
                style={{
                  color: "white",
                  marginRight: "10px",
                  fontSize: "1.2rem",
                }}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                style={{
                  color: "white",
                  marginRight: "10px",
                  fontSize: "1.2rem",
                }}
              >
                <YouTubeIcon />
              </IconButton>
              <IconButton style={{ color: "white", fontSize: "1.2rem" }}>
                <EmailIcon />
              </IconButton>
            </Box>
          </Box>
        </Grid>

        <Grid
          item
          size={{ xs: 12, sm: 8, md: 8 }}
          container
          spacing={3}
          style={{ justifyContent: "space-between" }}
        >
          <Grid item size={{ xs: 6, md: 2 }}>
            <Typography
              variant="h6"
              gutterBottom
              style={{
                color: "#EABA2B",
                fontSize: "18px",
                transition: "color 0.3s, transform 0.3s",
              }}
              sx={{
                "&:hover": {
                  color: "#ffeb3b",
                  transform: "scale(1.1)",
                },
              }}
            >
              Accueil
            </Typography>
            <Typography
              style={{
                fontSize: "14px",
                transition: "color 0.3s, transform 0.3s",
              }}
            >
              Qui Somme Nous?
            </Typography>
            <Typography
              style={{
                fontSize: "14px",
                transition: "color 0.3s, transform 0.3s",
              }}
            >
              Chiffres
            </Typography>
          </Grid>
          <Grid item size={{ xs: 6, md: 2 }}>
            <Typography
              variant="h6"
              gutterBottom
              style={{
                color: "#EABA2B",
                fontSize: "18px",
                transition: "color 0.3s, transform 0.3s",
              }}
              sx={{
                "&:hover": {
                  color: "#ffeb3b",
                  transform: "scale(1.1)",
                },
              }}
            >
              Présentation
            </Typography>
            <Typography
              style={{
                fontSize: "14px",
                transition: "color 0.3s, transform 0.3s",
              }}
            >
              Roles
            </Typography>
          </Grid>
          <Grid item size={{ xs: 6, md: 2 }}>
            <Typography
              variant="h6"
              gutterBottom
              style={{
                color: "#EABA2B",
                fontSize: "18px",
                transition: "color 0.3s, transform 0.3s",
              }}
              sx={{
                "&:hover": {
                  color: "#ffeb3b",
                  transform: "scale(1.1)",
                },
              }}
            >
              Accès à l'Information
            </Typography>
            <Typography
              style={{
                fontSize: "14px",
                transition: "color 0.3s, transform 0.3s",
              }}
            >
              Comment Pouvons-Nous Aider?
            </Typography>
            <Typography
              style={{
                fontSize: "14px",
                transition: "color 0.3s, transform 0.3s",
              }}
              sx={{
                "&:hover": {
                  color: "#ffeb3b",
                  transform: "scale(1.1)",
                },
              }}
            >
              Suivi De La Demande
            </Typography>
          </Grid>
          <Grid item size={{ xs: 6, md: 2 }}>
            <Typography
              variant="h6"
              gutterBottom
              style={{
                color: "#EABA2B",
                fontSize: "18px",
                transition: "color 0.3s, transform 0.3s",
              }}
              sx={{
                "&:hover": {
                  color: "#ffeb3b",
                  transform: "scale(1.1)",
                },
              }}
            >
              Publication
            </Typography>
          </Grid>
          <Grid item size={{ xs: 6, md: 2 }}>
            <Typography
              variant="h6"
              gutterBottom
              style={{
                color: "#EABA2B",
                fontSize: "18px",
                transition: "color 0.3s, transform 0.3s",
              }}
              sx={{
                "&:hover": {
                  color: "#ffeb3b",
                  transform: "scale(1.1)",
                },
              }}
            >
              Actualités
            </Typography>
            <Typography
              style={{
                fontSize: "14px",
                transition: "color 0.3s, transform 0.3s",
              }}
            >
              Actualités Du Conseil
            </Typography>
            <Typography
              style={{
                fontSize: "14px",
                transition: "color 0.3s, transform 0.3s",
              }}
            >
              Activités Du Conseil
            </Typography>
          </Grid>
          <Grid item size={{ xs: 6, md: 2 }}>
            <Typography
              variant="h6"
              gutterBottom
              style={{
                color: "#EABA2B",
                fontSize: "18px",
                transition: "color 0.3s, transform 0.3s",
              }}
              sx={{
                "&:hover": {
                  color: "#ffeb3b",
                  transform: "scale(1.1)",
                },
              }}
            >
              La Presse
            </Typography>
            <Typography
              style={{
                fontSize: "14px",
                transition: "color 0.3s, transform 0.3s",
              }}
            >
              A la lune
            </Typography>
            <Typography
              style={{
                fontSize: "14px",
                transition: "color 0.3s, transform 0.3s",
              }}
            >
              Galerie
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        mt={3}
        borderTop="2px solid #ffffff33"
        pt={3}
      >
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          spacing={10}
        >
          <Grid item size={2}>
            <Typography style={{ fontSize: "14px" }}>FAQ</Typography>
          </Grid>
          <Grid item size={2}>
            <Typography style={{ fontSize: "14px", textAlign: "center" }}>
              Recherche
            </Typography>
          </Grid>
          <Grid item size={2}>
            <Typography
              style={{
                fontSize: "14px",
                textAlign: "center",
                whiteSpace: "nowrap",
              }}
            >
              Suivi des dossiers
            </Typography>
          </Grid>
          <Grid item size={2}>
            <Typography
              style={{
                fontSize: "14px",
                textAlign: "center",
                whiteSpace: "nowrap",
              }}
            >
              Liens utiles
            </Typography>
          </Grid>
          <Grid item size={2}>
            <Typography style={{ fontSize: "14px", textAlign: "center" }}>
              Contact
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Box textAlign="right" mt={2} pr={2}>
        <Typography
          variant="body2"
          style={{ fontSize: "18px", marginRight: "20px" }}
        >
          All Rights Reserved &copy; {new Date().getFullYear()}
        </Typography>
      </Box>
    </footer>
  );
}
