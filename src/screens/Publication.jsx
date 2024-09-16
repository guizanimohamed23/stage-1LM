import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
function Publication() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
            backgroundColor: "#1A4870", // Set the box background color
            color: "white", // Set the text color
            padding: 2, // Add padding around the content
            textAlign: "center", // Center the text and image
            borderRadius: 2, // Add rounded corners
            width: "300px", // Set a fixed width for the box
            height: "300px", // Set a fixed height for the box
            display: "flex", // Use flexbox for alignment
            flexDirection: "column", // Align items vertically
            alignItems: "center", // Center items horizontally
            justifyContent: "center", // Center items vertically
            marginTop: "10rem",
            marginBottom: "8rem",
            cursor: "pointer", // Show pointer cursor for clickability
          }}
          onClick={handleOpen} // Open the modal when the box is clicked
        >
          <img
            src="/RAPPOORT.png"
            style={{
              width: "80px", // Adjust the width of the image to be smaller
              height: "auto", // Maintain the aspect ratio
            }}
          />
          <Typography
            sx={{
              fontSize: "36px", // Increase the font size
              fontWeight: "bold", // Make the text thicker
              color: "#FFCF40", // Change the color to FFCF40
              marginTop: "1rem", // Add space between the image and the text
            }}
          >
            AVIS
          </Typography>
        </Box>

        {/* Modal Pop-up */}
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              sx={{
                fontSize: "36px", // Increase the font size
                fontWeight: "bold", // Make the text thicker
                color: "#1A4870", // Set the color
                marginTop: "1rem", // Add some spacing
                textAlign: "center", // Ensure the text is centered
                width: "100%", // Make sure the Typography takes full width of its container
              }}
            >
              AVIS
            </Typography>

            {/* Text Fields */}
            <TextField
              label="Numéro"
              variant="outlined"
              fullWidth
              sx={{ marginTop: 2 }} // Spacing between fields
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

            {/* Search Button */}

            <Box
              sx={{
                display: "flex",
                justifyContent: "center", // Center the button horizontally
              }}
            >
              <Link to={'/recherche'}>
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
              </Link>
            </Box>
          </Box>
        </Modal>
        <Footer />
      </div>
    </>
  );
}

export default Publication;
