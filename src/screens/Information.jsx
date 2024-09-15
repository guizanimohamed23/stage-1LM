import { useState, useEffect } from "react";
import { Box, Button, TextField, Typography, Divider, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DownloadIcon from "@mui/icons-material/Download";
import Fade from "@mui/material/Fade";
import { useTranslation } from "react-i18next";
import cover from "/image 3.png";

function Information() {
  const [fadeIn, setFadeIn] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    setFadeIn(true);
  }, []);

  const data = [
    {
      name: t('person1.name'),
      rank: t('person1.rank'),
      career: t('person1.career'),
      email: t('person1.email'),
      phone: t('person1.phone'),
      fax: t('person1.fax'),
    },
    {
      name: t('person2.name'),
      rank: t('person2.rank'),
      career: t('person2.career'),
      email: t('person2.email'),
      phone: t('person2.phone'),
      fax: t('person2.fax'),
    },
  ];


  return (
    <Box sx={{ overflowX: "hidden" }}>
      <Navbar />

      <Fade in={fadeIn} timeout={1000}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            padding: "1rem",
            marginTop: "5rem",
          }}
        >
          <Box
            borderRadius={"1rem"}
            padding={"2rem"}
            width={{ xs: "90%", sm: "80%", md: "70%" }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Box
                  sx={{
                    display: "inline-block",
                    padding: "10px",
                    transition: "box-shadow 1s ease",
                    borderRadius: "20px",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "20px",
                      marginBottom: "1.5rem",
                      color: "#1A4870",
                      fontWeight: "bold",
                    }}
                  >
                    {t("informationTitle")}
                  </Typography>

                  <Divider
                    sx={{
                      width: "100%",
                      borderWidth: "2px",
                    }}
                  />
                </Box>

                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Grid
                      container
                      alignItems="center"
                      sx={{ marginBottom: "1rem" }}
                    >
                      <Box display="flex" alignItems="center">
                        <CheckCircleIcon
                          sx={{ color: "#5B99C2", marginRight: "0.5rem" }}
                        />
                        <Typography
                          sx={{
                            color: "#3A3A3A",
                            fontSize: "1.1rem",
                          }}
                        >
                          {t("decree1")}
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid
                      container
                      alignItems="center"
                      sx={{ marginBottom: "1rem" }}
                    >
                      <Box display="flex" alignItems="center">
                        <CheckCircleIcon
                          sx={{ color: "#5B99C2", marginRight: "0.5rem" }}
                        />
                        <Typography
                          sx={{
                            color: "#3A3A3A",
                            fontSize: "1.1rem",
                          }}
                        >
                          {t("decree2")}
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid container alignItems="center">
                      <Box display="flex" alignItems="center">
                        <CheckCircleIcon
                          sx={{ color: "#5B99C2", marginRight: "0.5rem" }}
                        />
                        <Typography
                          sx={{
                            color: "#3A3A3A",
                            fontSize: "1.1rem",
                          }}
                        >
                          {t("constitution")}
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
                <Box
                  sx={{
                    display: "inline-block",
                    padding: "10px",
                    transition: "box-shadow 1s ease",
                    borderRadius: "20px",
                  }}
                >
                  <Typography
                    variant="h5"
                    color={"#1A4870"}
                    sx={{
                      marginTop: "2rem",
                      marginBottom: "1rem",
                      fontWeight: "bold",
                      fontSize: "20px",
                    }}
                  >
                    {t("legalTermsTitle")}
                  </Typography>
                  <Divider
                    sx={{
                      width: "100%",
                      borderWidth: "2px",
                    }}
                  />
                </Box>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Grid
                      container
                      alignItems="center"
                      sx={{ marginBottom: "1rem" }}
                    >
                      <Box display="flex" alignItems="center">
                        <CheckCircleIcon
                          sx={{ color: "#5B99C2", marginRight: "0.5rem" }}
                        />
                        <Typography
                          sx={{
                            color: "#3A3A3A",
                            fontSize: "1.1rem",
                          }}
                        >
                          {t("accessToInfo")}
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid
                      container
                      alignItems="center"
                      sx={{ marginBottom: "1rem" }}
                    >
                      <Box display="flex" alignItems="center">
                        <CheckCircleIcon
                          sx={{ color: "#5B99C2", marginRight: "0.5rem" }}
                        />
                        <Typography
                          sx={{
                            color: "#3A3A3A",
                            fontSize: "1.1rem",
                          }}
                        >
                          {t("infoDefinition")}
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid container alignItems="center">
                      <Box display="flex" alignItems="center">
                        <CheckCircleIcon
                          sx={{ color: "#5B99C2", marginRight: "0.5rem" }}
                        />
                        <Typography
                          sx={{
                            color: "#3A3A3A",
                            fontSize: "1.1rem",
                          }}
                        >
                          {t("thirdParty")}
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Fade>

      <Box
        sx={{
          backgroundImage: `url(${cover})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          maxHeight: "250px",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "1rem",
          boxSizing: "border-box",
          position: "relative",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Box sx={{ maxWidth: "400px", width: "100%" }}>
              <Typography variant="h4" color="#EABA2B">
                {t("followRequestTitle")}
              </Typography>
              <Typography variant="h6" sx={{ mb: 2 }} color="white">
                {t("followRequestDescription")}
              </Typography>
              <Box position="relative">
                <TextField
                  variant="outlined"
                  label="Number"
                  sx={{
                    width: "100%",
                    borderRadius: "10px",
                    borderWidth: "2px",
                    backgroundColor: "white",
                  }}
                />
                <Button
                  variant="outlined"
                  sx={{
                    color: "white",
                    borderWidth: "2px",
                    borderColor: "white",
                    backgroundColor: "#1291FF",
                    position: "relative",
                    right: 0,
                    top: 0,
                    height: "100%",
                    borderRadius: "10px",
                    "&:hover": {
                      backgroundColor: "#105EA3",
                    },
                  }}
                >
                  {t("submitButton")}
                </Button>
              </Box>
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: "center",
              gap: "10px",
              justifyContent: "center",
            }}
          >
            <Button
              variant="outlined"
              sx={{
                left: "90px",
                backgroundColor: "transparent",
                borderColor: "White",
                borderRadius: "20px",
                color: "White",
              }}
            >
              {t("accessInfoButton")}
              <Box
                sx={{
                  backgroundColor: "#1A4870",
                  borderRadius: "50%",
                  padding: "5px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginLeft: "30px",
                }}
              >
                <DownloadIcon sx={{ color: "#EABA2B", fontSize: "20px" }} />
              </Box>
            </Button>
            <Button
              variant="outlined"
              sx={{
                left: "90px",
                backgroundColor: "transparent",
                borderColor: "White",
                borderRadius: "20px",
                color: "White",
              }}
            >
              {t("appealButton")}
              <Box
                sx={{
                  backgroundColor: "#1A4870",
                  borderRadius: "50%",
                  padding: "5px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginLeft: "30px",
                }}
              >
                <DownloadIcon sx={{ color: "#EABA2B", fontSize: "20px" }} />
              </Box>
            </Button>
          </Grid>
        </Grid>
      </Box>

      <TableContainer
      component={Paper}
      sx={{
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        borderRadius: "8px",
        overflowX: "auto",
        maxWidth: "100%",
      }}
    >
      <Table
        sx={{
          minWidth: 650,
          borderCollapse: "separate",
          borderSpacing: "0",
          border: "2px solid #1A4870",
          "& .MuiTableCell-root": {
            borderBottom: "2px solid #1A4870",
            borderRight: "2px solid #1A4870",
            padding: { xs: "8px", sm: "12px" },
            fontSize: { xs: "12px", sm: "14px" },
          },
        }}
        aria-label="information table"
      >
        <TableHead>
          <TableRow>
            <TableCell
              colSpan={6}
              sx={{
                backgroundColor: "#1A4870",
                color: "#fff",
                textAlign: "center",
                fontWeight: "bold",
                fontSize: { xs: "14px", sm: "16px" },
                padding: { xs: "10px", sm: "12px" },
                borderTopLeftRadius: "8px",
                borderTopRightRadius: "8px",
              }}
            >
              {t('responsibleTitle')}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell
              sx={{
                backgroundColor: "#5B99C2",
                color: "#fff",
                fontWeight: "bold",
                padding: { xs: "8px", sm: "12px" },
                fontSize: { xs: "12px", sm: "14px" },
              }}
            >
              {t('nameHeader')}
            </TableCell>
            <TableCell
              sx={{
                backgroundColor: "#5B99C2",
                color: "#fff",
                fontWeight: "bold",
                padding: { xs: "8px", sm: "12px" },
                fontSize: { xs: "12px", sm: "14px" },
              }}
            >
              {t('rankHeader')}
            </TableCell>
            <TableCell
              sx={{
                backgroundColor: "#5B99C2",
                color: "#fff",
                fontWeight: "bold",
                padding: { xs: "8px", sm: "12px" },
                fontSize: { xs: "12px", sm: "14px" },
              }}
            >
              {t('careerHeader')}
            </TableCell>
            <TableCell
              sx={{
                backgroundColor: "#5B99C2",
                color: "#fff",
                fontWeight: "bold",
                padding: { xs: "8px", sm: "12px" },
                fontSize: { xs: "12px", sm: "14px" },
              }}
            >
              {t('emailHeader')}
            </TableCell>
            <TableCell
              sx={{
                backgroundColor: "#5B99C2",
                color: "#fff",
                fontWeight: "bold",
                padding: { xs: "8px", sm: "12px" },
                fontSize: { xs: "12px", sm: "14px" },
              }}
            >
              {t('phoneHeader')}
            </TableCell>
            <TableCell
              sx={{
                backgroundColor: "#5B99C2",
                color: "#fff",
                fontWeight: "bold",
                padding: { xs: "8px", sm: "12px" },
                fontSize: { xs: "12px", sm: "14px" },
              }}
            >
              {t('faxHeader')}
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((person, index) => (
            <TableRow key={index} sx={{ backgroundColor: "#D4E6F1" }}>
              <TableCell sx={{ padding: { xs: "8px", sm: "12px" }, border: "1px solid #ddd" }}>
                {person.name}
              </TableCell>
              <TableCell sx={{ padding: { xs: "8px", sm: "12px" }, border: "1px solid #ddd" }}>
                {person.rank}
              </TableCell>
              <TableCell sx={{ padding: { xs: "8px", sm: "12px" }, border: "1px solid #ddd" }}>
                {person.career}
              </TableCell>
              <TableCell sx={{ padding: { xs: "8px", sm: "12px" }, border: "1px solid #ddd" }}>
                {person.email}
              </TableCell>
              <TableCell sx={{ padding: { xs: "8px", sm: "12px" }, border: "1px solid #ddd" }}>
                {person.phone}
              </TableCell>
              <TableCell sx={{ padding: { xs: "8px", sm: "12px" }, border: "1px solid #ddd" }}>
                {person.fax}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

      <Footer />
    </Box>
  );
}

export default Information;
