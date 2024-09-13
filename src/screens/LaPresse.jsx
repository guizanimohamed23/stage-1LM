import { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Box, Typography, Divider } from "@mui/material";
import HorizontalScroll from "../Components/Presse/HorizontalScroll";
import ModalComponent from "../Components/Presse/ModalComponent";
import Grid from "@mui/material/Grid2";
import Fade from "@mui/material/Fade";

// Same images for the Galerie section
const galerieItems = [
  { id: 1, image: "tunisie-conseil-concurrence 2.png", title: "Image 1" },
  { id: 2, image: "tunisie-conseil-concurrence 2.png", title: "Image 2" },
  { id: 3, image: "tunisie-conseil-concurrence 2.png", title: "Image 3" },
  { id: 4, image: "tunisie-conseil-concurrence 2.png", title: "Image 4" },
  { id: 5, image: "tunisie-conseil-concurrence 2.png", title: "Image 5" },
  { id: 6, image: "tunisie-conseil-concurrence 2.png", title: "Image 6" },
  { id: 7, image: "tunisie-conseil-concurrence 2.png", title: "Image 7" },
  { id: 8, image: "tunisie-conseil-concurrence 2.png", title: "Image 8" },
];

const modalData = {
  1: { title: "Modal 1", description: "This is the content for Modal 1" },
  2: { title: "Modal 2", description: "This is the content for Modal 2" },
  3: { title: "Modal 3", description: "This is the content for Modal 3" },
  4: { title: "Modal 4", description: "This is the content for Modal 4" },
  5: { title: "Modal 5", description: "This is the content for Modal 5" },
  6: { title: "Modal 6", description: "This is the content for Modal 6" },
  7: { title: "Modal 7", description: "This is the content for Modal 7" },
  8: { title: "Modal 8", description: "This is the content for Modal 8" },
};

function LaPresse() {
  const [openModalId, setOpenModalId] = useState(null);

  const handleOpen = (id) => {
    setOpenModalId(id);
  };

  const handleClose = () => setOpenModalId(null);

  const getModalContent = (id) =>
    modalData[id] || { title: "", description: "" };

  return (
    <div>
      <Navbar />
      <Fade in timeout={1000}>
        <Box>
          {/* Actualité Section */}
          <Box sx={{ marginTop: "7rem", marginBottom: "3rem" }}>
            <Typography
              variant="h4"
              sx={{
                display: "flex",
                justifyContent: "center",
                color: "#5B99C2",
              }}
            >
              A la Lune
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Divider
                sx={{
                  width: "5%",
                  borderWidth: "3px",
                  borderRadius: ".5rem",
                  bgcolor: "#EABA2B",
                  marginBottom: ".5rem",
                  marginTop: ".3rem",
                }}
              />
            </Box>
          </Box>

          <HorizontalScroll
            items={galerieItems}
            onCardButtonClick={handleOpen}
          />

          {/* Galerie Section */}
          <Box sx={{ marginTop: "3rem", marginBottom: "3rem" }}>
            <Typography
              variant="h4"
              sx={{
                display: "flex",
                justifyContent: "center",
                color: "#5B99C2",
              }}
            >
              Galerie
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Divider
                sx={{
                  width: "4%",
                  borderWidth: "3px",
                  borderRadius: ".5rem",
                  bgcolor: "#EABA2B",
                  marginBottom: ".5rem",
                  marginTop: ".3rem",
                }}
              />
            </Box>
          </Box>

          <Footer />
        </Box>
      </Fade>
    </div>
  );
}

export default LaPresse;
