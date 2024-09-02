
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Cards() {
  return (
    <Card sx={{ maxWidth: 345 , marginTop:'5rem'}}>
      <CardMedia
        sx={{ height: 140 }}
        image="http://cct.digit-r-consulting.com/wp-content/uploads/2022/05/c.jpeg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{display:'center', justifyContent:'center'}}>
          Lizard
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary', textAlign:'center' }}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions sx={{display:'flex', justifyContent:'center'}}>
        <Button size="small">Lire de Suite</Button>
      </CardActions>
    </Card>
  );
}
export default Cards;
