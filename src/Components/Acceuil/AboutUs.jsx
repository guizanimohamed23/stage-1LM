import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Divider from "@mui/material/Divider";
import { useTranslation } from 'react-i18next';

function AboutUs() {
  const { t } = useTranslation(); 

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }} marginTop={"3rem"}>
      <Box
        bgcolor={"#EAEEF0"}
        borderRadius={"1rem"}
        padding={"2rem"}
        width={"70%"}
      >
        <Grid container>
          <Grid item size={{ xs: 12, sm: 7 }}>
            <Typography variant="h4" color={"#1A4870"}>
              <strong>{t('about_us.title')}</strong>
            </Typography>
            <Divider
              sx={{
                width: "30%",
                borderWidth: "5px",
                borderRadius: ".5rem",
                bgcolor: "#EABA2B",
                marginBottom: ".5rem",
                marginTop: ".3rem",
              }}
            />
            <Typography>{t('about_us.intro')}</Typography>
            <Typography>{t('about_us.composition_intro')}</Typography>

            <Grid container spacing={1}>
              <Grid item>
                <CheckCircleIcon style={{ color: "#5B99C2" }} />
              </Grid>
              <Grid item>
                <Typography>{t('about_us.members.president')}</Typography>
              </Grid>
            </Grid>

            <Grid container spacing={1}>
              <Grid item>
                <CheckCircleIcon style={{ color: "#5B99C2" }} />
              </Grid>
              <Grid item>
                <Typography>{t('about_us.members.vice_presidents')}</Typography>
              </Grid>
            </Grid>

            <Grid container>
              <Grid item xs='auto'>
                <CheckCircleIcon style={{ color: "#5B99C2" }} />
              </Grid>
              <Grid item xs>
                <Typography>
                  {t('about_us.members.magistrates')}
                </Typography>
              </Grid>
            </Grid>

            <Grid container spacing={1}>
              <Grid item>
                <CheckCircleIcon style={{ color: "#5B99C2" }} />
              </Grid>
              <Grid item>
                <Typography sx={{ maxWidth: "35rem" }}>
                  {t('about_us.members.personalities_production')}
                </Typography>
              </Grid>
            </Grid>

            <Grid container xs={12} spacing={1}>
              <Grid item>
                <CheckCircleIcon style={{ color: "#5B99C2" }} />
              </Grid>
              <Grid item>
                <Typography sx={{ maxWidth: "35rem" }}>
                  {t('about_us.members.personalities_economic')}
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item size={{ xs: 4, sm: 2 }}>
            <img
              src="http://cct.digit-r-consulting.com/wp-content/uploads/2023/05/comesa-1-1-768x577.jpg"
              alt=""
              style={{
                maxWidth: "250%",
                height: "auto",
                borderRadius: ".5rem",
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default AboutUs;
