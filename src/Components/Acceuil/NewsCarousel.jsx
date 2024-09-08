import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { useTranslation } from 'react-i18next';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const imagePaths = [
  'http://cct.digit-r-consulting.com/wp-content/uploads/2023/05/comesa-1-1-768x577.jpg',
  'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
  'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
  'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
];

function NewsCarousel() {
  const { t } = useTranslation();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = imagePaths.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep - 1 + maxSteps) % maxSteps);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  // Translated images array
  const images = [
    { label: t('carousel.images.0.label'), imgPath: imagePaths[0] },
    { label: t('carousel.images.1.label'), imgPath: imagePaths[1] },
    { label: t('carousel.images.2.label'), imgPath: imagePaths[2] },
    { label: t('carousel.images.3.label'), imgPath: imagePaths[3] },
  ];

  return (
    <div style={{display:'flex',justifyContent:'center',marginTop:'8rem',marginBottom:'2rem'}}>
      <Box
        sx={{
          maxWidth: 600,
          flexGrow: 1,
          position: 'relative',
          display: 'flex',
          justifyItems: 'center',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {/* images */}
        <Box sx={{ position: 'relative', flex: 1, width: '100%' ,display:'flex', alignContent:'center'}}>
          <AutoPlaySwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {images.map((step, index) => (
              <div key={step.label}>
                {Math.abs(activeStep - index) <= 2 ? (
                  <Box
                    component="img"
                    sx={{
                      height: 255,
                      display: 'block',
                      maxWidth: 600,
                      overflow: 'hidden',
                      width: '100%',
                      borderRadius: '1rem'
                    }}
                    src={step.imgPath}
                    alt={step.label}
                  />
                ) : null}
              </div>
            ))}
          </AutoPlaySwipeableViews>
          {/* the text inside */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '100%',
              backgroundColor: 'rgb(0,0,0,0.6)',
              color: 'white',
              borderRadius: '1rem',
              paddingLeft: '5rem'
            }}
          >
            <Box position={'absolute'} top={'20%'}>
              <Typography variant='h4'> <strong> {images[activeStep].label} </strong></Typography>
              <Typography>{t('carousel.seeMore')}</Typography>
              <Button sx={{color: 'white', bgcolor: '#EABA2B', borderRadius: '2rem'}}>
                {t('carousel.seeMoreButton')}
              </Button>
            </Box>
          </Box>
        </Box>

        {/* Custom Dots */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            bottom: '5%',
            mt: 2,
          }}
        >
          {images.map((_, index) => (
            <Box
              key={index}
              sx={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                backgroundColor: activeStep === index ? 'black' : 'yellow',
                margin: '0 4px',
                cursor: 'pointer',
              }}
              onClick={() => handleStepChange(index)}
            />
          ))}
        </Box>

        {/* Custom Navigation Buttons */}
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            rem: 2,
          }}
        >
          <Button
            onClick={handleBack}
            disabled={activeStep === 0}
          >
            <KeyboardArrowLeft sx={{color: 'black', bgcolor: '#EABA2B', borderRadius: '20px'}} />
          </Button>
          <Button
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            <KeyboardArrowRight sx={{color: 'black', bgcolor: '#EABA2B', borderRadius: '20px'}}/>
          </Button>
        </Box>
      </Box>
    </div>
  );
}

export default NewsCarousel;
