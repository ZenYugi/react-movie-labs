import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@mui/material/IconButton";
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';

const AddMustWatchIcon = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleAddMustWatchIcons = (e) => {
    e.preventDefault();
    context.addMustWatch(movie);
  };

  return (
    <IconButton aria-label="add to must watch" onClick={handleAddMustWatchIcons}>
      <PlaylistAddIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddMustWatchIcon;
