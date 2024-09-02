import Cards from "../Components/Actualite/Card";
import Navbar from "../Components/Navbar";
import { Box, Typography,Divider } from "@mui/material";
import Footer from "../Components/Footer";
function Actualite() {
  return (
    <div>
      
      <Box marginTop={'5rem'} >
        <Navbar/>
        <Box >
          <Typography variant="h4" sx={{display:'flex' ,justifyContent:'center',color:'#5B99C2'}}>Actualités du Conseil</Typography>
          <Divider sx={{width: "20%",
                borderWidth: "5px",
                borderRadius: ".5rem",
                bgcolor: "#EABA2B",
                marginBottom: ".5rem",
                marginTop: ".3rem"}}/>
        </Box>
        <Cards />
        <Footer/>
      </Box>
      
    </div>
  )
}

export default Actualite