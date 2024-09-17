
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import CheckIcon from "@mui/icons-material/Check";
import BarChartIcon from "@mui/icons-material/BarChart";
import { useTranslation } from "react-i18next";

function Figures() {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        marginTop: "5rem",
        marginBottom: "5rem",
      }}
    >
      <Box
        bgcolor={"#1A4870"}
        color={"white"}
        borderRadius={"2rem"}
        padding={"2.5rem"}
      >
        <Grid
          container
          xs={12}
          spacing={10}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Grid item xs={2} sm={2}>
            <Grid container spacing={2}>
              <Grid
                item
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <EditCalendarIcon
                  sx={{
                    fontSize: "3rem",
                    color: "white",
                    transition: "transform 0.3s ease, color 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.2)", 
                      color: "blue", 
                    },
                  }}
                />
              </Grid>
              <Grid item>
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: "24px",
                    color: "white",
                    transition: "transform 0.3s ease, color 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.2)", 
                      color: "blue",
                    },
                  }}
                >
                  {t("figures.avis")}
                </Typography>
                <Typography
                  variant="h5"
                  color="#EABA2B"
                  sx={{
                    fontSize: "24px",
                    transition: "transform 0.3s ease, color 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.2)",
                      color: "#FF7B07",
                    },
                  }}
                >
                  10
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={2} sm={2}>
            <Grid container spacing={2}>
              <Grid
                item
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <CheckIcon
                  sx={{
                    fontSize: "3rem",
                    color: "white",
                    transition: "transform 0.3s ease, color 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.2)",
                      color: "blue",
                    },
                  }}
                />
              </Grid>
              <Grid item>
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: "24px",
                    color: "white",
                    transition: "transform 0.3s ease, color 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.2)",
                      color: "blue",
                    },
                  }}
                >
                  {t("figures.decisions")}
                </Typography>
                <Typography
                  variant="h5"
                  color="#EABA2B"
                  sx={{
                    fontSize: "24px",
                    transition: "transform 0.3s ease, color 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.2)",
                      color: "#FF7B07",
                    },
                  }}
                >
                  11
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={2} sm={2}>
            <Grid container spacing={2}>
              <Grid
                item
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <BarChartIcon
                  sx={{
                    fontSize: "3rem",
                    color: "white",
                    transition: "transform 0.3s ease, color 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.2)",
                      color: "blue",
                    },
                  }}
                />
              </Grid>
              <Grid item>
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: "24px",
                    color: "white",
                    transition: "transform 0.3s ease, color 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.2)",
                      color: "blue",
                    },
                  }}
                >
                  {t("figures.reports")}
                </Typography>
                <Typography
                  variant="h5"
                  color="#EABA2B"
                  sx={{
                    fontSize: "24px",
                    transition: "transform 0.3s ease, color 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.1)",
                      color: "#FF7B07",
                    },
                  }}
                >
                  13
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Figures;
