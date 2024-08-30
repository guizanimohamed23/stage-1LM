import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Divider from '@mui/material/Divider';


function AboutUs() {
  return (
    <Box sx={{display:'flex',justifyContent:'center'}} marginTop={'3rem'}>
    <Box bgcolor={'#EAEEF0'}  borderRadius={'1rem'} padding={'2rem'} width={'70%'}>
        <Grid container>
            <Grid item size={{xs:12 , sm:7}}>
                <Typography variant='h4' color={'#1A4870'}>
                    <strong>
                        QUI SOMME NOUS ?
                    </strong>
                </Typography>
                <Divider sx={{width:'30%', borderWidth:'5px',borderRadius:'.5rem', bgcolor:'#EABA2B',marginBottom:'.5rem',marginTop:'.3rem'}} />
                <Typography>
                    Le Conseil de la concurrence a été institué par la loi n° 95-42 du 24 avril 1995 modifiant et
                    complétant la loi n° 91-64 du 29 juillet 1991 relative à la concurrence et aux prix, remplaçant
                    la Commission de la concurrence.
                </Typography>
                <Typography>
                    Le conseil de la concurrence est composé de treize (13) membres comme suit:
                </Typography>
                <Grid container spacing={1}>
                    <Grid item>
                        <CheckCircleIcon style={{color:'#5B99C2'}}/>
                    </Grid>
                    <Grid item>
                        <Typography>
                            Un président
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={1}>
                    <Grid item>
                        <CheckCircleIcon style={{color:'#5B99C2'}}/>
                    </Grid>
                    <Grid item>
                        <Typography>
                            Deux vice-présidents
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={1}>
                    <Grid item>
                        <CheckCircleIcon style={{color:'#5B99C2'}}/>
                    </Grid>
                    <Grid item>
                        <Typography>
                            Quatre magistrats de deuxième grade au moins
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={1}>
                    <Grid item>
                        <CheckCircleIcon style={{color:'#5B99C2'}}/>
                    </Grid>
                    <Grid item>
                        <Typography sx={{maxWidth:'35rem'}}>
                            Quatre personnalités ayant exercé ou exerçant dans le domaine de la production, de la distribution, de l’artisanat ou des prestations de services
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container xs={12} spacing={1}>
                    <Grid item>
                        <CheckCircleIcon style={{color:'#5B99C2'}}/>
                    </Grid>
                    <Grid item >
                        <Typography sx={{maxWidth:'35rem'}}>
                            Deux personnalités choisies en raison de leur compétence en matière économique
                            ou en matière de concurrence ou de consommation
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item size={{xs:4, sm:2}}>
                <img src="http://cct.digit-r-consulting.com/wp-content/uploads/2023/05/comesa-1-1-768x577.jpg" alt="" style={{maxWidth: '250%',
                height: 'auto',borderRadius:'.5rem'}} />
            </Grid>
        </Grid>
    </Box>
    </Box>
  )
}

export default AboutUs;