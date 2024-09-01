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

function Cards() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Grid
        container
        marginTop={"3rem"}
        spacing={2}
        
        xs={12}
      >
        <Grid
          item
          size={{ xs: 6, md:3 }}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Card
            sx={{ minHeight:'225px',bgcolor: "#EAEEF0", borderRadius: ".7rem" }}
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
                <strong>Rapports Annuels</strong>
              </Typography>
              <Typography variant="body2" textAlign={"center"}>
                Rapports annuels des travaux du Conseil de la concurrence
              </Typography>
            </CardContent>
            <CardActions sx={{ display: "flex", justifyContent: "center" }}>
              <Button
                sx={{ bgcolor: "#1A4870", borderRadius: "2rem", color: "white" }}
              >
                Voir Plus
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item size={{ xs: 6, md:3 }}>
          <Card
            sx={{minHeight:'225px', bgcolor: "#EAEEF0", borderRadius: ".7rem" }}
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
                <strong>Avis</strong>
              </Typography>
              <Typography variant="body2" textAlign={"center"}>
                Les avis annuels rendus par le Conseil de la concurrence
              </Typography>
            </CardContent>
            <CardActions sx={{ display: "flex", justifyContent: "center" }}>
              <Button
                sx={{ bgcolor: "#1A4870", borderRadius: "2rem", color: "white" }}
              >
                Voir Plus
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item size={{ xs: 6, md:3 }}>
          <Card
            sx={{minHeight:'225px', bgcolor: "#EAEEF0", borderRadius: ".7rem" }}
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
                <strong>Décisions</strong>
              </Typography>
              <Typography variant="body2" textAlign={"center"}>
                Les décisions rendues par le Conseil de la concurrence
              </Typography>
            </CardContent>
            <CardActions sx={{ display: "flex", justifyContent: "center" }}>
              <Button
                sx={{ bgcolor: "#1A4870", borderRadius: "2rem", color: "white" }}
              >
                Voir Plus
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item size={{ xs: 6, md:3}}>
          <Card
            sx={{minHeight:'225px', bgcolor: "#EAEEF0", borderRadius: ".7rem" }}
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
                <strong>Carde Juridique</strong>
              </Typography>
              <Typography variant="body2" textAlign={"center"}>
                Le cadre juridique du Conseil de la concurrence
              </Typography>
            </CardContent>
            <CardActions sx={{ display: "flex", justifyContent: "center" }}>
              <Button
                sx={{ bgcolor: "#1A4870", borderRadius: "2rem", color: "white" }}
              >
                Voir Plus
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
export default Cards;
