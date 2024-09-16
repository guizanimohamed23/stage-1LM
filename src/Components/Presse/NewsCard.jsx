import {
  Card,
  CardActionArea,
  CardMedia,
  Typography,

} from "@mui/material";


function NewsCard({ image, title, onButtonClick }) {
  return (
    <div>
      <Card>
        <CardActionArea
          sx={{
            position: "relative",
            width: "400px",
            minHeight: "225px",
            transition: "transform 0.3s ease-in-out", 
          }}
          onClick={onButtonClick}
        >
          <CardMedia component="img" image={image} alt={title} />
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default NewsCard;
