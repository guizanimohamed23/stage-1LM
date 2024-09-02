
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Box } from '@mui/system';

function Cards({ image, title, description, date,onButtonClick }) {
  return (
    <Card sx={{ minWidth:345 ,maxWidth: 345 , marginTop:'5rem'}}>
      <CardActionArea onClick={onButtonClick}>
        <Box sx={{bgcolor:'#FFCF40', color:'#1A4870', borderRadius:'.3rem', padding:'.2rem',position:'absolute', marginTop:'.5rem',marginLeft:'.5rem'}}>
          <Typography>{date}</Typography>
        </Box>
        <CardMedia
          sx={{ height: 140 }}
          component="img"
          image={image}
          alt={title}
        />
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{display:'center', justifyContent:'center'}}>
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', textAlign:'center' }}>
            {description}
          </Typography>
        </CardContent>
        <CardActions sx={{display:'flex', justifyContent:'center'}}>
          <Button size="small" onClick={onButtonClick}>Lire de Suite</Button>
        </CardActions>
      </CardActionArea>
    </Card>
  );
}
export default Cards;
