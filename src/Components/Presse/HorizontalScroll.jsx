
import { useRef } from 'react';
import NewsCard from './NewsCard.jsx';
import { Box, IconButton } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const HorizontalScroll = ({ items,onCardButtonClick }) => {
  const scrollRef = useRef(null);

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <IconButton sx={{bgcolor:'#EABA2B',color:'black'}} onClick={() => handleScroll('left')} aria-label="scroll left">
        <ArrowBackIcon />
      </IconButton>
      <Box
        ref={scrollRef}
        sx={{
          display: 'flex',
          scrollBehavior: 'smooth',
          gap: 2,
          overflowX:'auto',
          width: 'calc(100% - 60px)', // Adjust width to fit arrows
          '&::-webkit-scrollbar': {
            display: 'none' // Hide scrollbar for Webkit browsers
          }

        }}
      >
        {items.map((item, index) => (
          <NewsCard
            key={index}
            image={item.image}
            title={item.title}
            onButtonClick={() => onCardButtonClick(item.id)}
          />
        ))}
      </Box>
      <IconButton sx={{bgcolor:'#EABA2B',color:'black'}} onClick={() => handleScroll('right')} aria-label="scroll right">
        <ArrowForwardIcon />
      </IconButton>
    </Box>
  );
};

export default HorizontalScroll;
