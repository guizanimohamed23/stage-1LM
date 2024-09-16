import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import ArticleIcon from "@mui/icons-material/Article";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import BarChartIcon from "@mui/icons-material/BarChart";

function Publication() {
  const [openAvis, setOpenAvis] = React.useState(false);
  const [openDecision, setOpenDecision] = React.useState(false);

  const handleOpenAvis = () => setOpenAvis(true);
  const handleCloseAvis = () => setOpenAvis(false);

  const handleOpenDecision = () => setOpenDecision(true);
  const handleCloseDecision = () => setOpenDecision(false);

  // Style for the Modal Box
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      <Navbar />
      <div>
        <Grid
          container
          spacing={4}
          sx={{
            justifyContent: "center",
            marginTop: "10rem",
            marginBottom: "8rem",
          }}
        >
          {/* AVIS Box */}
          <Grid item xs={12} sm={6} md={3}>
            <Box
              sx={{
                backgroundColor: "#1A4870",
                color: "white",
                padding: 2,
                textAlign: "center",
                borderRadius: 2,
                height: "300px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "20px",
                cursor: "pointer",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)",
                },
              }}
              onClick={handleOpenAvis}
            >
              <BorderColorIcon
                sx={{
                  fontSize: "80px",
                }}
              />
              <Typography
                sx={{
                  fontSize: "36px",
                  fontWeight: "bold",
                  color: "#FFCF40",
                  marginTop: "1rem",
                }}
              >
                AVIS
              </Typography>
            </Box>
          </Grid>

          {/* DECISION Box */}
          <Grid item xs={12} sm={6} md={3}>
            <Box
              sx={{
                backgroundColor: "#1A4870",
                color: "white",
                padding: 2,
                textAlign: "center",
                borderRadius: 2,
                height: "300px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "20px",
                cursor: "pointer",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)",
                },
              }}
              onClick={handleOpenDecision}
            >
              <AutoStoriesIcon
                sx={{
                  fontSize: "80px",
                }}
              />
              <Typography
                sx={{
                  fontSize: "36px",
                  fontWeight: "bold",
                  color: "#FFCF40",
                  marginTop: "1rem",
                }}
              >
                DECISION
              </Typography>
            </Box>
          </Grid>

          {/* RAPPORT ANNUEL Box */}
          <Grid item xs={12} sm={6} md={3}>
            <Box
              sx={{
                backgroundColor: "#1A4870",
                color: "white",
                padding: 2,
                textAlign: "center",
                borderRadius: 2,
                height: "300px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "20px",
                cursor: "pointer",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)",
                },
              }}
            >
              <BarChartIcon
                sx={{
                  fontSize: "80px",
                }}
              />
              <Typography
                sx={{
                  fontSize: "36px",
                  fontWeight: "bold",
                  color: "#FFCF40",
                  marginTop: "1rem",
                }}
              >
                RAPPORT ANNUEL
              </Typography>
            </Box>
          </Grid>

          {/* ETUDE Box */}
          <Grid item xs={12} sm={6} md={3}>
            <Box
              sx={{
                backgroundColor: "#1A4870",
                color: "white",
                padding: 2,
                textAlign: "center",
                borderRadius: 2,
                height: "300px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "20px",
                cursor: "pointer",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)",
                },
              }}
            >
              <ArticleIcon
                sx={{
                  fontSize: "80px",
                }}
              />
              <Typography
                sx={{
                  fontSize: "36px",
                  fontWeight: "bold",
                  color: "#FFCF40",
                  marginTop: "1rem",
                }}
              >
                ETUDE
              </Typography>
            </Box>
          </Grid>
        </Grid>

        {/* AVIS Modal */}
        <Modal
          open={openAvis}
          onClose={handleCloseAvis}
          aria-labelledby="modal-avis-title"
          aria-describedby="modal-avis-description"
        >
          <Box sx={style}>
            <Typography
              id="modal-avis-title"
              variant="h6"
              component="h2"
              sx={{
                fontSize: "36px",
                fontWeight: "bold",
                color: "#1A4870",
                marginTop: "1rem",
                textAlign: "center",
                width: "100%",
              }}
            >
              AVIS
            </Typography>

            {/* Text Fields for AVIS */}
            <TextField
              label="Numéro"
              variant="outlined"
              fullWidth
              sx={{ marginTop: 2 }}
            />
            <TextField
              label="Partie"
              variant="outlined"
              fullWidth
              sx={{ marginTop: 2 }}
            />
            <TextField
              label="Secteur"
              variant="outlined"
              fullWidth
              sx={{ marginTop: 2 }}
            />
            <TextField
              label="Date"
              variant="outlined"
              fullWidth
              sx={{ marginTop: 2 }}
            />
            <TextField
              label="Mots clé"
              variant="outlined"
              fullWidth
              sx={{ marginTop: 2 }}
            />

            {/* Search Button for AVIS */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button
                variant="contained"
                color="primary"
                fullWidth
                sx={{
                  marginTop: 2,
                  backgroundColor: "#1A4870",
                  borderRadius: "20px",
                  maxWidth: "200px",
                }}
              >
                RECHERCHER
              </Button>
            </Box>
          </Box>
        </Modal>

        {/* DECISION Modal */}
        <Modal
          open={openDecision}
          onClose={handleCloseDecision}
          aria-labelledby="modal-decision-title"
          aria-describedby="modal-decision-description"
        >
          <Box sx={style}>
            <Typography
              id="modal-decision-title"
              variant="h6"
              component="h2"
              sx={{
                fontSize: "36px",
                fontWeight: "bold",
                color: "#1A4870",
                marginTop: "1rem",
                textAlign: "center",
                width: "100%",
              }}
            >
              DECISION
            </Typography>

            {/* Text Fields for DECISION */}
            <TextField
              label="Verdict"
              variant="outlined"
              fullWidth
              sx={{ marginTop: 2 }}
            />
            <TextField
              label="Partie"
              variant="outlined"
              fullWidth
              sx={{ marginTop: 2 }}
            />
            <TextField
              label="Secteur"
              variant="outlined"
              fullWidth
              sx={{ marginTop: 2 }}
            />
            <TextField
              label="Date"
              variant="outlined"
              fullWidth
              sx={{ marginTop: 2 }}
            />
            <TextField
              label="Mots clé"
              variant="outlined"
              fullWidth
              sx={{ marginTop: 2 }}
            />

            {/* Search Button for DECISION */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button
                variant="contained"
                color="primary"
                fullWidth
                sx={{
                  marginTop: 2,
                  backgroundColor: "#1A4870",
                  borderRadius: "20px",
                  maxWidth: "200px",
                }}
              >
                RECHERCHER
              </Button>
            </Box>
          </Box>
        </Modal>
      </div>
      <Footer />
    </>
  );
}

export default Publication;
