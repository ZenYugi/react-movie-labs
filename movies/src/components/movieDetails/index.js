import React, { useState } from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MonetizationIcon from "@mui/icons-material/MonetizationOn";
import StarRate from "@mui/icons-material/StarRate";
import NavigationIcon from "@mui/icons-material/Navigation";
import Fab from "@mui/material/Fab";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import MovieReviews from "../movieReviews";
import MovieCredits from "../movieCredits";





const root = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
};
const chip = { margin: 0.5 };

const MovieDetails = ({ movie }) => {  // Don't miss this!
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerOpen2, setDrawerOpen2] = useState(false);

  return (
    <>
      <Typography variant="h4" backgroundColor= 'rgb(211,211,211)' component="h3">
        <strong>Overview</strong>
      </Typography>

      <Typography variant="h5" backgroundColor= 'rgb(211,211,211)' component="p">
        {movie.overview}
      </Typography>

      <Paper 
        component="ul" 
        sx={{...root, backgroundColor: 'rgb(152,251,152)' }}>
      
        <li><Chip label="Genres" sx={{...chip}} color="primary" /></li>

        {movie.genres.map((g) => (
        <li key={g.name}><Chip label={g.name} sx={{...chip}} /></li>
        ))}
      </Paper>

      <Paper component="ul" sx={{...root, backgroundColor: 'rgb(152,251,152)'}}>
        <Chip icon={<AccessTimeIcon />} label={`${movie.runtime} min.`} 
        color="error"/> 

        <Chip
          icon={<MonetizationIcon />}
          label={`${movie.revenue.toLocaleString()}`} 
          color="success"
        />
        <Chip
          icon={<StarRate />}
          label={`${movie.vote_average} (${movie.vote_count}`}
          color="warning"
        />
        <Chip label={`Released: ${movie.release_date}`} 
        color="secondary"/>
        
       
      </Paper>

     
    
      <Fab
        color="secondary"
        variant="extended"
        onClick={() =>setDrawerOpen(true)}
        sx={{
          position: 'fixed',
          bottom: '1em',
          right: '1em'
        }}
      >
        <NavigationIcon />
        Reviews
      </Fab>
      
      <Drawer anchor="top" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <MovieReviews movie={movie} />
      </Drawer>


<Fab
color="secondary"
variant="extended"
onClick={() =>setDrawerOpen2(true)}
sx={{
  position: 'fixed',
  bottom: '1em',
  right: '12em'
}}
>
<NavigationIcon />
Credits
</Fab>

<Drawer anchor="top" open={drawerOpen2} onClose={() => setDrawerOpen2(false)}>
<MovieCredits movie={movie} />
</Drawer>

</>

  );
};
export default MovieDetails ;
