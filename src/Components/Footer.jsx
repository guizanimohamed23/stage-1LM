
import { Typography, IconButton, Box } from '@mui/material';
import Grid from '@mui/material/Grid2';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EmailIcon from '@mui/icons-material/Email';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  const sections = [
    { title: t('footer.section1.title'), items: [t('footer.section1.item1'), t('footer.section1.item2')] },
    { title: t('footer.section2.title'), items: [t('footer.section2.item1')] },
    { title: t('footer.section3.title'), items: [t('footer.section3.item1'), t('footer.section3.item2')] },
    { title: t('footer.section4.title'), items: [] },
    { title: t('footer.section5.title'), items: [t('footer.section5.item1'), t('footer.section5.item2')] },
    { title: t('footer.section6.title'), items: [t('footer.section6.item1'), t('footer.section6.item2')] },
  ];

  const links = [
    t('footer.links.faq'),
    t('footer.links.search'),
    t('footer.links.track'),
    t('footer.links.useful'),
    t('footer.links.contact'),
  ];

  return (
    <Box
      position="absolute"
      sx={{
        backgroundColor: "#002b5c",
        color: "#fff",
        padding: "20px 0",
        left: '0', right: '0'
      }}
    >
      <Grid
        container
        spacing={3}
        alignItems="center"
        justifyContent="center"
        sx={{ mb: 3 }}
      >
        <Grid item xs={12} sm={4} md={2} sx={{ textAlign: "center" }}>
          <Box>
            <img
              src="./src/assets/logowhite.png"
              alt="Logo"
              style={{ marginBottom: "10px", maxWidth: "100px" }}
            />
            <Box display="flex" justifyContent="center" mt={1}>
              <IconButton
                sx={{
                  color: "white",
                  marginRight: "10px",
                  fontSize: "1.2rem",
                }}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                sx={{
                  color: "white",
                  marginRight: "10px",
                  fontSize: "1.2rem",
                }}
              >
                <YouTubeIcon />
              </IconButton>
              <IconButton sx={{ color: "white", fontSize: "1.2rem" }}>
                <EmailIcon />
              </IconButton>
            </Box>
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          sm={8}
          md={8}
          container
          spacing={3}
          justifyContent="center"
          sx={{ mb: 3 }}
        >
          {sections.map((section, index) => (
            <Grid item xs={6} md={2} key={index}>
              <Typography
                variant="h6"
                gutterBottom
                sx={{
                  color: "#EABA2B",
                  fontSize: "18px",
                  transition: "color 0.3s, transform 0.3s",
                  "&:hover": {
                    color: "#ffeb3b",
                    transform: "scale(1.1)",
                  },
                }}
              >
                {section.title}
              </Typography>
              {section.items.map((item, idx) => (
                <Typography
                  key={idx}
                  sx={{
                    fontSize: "14px",
                    transition: "color 0.3s, transform 0.3s",
                  }}
                >
                  {item}
                </Typography>
              ))}
            </Grid>
          ))}
        </Grid>
      </Grid>

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        mt={3}
        borderTop="2px solid #ffffff33"
        pt={3}
      >
        <Grid container justifyContent="center" spacing={2}>
          {links.map((text, index) => (
            <Grid item xs={6} sm={2} key={index}>
              <Typography
                sx={{
                  fontSize: "14px",
                  textAlign: "center",
                  whiteSpace: "nowrap",
                }}
              >
                {text}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box textAlign="center" mt={2} px={2}>
        <Typography variant="body2" sx={{ fontSize: "14px" }}>
          All Rights Reserved &copy; {new Date().getFullYear()}
        </Typography>
      </Box>
    </Box>
  );
}
