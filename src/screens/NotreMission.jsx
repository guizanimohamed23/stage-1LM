import * as React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Typography, Divider } from "@mui/material";
import Fade from "@mui/material/Fade";
import { useTranslation } from "react-i18next";

function NotreMission() {
  const { t } = useTranslation();

  const [value1, setValue1] = React.useState("1");
  const [value2, setValue2] = React.useState("4");
  const [fadeIn, setFadeIn] = React.useState(false);

  React.useEffect(() => {
    setFadeIn(true);
  }, []);

  const handleChange1 = (event, newValue) => {
    setValue1(newValue);
  };

  const handleChange2 = (event, newValue) => {
    setValue2(newValue);
  };

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Fade Animation for the rest of the content */}
      <Fade in={fadeIn} timeout={1000}>
        <Box>
          {/* Header */}
          <Box
            sx={{
              height: "300px",
              backgroundImage: `url('/Rectangle 2.png')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              color: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "2rem",
            }}
          >
            <Box>
              <Typography variant="h4" component="h1" sx={{ display: "flex" }}>
                {t('council_activities')}
              </Typography>
              <Divider
                sx={{
                  width: "100%",
                  borderWidth: "5px",
                  borderRadius: ".5rem",
                  bgcolor: "#EABA2B",
                  marginBottom: ".5rem",
                  marginTop: ".3rem",
                }}
              />
            </Box>
          </Box>

          {/* First Section */}
          <Box marginBottom={"3rem"}>
            <Typography
              variant="h5"
              color={"#1A4870"}
              sx={{ fontWeight: "bold", marginBottom: "1rem" }}
            >
              {t('advisory_role.title')}
            </Typography>
            <Divider />
            <Box sx={{ width: "100%", typography: "body1" }}>
              <TabContext value={value1}>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <TabList
                    onChange={handleChange1}
                    aria-label="lab API tabs example"
                    centered
                    variant="scrollable"
                    scrollButtons="auto"
                  >
                    <Tab label={t('advisory_role.sections.consultation_mandatory.title')} value="1" />
                    <Tab label={t('advisory_role.sections.consultation_optional.title')} value="2" />
                    <Tab label={t('advisory_role.sections.who_can_request_opinion.title')} value="3" />
                  </TabList>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <TabPanel value="1">
                    <Typography variant="h6">{t('advisory_role.sections.consultation_mandatory.content.0')}</Typography>
                    <ul>
                      <li>{t('advisory_role.sections.consultation_mandatory.content.1')}</li>
                      <li>{t('advisory_role.sections.consultation_mandatory.content.2')}</li>
                      <li>{t('advisory_role.sections.consultation_mandatory.content.3')}</li>
                    </ul>
                    <Typography variant="h6">{t('advisory_role.sections.consultation_mandatory.content.3')}</Typography>
                    <ul>
                      <li>{t('advisory_role.sections.consultation_mandatory.content.5')}</li>
                    </ul>
                  </TabPanel>
                  <TabPanel value="2">
                    <Typography variant="h6">{t('advisory_role.sections.consultation_optional.content.0')}</Typography>
                    <ul>
                      <li>{t('advisory_role.sections.consultation_optional.content.1')}</li>
                      <li>{t('advisory_role.sections.consultation_optional.content.2')}</li>
                    </ul>
                    <Typography variant="h6">{t('advisory_role.sections.consultation_optional.content.3')}</Typography>
                  </TabPanel>
                  <TabPanel value="3">
                    <Typography variant="h6">{t('advisory_role.sections.who_can_request_opinion.title')}</Typography>
                    <ul>
                      <li>{t('advisory_role.sections.who_can_request_opinion.content.0')}</li>
                      <li>{t('advisory_role.sections.who_can_request_opinion.content.1')}</li>
                      <li>{t('advisory_role.sections.who_can_request_opinion.content.2')}</li>
                      <li>{t('advisory_role.sections.who_can_request_opinion.content.3')}</li>
                      <li>{t('advisory_role.sections.who_can_request_opinion.content.4')}</li>
                    </ul>
                  </TabPanel>
                </Box>
              </TabContext>
            </Box>
          </Box>

          {/* Second Section */}
          <Box marginBottom={"3rem"}>
            <Typography
              variant="h5"
              color={"#1A4870"}
              sx={{ fontWeight: "bold", marginBottom: "1rem" }}
            >
              {t('jurisdictional_role.title')}
            </Typography>
            <Divider />
            <Box sx={{ width: "100%", typography: "body1" }}>
              <TabContext value={value2}>
                <Box sx={{ display: "center", justifyContent: "center" }}>
                  <TabList
                    onChange={handleChange2}
                    aria-label="lab API tabs example"
                    variant="scrollable"
                    scrollButtons="auto"
                  >
                    <Tab label={t('jurisdictional_role.sections.anti_competitive_practices.title')} value="4" />
                    <Tab label={t('jurisdictional_role.sections.who_can_notify_council_judicial.title')} value="5" />
                  </TabList>
                </Box>
                <Box sx={{ display: "center", justifyContent: "center" }}>
                  <TabPanel value="4">
                    <ul>
                      <li>{t('jurisdictional_role.sections.anti_competitive_practices.content.0')}</li>
                      <li>{t('jurisdictional_role.sections.anti_competitive_practices.content.1')}</li>
                      <li>{t('jurisdictional_role.sections.anti_competitive_practices.content.2')}</li>
                      <li>{t('jurisdictional_role.sections.anti_competitive_practices.content.3')}</li>
                    </ul>
                  </TabPanel>
                  <TabPanel value="5">
                    <ul>
                      <li>{t('jurisdictional_role.sections.who_can_notify_council_judicial.content.0')}</li>
                      <li>{t('jurisdictional_role.sections.who_can_notify_council_judicial.content.1')}</li>
                      <li>{t('jurisdictional_role.sections.who_can_notify_council_judicial.content.2')}</li>
                      <li>{t('jurisdictional_role.sections.who_can_notify_council_judicial.content.3')}</li>
                      <li>{t('jurisdictional_role.sections.who_can_notify_council_judicial.content.4')}</li>
                      <li>{t('jurisdictional_role.sections.who_can_notify_council_judicial.content.5')}</li>
                      <li>{t('jurisdictional_role.sections.who_can_notify_council_judicial.content.6')}</li>
                      <li>{t('jurisdictional_role.sections.who_can_notify_council_judicial.content.7')}</li>
                    </ul>
                  </TabPanel>
                </Box>
              </TabContext>
            </Box>
          </Box>

          {/* Third Section */}
          <Box>
            <Typography
              variant="h5"
              color={"#1A4870"}
              sx={{ fontWeight: "bold", marginBottom: "1rem" }}
            >
              {t('legal_texts.title')}
            </Typography>
            <Divider sx={{ marginBottom: "2rem" }} />
            <ul>
              <li>{t('legal_texts.content.0')}</li>
              <li>{t('legal_texts.content.1')}</li>
            </ul>
          </Box>

          {/* Related Articles Section */}
          <Box marginTop={"3rem"}>
            <Typography
              variant="h5"
              color={"#1A4870"}
              sx={{
                fontWeight: "bold",
                marginBottom: "1rem",
                display: "flex",
                justifyContent: "center",
              }}
            >
              {t('related_articles.title')}
            </Typography>
            <Divider sx={{ marginBottom: "2rem" }} />
          </Box>

          {/* Footer Section */}
          <Footer />
        </Box>
      </Fade>
    </div>
  );
}

export default NotreMission;
