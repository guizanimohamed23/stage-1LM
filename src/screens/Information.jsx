<<<<<<< Updated upstream
import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
=======
import { useState, useEffect } from "react";
import { Box, Button, TextField, Typography, Divider } from "@mui/material";
>>>>>>> Stashed changes
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Grid from "@mui/material/Grid2";
import cover from "/image 3.png";
import Fade from "@mui/material/Fade";
import DownloadIcon from "@mui/icons-material/Download";

function Information() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <Box sx={{ overflowX: "hidden" }}>
      {/* Navbar Component */}
      <Navbar />

      {/* Main Content */}
      <Fade in={fadeIn} timeout={1000}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            padding: "1rem",
            marginTop: "5rem",
          }}
        >
          <Box
            borderRadius={"1rem"}
            padding={"2rem"}
            width={{ xs: "90%", sm: "80%", md: "70%" }} // Responsive width
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Box
                  sx={{
                    display: "inline-block",
                    padding: "10px",
                    transition: "box-shadow 1s ease",
                    borderRadius: "20px",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "20px",
                      marginBottom: "1.5rem",
                      color: "#1A4870",
                      fontWeight: "bold",
                    }}
                  >
                    LE DROIT D'ACCÈS À L'INFORMATION (DAI) EST UN DROIT
                    FONDAMENTAL DE L'INDIVIDU ET DE LA COLLECTIVITÉ QUI EST
                    ASSURÉ PAR LA :
                  </Typography>

                  <Divider
                    sx={{
                      width: "100%",
                      borderWidth: "2px",
                    }}
                  />
                </Box>

                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Grid
                      container
                      alignItems="center"
                      sx={{ marginBottom: "1rem" }}
                    >
                      <Box display="flex" alignItems="center">
                        <CheckCircleIcon
                          sx={{ color: "#5B99C2", marginRight: "0.5rem" }}
                        />
                        <Typography
                          sx={{
                            color: "#3A3A3A",
                            fontSize: "1.1rem",
                          }}
                        >
                          Décret-loi n°41 du 26 mai 2011, relatif à l’accès aux
                          documents administratifs des organismes publics,
                          modifié et complété par le décret-loi n° 2011-54 du 11
                          juin 2011.
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid
                      container
                      alignItems="center"
                      sx={{ marginBottom: "1rem" }}
                    >
                      <Box display="flex" alignItems="center">
                        <CheckCircleIcon
                          sx={{ color: "#5B99C2", marginRight: "0.5rem" }}
                        />
                        <Typography
                          sx={{
                            color: "#3A3A3A",
                            fontSize: "1.1rem",
                          }}
                        >
                          Loi organique n° 2016-22 du 24 mars 2016, relative au
                          droit d’accès à l’information.
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid container alignItems="center">
                      <Box display="flex" alignItems="center">
                        <CheckCircleIcon
                          sx={{ color: "#5B99C2", marginRight: "0.5rem" }}
                        />
                        <Typography
                          sx={{
                            color: "#3A3A3A",
                            fontSize: "1.1rem",
                          }}
                        >
                          La Constitution du 27 Janvier 2014 Art. 32 : L’État
                          garantit le droit à l’information et le droit d’accès
                          à l’information.
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
                <Box
                  sx={{
                    display: "inline-block",
                    padding: "10px",
                    transition: "box-shadow 1s ease",
                    borderRadius: "20px",
                  }}
                >
                  <Typography
                    variant="h5"
                    color={"#1A4870"}
                    sx={{
                      marginTop: "2rem",
                      marginBottom: "1rem",
                      fontWeight: "bold",
                      fontSize: "20px",
                    }}
                  >
                    AU SENS DE LA PRÉSENTE LOI EN ENTEND PAR LES TERMES SUIVANTS
                    :
                  </Typography>
                  <Divider
                    sx={{
                      width: "100%",
                      borderWidth: "2px",
                    }}
                  />
                </Box>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Grid
                      container
                      alignItems="center"
                      sx={{ marginBottom: "1rem" }}
                    >
                      <Box display="flex" alignItems="center">
                        <CheckCircleIcon
                          sx={{ color: "#5B99C2", marginRight: "0.5rem" }}
                        />
                        <Typography
                          sx={{
                            color: "#3A3A3A",
                            fontSize: "1.1rem",
                          }}
                        >
                          L'accès à l'information : la publication proactive de
                          l'information par l'organisme concerné et le droit d'y
                          accéder sur demande.
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid
                      container
                      alignItems="center"
                      sx={{ marginBottom: "1rem" }}
                    >
                      <Box display="flex" alignItems="center">
                        <CheckCircleIcon
                          sx={{ color: "#5B99C2", marginRight: "0.5rem" }}
                        />
                        <Typography
                          sx={{
                            color: "#3A3A3A",
                            fontSize: "1.1rem",
                          }}
                        >
                          Information : toute information enregistrée quelque
                          soit sa date, sa forme et son support, produite ou
                          obtenue par les organismes soumis aux dispositions de
                          la présente loi dans le cadre de l'exercice de leurs
                          activités.
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid container alignItems="center">
                      <Box display="flex" alignItems="center">
                        <CheckCircleIcon
                          sx={{ color: "#5B99C2", marginRight: "0.5rem" }}
                        />
                        <Typography
                          sx={{
                            color: "#3A3A3A",
                            fontSize: "1.1rem",
                          }}
                        >
                          Le tiers : toute personne physique ou morale autre que
                          l'organisme concerné détenteur de l'information et le
                          demandeur d'accès à l'information.
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Fade>

      {/* Background Box with Text Input and Button */}
      <Box
        sx={{
          backgroundImage: `url(${cover})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "250px",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "1rem",
          boxSizing: "border-box",
          position: "relative",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Box sx={{ maxWidth: "400px", width: "100%" }}>
              <Typography variant="h4" color="#EABA2B">
                Suivi de la demande
              </Typography>
              <Typography variant="h6" sx={{ mb: 2 }} color="white">
                Pour suivre votre demande, veuillez introduire la référence
              </Typography>
              <Box position="relative">
                <TextField
                  variant="outlined"
                  label="Number"
                  sx={{
                    width: "100%",
                    borderRadius: "10px", // Adjust the border radius

                    borderWidth: "2px", // Border width for the fieldset
                    borderRadius: "10px", // Border radius for the fieldset
                    backgroundColor: "white",
                  }}
                />
                <Button
                  variant="outlined"
                  sx={{
                    color: "white", // Text color
                    borderWidth: "2px", // Border width
                    borderColor: "white",
                    backgroundColor: "#1291FF",
                    position: "relative",
                    right: 0,
                    top: 0,
                    height: "100%",
                    borderRadius: "10px",
                    "&:hover": {
                      backgroundColor: "#105EA3", // Background color on hover
                    },
                  }}
                >
                  Submit
                </Button>
              </Box>
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: "center",
              gap: "10px",
              justifyContent: "center",
            }}
          >
            <Button
              variant="outlined"
              sx={{
                left: "90px",
                backgroundColor: "transparent",
                borderColor: "White",
                borderRadius: "20px",
                color: "White",
              }}
            >
              Demande d’accès à l’information
              <Box
                sx={{
                  backgroundColor: "#1A4870", // Dark background color
                  borderRadius: "50%", // Circle shape
                  padding: "5px", // Spacing around the icon
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginLeft: "30px",
                }}
              >
                <DownloadIcon sx={{ color: "#EABA2B", fontSize: "20px" }} />
              </Box>
            </Button>
            <Button
              variant="outlined"
              sx={{
                left: "90px",
                backgroundColor: "transparent",
                borderColor: "White",
                borderRadius: "20px",
                color: "White",
              }}
            >
              Demande de griff
              <Box
                sx={{
                  backgroundColor: "#1A4870", // Dark background color
                  borderRadius: "50%", // Circle shape
                  padding: "5px", // Spacing around the icon
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginLeft: "30px",
                }}
              >
                <DownloadIcon sx={{ color: "#EABA2B", fontSize: "20px" }} />
              </Box>
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          display: "inline-block",
          padding: "10px",
          transition: "box-shadow 1s ease",
          borderRadius: "20px",
          marginTop: "2rem",
        }}
      ></Box>

      <TableContainer
        component={Paper}
        sx={{
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
          overflowX: "auto", // Allow horizontal scrolling on small screens
          maxWidth: "100%", // Ensure the container fits within its parent
        }}
      >
        <Table
          sx={{
            minWidth: 650,
            borderCollapse: "separate",
            borderSpacing: "0",
            border: "2px solid #1A4870",
            "& .MuiTableCell-root": {
              borderBottom: "2px solid #1A4870", // Global border for all cells
              borderRight: "2px solid #1A4870", // Add vertical borders
              padding: { xs: "8px", sm: "12px" }, // Adjust padding for small screens
              fontSize: { xs: "12px", sm: "14px" }, // Smaller font size on small screens
            },
          }}
          aria-label="information table"
        >
          <TableHead>
            <TableRow>
              <TableCell
                colSpan={6}
                sx={{
                  backgroundColor: "#1A4870",
                  color: "#fff",
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: { xs: "14px", sm: "16px" }, // Responsive font size
                  padding: { xs: "10px", sm: "12px" },
                  borderTopLeftRadius: "8px",
                  borderTopRightRadius: "8px",
                }}
              >
                RESPONSABLE DE L'ACCÈS À L'INFORMATION
              </TableCell>
            </TableRow>
            <TableRow>
              {[
                "Nom et Prénom",
                "Rang",
                "Plan de Carrière",
                "E-mail Professionnel",
                "Numéro de Téléphone",
                "Fax",
              ].map((header) => (
                <TableCell
                  key={header}
                  sx={{
                    backgroundColor: "#5B99C2",
                    color: "#fff",
                    fontWeight: "bold",
                    padding: { xs: "8px", sm: "12px" }, // Adjust padding for small screens
                    fontSize: { xs: "12px", sm: "14px" }, // Responsive font size
                  }}
                >
                  {header}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {[
              {
                name: "Cheikh Rouhou Mohamed",
                rank: "Inspecteur Général Du Contrôle Economique",
                career: "Décision Générale",
                email: "Mohamed.Cheikhrouhou@Cct.Gov.Tn",
                phone: "96661328",
                fax: "71961953",
              },
              {
                name: "Khalil Mohamed Tawfiq",
                rank: "Avocat Général Des Prisons Et Services Correctionnels",
                career: "L'écrivain Amer",
                email: "Daaf@Cct.Gov.Tn",
                phone: "96661328",
                fax: "71961953",
              },
            ].map((row, index) => (
              <TableRow key={index} sx={{ backgroundColor: "#D4E6F1" }}>
                {Object.values(row).map((cell, i) => (
                  <TableCell
                    key={i}
                    sx={{
                      padding: { xs: "8px", sm: "12px" },
                      border: "1px solid #ddd",
                    }}
                  >
                    {cell}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Footer />
    </Box>
  );
}

export default Information;
