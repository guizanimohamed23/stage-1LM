import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import BarChartIcon from "@mui/icons-material/BarChart";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import ArticleIcon from "@mui/icons-material/Article";
import BorderColorIcon from "@mui/icons-material/BorderColor";

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
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "2rem", // Add space between the boxes
            marginTop: "10rem",
            marginBottom: "8rem",
            flexWrap: "wrap",
          }}
        >
          {/* AVIS Box */}
          <Box
            sx={{
              backgroundColor: "#1A4870",
              color: "white",
              padding: 2,
              textAlign: "center",
              borderRadius: 2,
              width: "300px",
              height: "300px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "20px",
              cursor: "pointer",
            }}
            onClick={handleOpenAvis}
          >
            <BorderColorIcon
              sx={{
                fontSize: "80px",
                color: "white",
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

          {/* DECISION Box */}
          <Box
            sx={{
              backgroundColor: "#1A4870",
              color: "white",
              padding: 2,
              textAlign: "center",
              borderRadius: 2,
              width: "300px",
              height: "300px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "20px",
              cursor: "pointer",
            }}
            onClick={handleOpenDecision}
          >
            <ArticleIcon
              sx={{
                fontSize: "80px",
                color: "white",
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

          {/* RAPPORT ANNUEL Box */}
          <Box
            sx={{
              backgroundColor: "#1A4870",
              color: "white",
              padding: 2,
              textAlign: "center",
              borderRadius: 2,
              width: "300px",
              height: "300px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "20px",
              cursor: "pointer",
            }}
          >
            <BarChartIcon
              sx={{
                fontSize: "80px",
                color: "white",
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

          {/* ETUDE Box */}
          <Box
            sx={{
              backgroundColor: "#1A4870",
              color: "white",
              padding: 2,
              textAlign: "center",
              borderRadius: 2,
              width: "300px",
              height: "300px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "20px",
              cursor: "pointer",
            }}
          >
            <AutoStoriesIcon
              sx={{
                fontSize: "80px",
                color: "white",
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
        </Box>

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
              label="Mots Clé"
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
              label="Date"
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
              label="Numéro"
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
        <Footer />
      </div>
    </>
  );
}

export default Publication;
