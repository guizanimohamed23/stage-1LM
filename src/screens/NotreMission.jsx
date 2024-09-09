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
  const [value1, setValue1] = React.useState('1');
  const [value2, setValue2] = React.useState('4');

  const handleChange1 = (event, newValue) => {
    setValue1(newValue);
  };

  const handleChange2 = (event, newValue) => {
    setValue2(newValue);
  };

  return (
    <div>
      <Navbar/>

      {/* header*/}

      <Box 
        sx={{ 
          height: '300px', 
          backgroundImage: `url('/Rectangle 2.png')`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
          color: 'white', 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center',marginBottom:'2rem'
        }}>
          <Box>
            <Typography variant="h4" component="h1" sx={{display:'flex'}}>Activités Du Conseil</Typography>
            <Divider sx={{
                    width: "100%",
                    borderWidth: "5px",
                    borderRadius: ".5rem",
                    bgcolor: "#EABA2B",
                    marginBottom: ".5rem",
                    marginTop: ".3rem",
                  }}/>
          </Box>
      </Box>

      {/* first section*/}

      <Box marginBottom={'3rem'}>
        <Typography
          variant="h5"
          color={"#1A4870"}
          sx={{ fontWeight: "bold", marginBottom: "1rem" }}
        >
          ROLE CONSULTATIF
        </Typography>
        <Divider />
        <Box sx={{ width: '100%', typography: 'body1' }}>
          <TabContext value={value1}>
            <Box sx={{display:'flex',justifyContent:'center'}}>
              <TabList
                onChange={handleChange1}
                aria-label="lab API tabs example"
                centered 
                variant="scrollable"
                scrollButtons="auto"
              >
                <Tab label="Consultation obligatoire" value="1" />
                <Tab label="Consultation facultative" value="2" />
                <Tab label="Qui peut requérir cet avis ?" value="3" />
              </TabList>
            </Box>
            <Box sx={{display:'flex',justifyContent:'center'}}>
              <TabPanel value="1">
                1 - Domaines de compétences : <br />
                * les projets de textes réglementaires tendant à imposer des conditions particulières régissant les <br />
                activités économiques <br />
                * Les projets de concentration <br />
                * Exonération de certaines pratiques au sens de l’article 6 de la loi sur la concurrence<br />
                2 - Qui doit saisir le Conseil : <br />
                * le ministre chargé du commerce <br />
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
                Et ce par l’intermédiaire du ministre du Commerce. <br />
              </TabPanel>
            </Box>
          </TabContext>
        </Box>
      </Box>

      {/* second section*/}

      <Box marginBottom={'3rem'}>
        <Typography
          variant="h5"
          color={"#1A4870"}
          sx={{ fontWeight: "bold", marginBottom: "1rem" }}
        >
          ROLE JURIDICTIONNEL 
        </Typography>
        <Divider
        />
        <Box sx={{ width: '100%', typography: 'body1' }}>
          <TabContext value={value2}>
            <Box sx={{display:'center',justifyContent:'center'}}>
              <TabList onChange={handleChange2} aria-label="lab API tabs example" variant="scrollable"
                scrollButtons="auto">
                <Tab label="Pratiques anti-concurrentielles" value="4" />
                <Tab label="Qui peut saisir le conseil concernant le volet juridictionnel ?" value="5" />
              </TabList>
            </Box>
            <Box sx={{display:'center',justifyContent:'center'}}>
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
            </Box>
          </TabContext>
        </Box>
      </Box>

      {/*third section*/}

      <Box>
        <Typography
            variant="h5"
            color={"#1A4870"}
            sx={{ fontWeight: "bold", marginBottom: "1rem" }}
          >
            TEXTES JURIDIQUES DE REFERENCE
          </Typography>
          <Divider sx={{marginBottom:'2rem'}}
          />
          <Typography>1 - Loi n° 2015-36 du 15 septembre 2015, relative à la réorganisation de la concurrence et des prix.</Typography>
          <Typography marginTop={'1rem'}> 2 - Décret n° 2006-477 du 15 février 2006, fixant les modalités d’organisation administrative et financière et de fonctionnement du conseil de la concurrence.</Typography>
      </Box>

      {/*Actualite Section*/}

      <Box marginTop={'3rem'}>
        <Typography
          variant="h5"
          color={"#1A4870"}
          sx={{ fontWeight: "bold", marginBottom: "1rem" ,display:'flex',justifyContent:'center'}}
        >
          ARTICLES EN RELATIONS
        </Typography>
        <Divider sx={{marginBottom:'2rem'}}
        /> 
      </Box>
      
      {/*Footer Section*/}

      <Footer/>
    </div>
  )
}

export default NotreMission