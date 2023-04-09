import React from "react";
import PageTemplate from '../components/templateMovieListPage';
import { getPopular } from "../api/tmdb-api";
//import { Upcoming } from "@mui/icons-material";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
//import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'

import AddMustWatchIcon from '../components/cardIcons/addMustWatch.js';
//import addMustWatch from '../components/moviesContext.js';


const Popular = (props) => {

  const {  data, error, isLoading, isError }  = useQuery('popular', getPopular)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const Popularmovies = data.results;

  
  //const favorites = movies.filter(m => m.favorite)
  //localStorage.setItem('favorites', JSON.stringify(favorites))
  
  //const addToFavorites = (movieId) => {
    //const updatedMovies = movies.map((m) =>
    //m.id === movieId ? { ...m, favorite: true } : m
  //);
   //setMovies(updatedMovies);
  //};

  //const [movies, setMovies] = useState([]);
  //const favorites = movies.filter(m => m.favorite)
 // localStorage.setItem('favorites', JSON.stringify(favorites))

//  //const addToFavorites = (movieId) => {
//    // const updatedMovies = movies.map((m) =>
//    // m.id === movieId ? { ...m, favorite: true } : m
//    );
//    setMovies(updatedMovies);
//   };

// useEffect(() => {
//    getMovieUpcoming().then(movies => {
//      setMovies(movies);
//    });
//   }, []);


  return (
    <PageTemplate
      title='Popular Movies'
      movies={Popularmovies}
     //selectFavorite={addToFavorites}

     action={(movie) => {
      return <AddMustWatchIcon movie={movie} />
    }}

    />
  );
};
export default Popular;