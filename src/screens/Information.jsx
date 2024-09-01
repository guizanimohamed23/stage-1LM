import { Typography, Box, Divider } from "@mui/material";

import Grid from "@mui/material/Grid2";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function Information() {
  return (
    <Box>
      <Navbar />

      <Box
        sx={{ display: "flex", justifyContent: "center" }}
        marginTop={"3rem"}
      >
        <Box
          bgcolor={"#f7f9fa"}
          borderRadius={"1rem"}
          padding={"3rem"}
          width={"70%"}
          boxShadow={"0 4px 8px rgba(0, 0, 0, 0.1)"}
        >
          <Grid container>
            <Grid item xs={12}>
              <Typography
                variant="h4"
                color={"#1A4870"}
                sx={{ fontWeight: "bold", marginBottom: "1rem" }}
              >
                LE DROIT D'ACCÈS À L'INFORMATION
              </Typography>
              <Divider
                sx={{
                  width: { xs: "90%", sm: "80%", md: "660px" },
                  borderWidth: "3px",
                  borderRadius: ".5rem",
                  bgcolor: "#EABA2B",
                  marginBottom: "1rem",
                }}
              />
              <Typography
                sx={{
                  marginBottom: "1.5rem",
                  color: "#1A4870",
                  fontWeight: "bold",
                }}
              >
                LE DROIT D'ACCÈS À L'INFORMATION (DAI) EST UN DROIT FONDAMENTAL
                DE L'INDIVIDU ET DE LA COLLECTIVITÉ QUI EST ASSURÉ PAR LA :
              </Typography>

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
                        documents administratifs des organismes publics, modifié
                        et complété par le décret-loi n° 2011-54 du 11 juin
                        2011.
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
                        garantit le droit à l’information et le droit d’accès à
                        l’information.
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>

              <Typography
                variant="h5"
                color={"#1A4870"}
                sx={{
                  marginTop: "2rem",
                  marginBottom: "1rem",
                  fontWeight: "bold",
                  fontSize: { xs: "1.5rem", md: "1.75rem" }, // Responsive font size
                }}
              >
                AU SENS DE LA PRÉSENTE LOI EN ENTEND PAR LES TERMES SUIVANTS :
              </Typography>
              <Divider
                sx={{
                  width: { xs: "90%", sm: "80%", md: "1000px" },
                  borderWidth: "3px",
                  borderRadius: ".5rem",
                  bgcolor: "#EABA2B",
                  marginBottom: "1rem",
                }}
              />
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
                        Information : toute information enregistrée quelque soit
                        sa date, sa forme et son support, produite ou obtenue
                        par les organismes soumis aux dispositions de la
                        présente loi dans le cadre de l'exercice de leurs
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

      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: { xs: "300px", md: "400px" },
          backgroundImage: 'url("src/assets/image 3.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          color: "white",
          textAlign: "left",
          padding: "1rem",
          paddingTop: "2rem",
          paddingLeft: "2rem",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            zIndex: 0,
          },
          zIndex: 1,
        }}
      >
        <Typography
          variant="h4"
          color={"#EABA2B"}
          sx={{
            fontWeight: "bold",
            marginBottom: "1rem",
            fontSize: { xs: "24px", md: "32px" },
            zIndex: 2, // Ensure the text appears above the overlay
          }}
        >
          suivi de la demande
        </Typography>
        <Divider
          sx={{
            width: { xs: "70%", sm: "80%", md: "350px" },
            borderWidth: "3px",
            borderRadius: ".5rem",
            bgcolor: "#EABA2B",
            marginBottom: "1rem",
            zIndex: 2,
          }}
        />
        <Typography
          variant="h6"
          color="white"
          sx={{
            fontSize: { xs: "16px", md: "20px" },
            zIndex: 2,
          }}
        >
          Pour suivre votre demande, veuillez introduire la référence
        </Typography>
      </Box>

      <Footer />
    </Box>
  );
}
