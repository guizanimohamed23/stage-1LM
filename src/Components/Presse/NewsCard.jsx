import {
  Card,
  CardActionArea,
  CardMedia,
  Typography,
  Box,
} from "@mui/material";
import { width } from "@mui/system";

function NewsCard({ image, title, onButtonClick }) {
  return (
    <div>
      <Card>
        <CardActionArea
          sx={{
            position: "relative",
            width: "400px",
            minHeight: "225px",
            bgcolor: "#EAEEF0",
            borderRadius: ".7rem",
            minHeight: "225px",
            bgcolor: "#EAEEF0",
            borderRadius: ".7rem",
            transition: "transform 0.3s ease-in-out",
            "&:hover": {
              transform: "scale(1.05)",
              boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
            },
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
