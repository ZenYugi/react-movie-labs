import React from "react";
import PageTemplate from '../components/templateMovieListPage';
import { getMovieUpcoming } from "../api/tmdb-api";
//import { Upcoming } from "@mui/icons-material";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
//import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'

import AddMustWatchIcon from '../components/cardIcons/addMustWatch.js';
//import addMustWatch from '../components/moviesContext.js';


const Upcoming = (props) => {

  const {  data, error, isLoading, isError }  = useQuery('upcoming', getMovieUpcoming)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const Upcomingmovies = data.results;


  return (
    <PageTemplate
      title='Upcoming Movies'
      movies={Upcomingmovies}
     //selectFavorite={addToFavorites}

     action={(movie) => {
      return <AddMustWatchIcon movie={movie} />
    }}

    />
  );
};
export default Upcoming;