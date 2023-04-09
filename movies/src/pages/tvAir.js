import React from "react";
import { getTvOnTheAir } from "../api/tmdb-api";
import PageTemplate from '../components/templateTvListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';

import AddToFavoritesIconTv from '../components/cardIcons/addToFavoritesTv';


const OnTheAir = (props) => {

  const {  data, error, isLoading, isError }  = useQuery('ontheair', getTvOnTheAir)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const tvs = data.results;

  // Redundant, but necessary to avoid app crashing.
  const favorites = tvs.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))
  const addToFavorites = (tvId) => true 

  return (
    <PageTemplate
      title="Discover Tv On The Air"
      tvs={tvs}
      action={(tv) => {
        return <AddToFavoritesIconTv tv={tv} />
      }}
    />
);


};
export default OnTheAir;

