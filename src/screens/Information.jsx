import { Box, Button, TextField, Typography, Divider } from "@mui/material";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Grid from "@mui/material/Grid2";
import cover from "/image 3.png";
import { textAlign } from "@mui/system";

function Information() {
  return (
    <Box sx={{ overflowX: "hidden" }}>
      {/* Navbar Component */}
      <Navbar />

      {/* Main Content */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          padding: "1rem",
          marginTop: "5rem",
        }}
      >
        <Box
          bgcolor={"#f7f9fa"}
          borderRadius={"1rem"}
          padding={"2rem"}
          width={{ xs: "90%", sm: "80%", md: "70%" }} // Responsive width
          boxShadow={"0 4px 8px rgba(0, 0, 0, 0.1)"}
        >
          <Grid container spacing={2}>
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
                  fontSize: { xs: "1.5rem", md: "1.75rem" },
                }}
              >
                AU SENS DE LA PRÉSENTE LOI EN ENTEND PAR LES TERMES SUIVANTS :
              </Typography>
              <Divider
                sx={{
                  width: { xs: "90%", sm: "80%", md: "600px", lg: "900px" },
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
                    position: "relatiive",
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
              variant="contained"
              sx={{ left: "90px" }}
              onClick={() => {
                window.open(
                  "/src/assets/مطلب-نفاذ-الى-المعلومة-هيئة-النفاذ-الى-المعلومة-3.pdf",
                  "_blank"
                );
              }}
            >
              Demande d’accès à l’information
            </Button>
            <Button variant="contained" sx={{ left: "90px" }}>
              Demande de griff
            </Button>
          </Grid>
        </Grid>
      </Box>

      <Footer />
    </Box>
  );
}

export default Information;
