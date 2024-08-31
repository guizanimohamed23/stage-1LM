import { Typography } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid2";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function Information() {
  return (
    <div>
      <Grid container>
        <Grid item size={{ xs: 12, sm: 7 }}>
          <Typography variant="h4" color={"#1A4870"}>
            Le droit d’accès à l’information (DAI) est un droit fondamental de
            l’individu et de la collectivité qui est assuré par la :
          </Typography>
          <Typography>
            Décret-loi n°41 du 26 mai 2011, relatif à l’accès aux documents
            administratifs des organismes publics, modifié et complété par le
            décret-loi n° 2011-54 du 11 juin 2011.. Loi organique n° 2016-22 du
            24 mars 2016, relative au droit d’accès à l’information. La
            Constitution du 27 Janvier 2014 Art. 32 : L’État garantit le droit à
            l’information et le droit d’accès à l’information.
          </Typography>
          <Grid container spacing={1}>
            <Grid item>
              <CheckCircleIcon style={{ color: "#5B99C2" }} />
            </Grid>
            <Grid item>
              <Typography>Un président</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
