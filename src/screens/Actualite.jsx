import { useState } from "react";
import HorizontalScroll from "../Components/Actualite/HorizontalScroll";
import Navbar from "../Components/Navbar";
import { Box, Typography, Divider } from "@mui/material";
import Footer from "../Components/Footer";
import ModalComponent from "../Components/Actualite/ModalComponent";
import Fade from "@mui/material/Fade";

const actualiteitems = [
  {
    id: 1,
    image: "tunisie-conseil-concurrence 2.png",
    title: "Card 1",
    description: "hello world!",
    date: "13 Juin",
  },
  {
    id: 2,
    image: "tunisie-conseil-concurrence 2.png",
    title: "Card 2",
    description: "hello world!",
    date: "13 Juin",
  },
  {
    id: 3,
    image: "tunisie-conseil-concurrence 2.png",
    title: "Card 3",
    description: "hello world!",
    date: "13 Juin",
  },
  {
    id: 4,
    image: "tunisie-conseil-concurrence 2.png",
    title: "Card 4",
    description: "hello world!",
    date: "13 Juin",
  },
  {
    id: 5,
    image: "tunisie-conseil-concurrence 2.png",
    title: "Card 5",
    description: "hello world!",
    date: "13 Juin",
  },
  {
    id: 6,
    image: "tunisie-conseil-concurrence 2.png",
    title: "Card 6",
    description: "hello world!",
    date: "13 Juin",
  },
  {
    id: 7,
    image: "tunisie-conseil-concurrence 2.png",
    title: "Card 7",
    description: "hello world!",
    date: "13 Juin",
  },
  {
    id: 8,
    image: "tunisie-conseil-concurrence 2.png",
    title: "Card 8",
    description: "hello world!",
    date: "13 Juin",
  },
];

const activiteitems = [
  {
    id: 1,
    image: "tunisie-conseil-concurrence 2.png",
    title: "Card 1",
    description: "hello world!",
    date: "13 Juin",
  },
  {
    id: 2,
    image: "tunisie-conseil-concurrence 2.png",
    title: "Card 2",
    description: "hello world!",
    date: "13 Juin",
  },
  {
    id: 3,
    image: "tunisie-conseil-concurrence 2.png",
    title: "Card 3",
    description: "hello world!",
    date: "13 Juin",
  },
  {
    id: 4,
    image: "tunisie-conseil-concurrence 2.png",
    title: "Card 4",
    description: "hello world!",
    date: "13 Juin",
  },
  {
    id: 5,
    image: "tunisie-conseil-concurrence 2.png",
    title: "Card 5",
    description: "hello world!",
    date: "13 Juin",
  },
  {
    id: 6,
    image: "tunisie-conseil-concurrence 2.png",
    title: "Card 6",
    description: "hello world!",
    date: "13 Juin",
  },
  {
    id: 7,
    image: "tunisie-conseil-concurrence 2.png",
    title: "Card 7",
    description: "hello world!",
    date: "13 Juin",
  },
  {
    id: 8,
    image: "tunisie-conseil-concurrence 2.png",
    title: "Card 8",
    description: "hello world!",
    date: "13 Juin",
  },
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

function Actualite() {
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
        <Box marginTop={"5rem"}>
          {/* Actualité */}
          <Box>
            <Typography
              variant="h4"
              sx={{
                display: "flex",
                justifyContent: "center",
                color: "#5B99C2",
              }}
            >
              Actualités du Conseil
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Divider
                sx={{
                  width: "15%",
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
            items={actualiteitems}
            onCardButtonClick={handleOpen}
          />

          {/* Activité */}
          <Box marginTop={"4rem"}>
            <Typography
              variant="h4"
              sx={{
                display: "flex",
                justifyContent: "center",
                color: "#5B99C2",
              }}
            >
              Activités du Conseil
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Divider
                sx={{
                  width: "15%",
                  borderWidth: "3px",
                  borderRadius: ".5rem",
                  bgcolor: "#EABA2B",
                  marginBottom: ".5rem",
                  marginTop: ".3rem",
                }}
              />
            </Box>
          </Box>

          <div style={{ marginBottom: "3rem" }}>
            <HorizontalScroll
              items={activiteitems}
              onCardButtonClick={handleOpen}
            />
          </div>

          <Footer />
        </Box>
      </Fade>

      {openModalId !== null && (
        <ModalComponent
          open={openModalId !== null}
          handleClose={handleClose}
          content={getModalContent(openModalId)}
        />
      )}
    </div>
  );
}

export default Actualite;
