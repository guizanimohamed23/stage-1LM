import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import PsychologyIcon from "@mui/icons-material/Psychology";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import GavelIcon from "@mui/icons-material/Gavel";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useTranslation } from "react-i18next";

function Cards() {
  const { t } = useTranslation();

  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", marginBottom: "5rem" }}
    >
      <Grid container marginTop={"3rem"} spacing={2} xs={12}>
        <Grid
          item
          size={{ xs: 6, md: 3 }}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Card
            sx={{
              height:'300px', 
              bgcolor: "#EAEEF0",
              borderRadius: ".7rem",
              transition: "transform 0.3s ease-in-out",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "1rem",
              }}
            >
              <AccountBalanceIcon
                sx={{
                  bgcolor: "#5B99C2",
                  color: "white",
                  fontSize: "3rem",
                  borderRadius: "3rem",
                  padding: ".5rem",
                }}
              />
            </Box>
            <CardContent>
              <Typography variant="h5" component="div" textAlign={"center"}>
                <strong>{t("cards.annual_reports.title")}</strong>
              </Typography>
              <Typography variant="body2" textAlign={"center"}>
                {t("cards.annual_reports.description")}
              </Typography>
            </CardContent>
            <CardActions sx={{ display: "flex", justifyContent: "center" }}>
              <Button
                sx={{
                  bgcolor: "#1A4870",
                  borderRadius: "2rem",
                  color: "white",
                }}
              >
                {t("cards.view_more")}
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item size={{ xs: 6, md: 3 }}>
          <Card
            sx={{
              height:'300px', 
              bgcolor: "#EAEEF0",
              borderRadius: ".7rem",
              transition: "transform 0.3s ease-in-out",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "1rem",
              }}
            >
              <PsychologyIcon
                sx={{
                  bgcolor: "#5B99C2",
                  color: "white",
                  fontSize: "3rem",
                  borderRadius: "3rem",
                  padding: ".5rem",
                }}
              />
            </Box>
            <CardContent>
              <Typography variant="h5" component="div" textAlign={"center"}>
                <strong>{t("cards.opinions.title")}</strong>
              </Typography>
              <Typography variant="body2" textAlign={"center"}>
                {t("cards.opinions.description")}
              </Typography>
            </CardContent>
            <CardActions sx={{ display: "flex", justifyContent: "center" }}>
              <Button
                sx={{
                  bgcolor: "#1A4870",
                  borderRadius: "2rem",
                  color: "white",
                }}
              >
                {t("cards.view_more")}
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item size={{ xs: 6, md: 3 }}>
          <Card
            sx={{
              height:'300px',
              bgcolor: "#EAEEF0",
              borderRadius: ".7rem",
              transition: "transform 0.3s ease-in-out",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "1rem",
              }}
            >
              <CheckCircleIcon
                sx={{
                  bgcolor: "#5B99C2",
                  color: "white",
                  fontSize: "3rem",
                  borderRadius: "3rem",
                  padding: ".5rem",
                }}
              />
            </Box>
            <CardContent>
              <Typography variant="h5" component="div" textAlign={"center"}>
                <strong>{t("cards.decisions.title")}</strong>
              </Typography>
              <Typography variant="body2" textAlign={"center"}>
                {t("cards.decisions.description")}
              </Typography>
            </CardContent>
            <CardActions sx={{ display: "flex", justifyContent: "center" }}>
              <Button
                sx={{
                  bgcolor: "#1A4870",
                  borderRadius: "2rem",
                  color: "white",
                }}
              >
                {t("cards.view_more")}
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item size={{ xs: 6, md: 3 }}>
          <Card
          size
            sx={{
              height:'300px',
              bgcolor: "#EAEEF0",
              borderRadius: ".7rem",
              transition: "transform 0.3s ease-in-out",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "1rem",
              }}
            >
              <GavelIcon
                sx={{
                  bgcolor: "#5B99C2",
                  color: "white",
                  fontSize: "3rem",
                  borderRadius: "3rem",
                  padding: ".5rem",
                }}
              />
            </Box>
            <CardContent>
              <Typography variant="h5" component="div" textAlign={"center"}>
                <strong>{t("cards.legal_framework.title")}</strong>
              </Typography>
              <Typography variant="body2" textAlign={"center"}>
                {t("cards.legal_framework.description")}
              </Typography>
            </CardContent>
            <CardActions sx={{ display: "flex", justifyContent: "center" }}>
              <Button
                sx={{
                  bgcolor: "#1A4870",
                  borderRadius: "2rem",
                  color: "white",
                }}
              >
                {t("cards.view_more")}
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Cards;
