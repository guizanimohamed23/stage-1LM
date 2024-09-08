import * as React from 'react';
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import {Typography, Divider} from '@mui/material'

function NotreMission() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <Navbar/>

      {/* first section*/}

      <Box position={'relative'} sx={{display:'flex',justifyContent:'center'}}>
        <img src="/Rectangle 2.png" alt="" />
        
      </Box>

      {/* first section*/}

      <Box>
        <Typography
          variant="h4"
          color={"#1A4870"}
          sx={{ fontWeight: "bold", marginBottom: "1rem" }}
        >
          Rôle Consultatif
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
        <Box sx={{ width: '100%', typography: 'body1' }}>
          <TabContext value={value}>
            <Box >
              <TabList onChange={handleChange} aria-label="lab API tabs example">
                <Tab label="Consultation obligatoire" value="1" />
                <Tab label=" Consultation facultative" value="2" />
                <Tab label="Qui peut requérir cet avis ?" value="3" />
              </TabList>
            </Box>
            <TabPanel value="1">
              1 - Domaines de compétences : <br />
              * les projets de textes réglementaires tendant à imposer des conditions particulières régissant les  <br />          
              activités économiques  <br />
              * Les projets de concentration <br />
              * Exonération de certaines pratiques au sens de l’article 6 de la loi sur la concurrence<br />
              2 - Qui doit saisir le Conseil : <br />
              * le ministre chargé du commerce  <br />
            </TabPanel>
            <TabPanel value="2">
              2-1 Domaine de compétences :<br />
              * les projets de textes législatifs et toutes les questions qui touchent la concurrence.<br />
              * Qui peut saisir le Conseil ? le ministre chargé du commerce.<br />
              2-2 domaine de compétences :<br />
              * l’avis du Conseil sur les questions de concurrence<br />
            </TabPanel>
            <TabPanel value="3">
              * les organismes ou groupements de consommateurs légalement établis<br />
              * les organisations professionnelles ou syndicales<br />
              * les chambres de commerce et d’industrie<br />
              * les Autorités de régulation<br />
              Et ce par l’intermédiaire du ministre du Commerce . <br />    
            </TabPanel>
          </TabContext>
        </Box>
      </Box>

      {/* second section*/}

      <Box>
        <Typography
          variant="h4"
          color={"#1A4870"}
          sx={{ fontWeight: "bold", marginBottom: "1rem" }}
        >
          Rôle juridictionnel
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
        <Box sx={{ width: '100%', typography: 'body1' }}>
          <TabContext value={value}>
            <Box>
              <TabList onChange={handleChange} aria-label="lab API tabs example">
                <Tab label="Pratiques anti-concurrentielles" value="4" />
                <Tab label="Qui peut saisir le conseil concernant le volet juridictionnel ?" value="5" />
              </TabList>
            </Box>
            <TabPanel value="4">
            1- Actions concertées, les collusions et les ententes expresses ou tacites ayant un effet ou objet anti-concurrentiel <br />
            2- Exploitation abusive d’une position dominante <br />
            3- Exploitation abusive d’un état de dépendance économique <br />
            4- Pratique de prix abusivement bas <br />
            </TabPanel>
            <TabPanel value="5">
              1- Auto saisine <br />
              2- Ministre du Commerce <br />
              3- Les entreprises économiques <br />
              4- Organisations professionnelles et syndicales <br />
              5- Organismes et groupements de consommateur légalement établis <br />
              6- Chambres de commerce et d’industrie <br />
              7- Autorités de régulation <br />
              8- Les collectivités locales <br />
            </TabPanel>
          </TabContext>
        </Box>
      </Box>

      {/*third section*/}

      <Box>
        <Typography
            variant="h4"
            color={"#1A4870"}
            sx={{ fontWeight: "bold", marginBottom: "1rem" }}
          >
            Textes Juridiques de Référence
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
          <Typography>1 - Loi n° 2015-36 du 15 septembre 2015, relative à la réorganisation de la concurrence et des prix.</Typography>
          <Typography> 2 - Décret n° 2006-477 du 15 février 2006, fixant les modalités d’organisation administrative et financière et de fonctionnement du conseil de la concurrence.</Typography>
      </Box>
      <Footer/>
    </div>
  )
}

export default NotreMission