
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Box, Typography, Divider } from "@mui/material";
import HorizontalScroll from "../Components/Presse/HorizontalScroll";
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


const images=[
  '/images.jpeg','/images.jpeg','/images.jpeg','/images.jpeg','/images.jpeg','/images.jpeg','/images.jpeg','/images.jpeg',
]

function LaPresse() {


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
          
          <Box sx={{ flexGrow:1, padding: 2}}>
            <Grid container spacing={2} sx={{display:'flex',justifyContent:'center'}}>
              {images.map((src, index) => (
                <Grid xs={12} sm={6} md={4} key={index}>
                  <Box
                    component="img"
                    src={src}
                    alt={`Image ${index + 1}`}
                    sx={{
                      borderRadius: '8px',
                      boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                    }}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>


          <Footer />
        </Box>
      </Fade>
    </div>
  );
}

export default LaPresse;
