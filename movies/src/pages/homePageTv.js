import React from "react";
import { getTvs } from "../api/tmdb-api";
import PageTemplate from '../components/templateTvListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';

import AddToFavoritesIconTv from "../components/cardIcons/addToFavoritesTv";

const TvListPage = (props) => {

  const {  data, error, isLoading, isError }  = useQuery('discover', getTvs)

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
      title="Discover Tv Shows"
      tvs={tvs}
      action={(tv) => {
        return <AddToFavoritesIconTv tv={tv} />
      }}
    />
);

};
export default TvListPage;
