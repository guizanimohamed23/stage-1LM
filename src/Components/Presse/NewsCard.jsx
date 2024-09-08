import { Card,CardActionArea,CardMedia,Typography,Box } from "@mui/material"
import { width } from "@mui/system"


function NewsCard({ image, title,onButtonClick }) {
  return (
    <div>
        <Card >
        <CardActionArea sx={{position:"relative",width:'400px'}} onClick={onButtonClick}>
            <CardMedia
            component="img"
            image= {image}
            alt={title}
            />
            <Typography gutterBottom variant="h5" component="div">
                {title}
            </Typography>

        </CardActionArea>
        </Card>
    </div>
  )
}

export default NewsCard