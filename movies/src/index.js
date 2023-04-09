import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import SiteHeader from './components/siteHeader';
import MovieReviewPage from "./pages/movieReviewPage";
import Upcoming from "./pages/upcoming";

import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';

import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage'

import TopRated from "./pages/topRatedPage";
import NowPlaying from "./pages/nowPlaying";
import Popular from "./pages/popular";
import NewMovie from "./pages/latest";

import MovieCreditPage from "./pages/movieCreditPage";


import TvsContextProvider from "./contexts/tvsContext";
import TvDetailsPage from "./pages/tvDetailsPage";
import TvReviewPage from "./pages/tvReviewPage";
import AddTvReviewPage from './pages/addTvReviewPage'
import FavoriteTvsPage from "./pages/favoriteTvsPage"

import OnTheAir from "./pages/tvAir";



const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});


const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SiteHeader />
        
        <MoviesContextProvider>
        <Routes>
          <Route path="/movies/favorites" element={<FavoriteMoviesPage />} />
          <Route path="/movies/upcoming" element={<Upcoming />} />
          <Route path="/reviews/:id" element={ <MovieReviewPage /> } />
          <Route path="/movies/:id" element={<MoviePage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={ <Navigate to="/" /> } />
          <Route path="/reviews/form" element={ <AddMovieReviewPage /> } />

          <Route path="/movies/top_rated" element={<TopRated />} />
          <Route path="/movies/now_playing" element={<NowPlaying />} />
          <Route path="/movies/popular" element={<Popular />} />
          <Route path="/movies/latest" element={<NewMovie />} />

          <Route path="/credits/:id" element={ <MovieCreditPage /> } />
          
          </Routes>
        </MoviesContextProvider>

        <TvsContextProvider>
          <Routes>
          <Route path="/tvs/favorites" element={<FavoriteTvsPage />} />
          <Route path="/reviews/:id" element={ <TvReviewPage /> } />
          <Route path="/tvs/:id" element={<TvDetailsPage />} />
          
          <Route path="/reviews/form" element={ <AddTvReviewPage /> } />
          <Route path="/tv/on_the_air" element={<OnTheAir />} />
        



          </Routes>
    </TvsContextProvider>


        
        
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

document.body.style.backgroundColor = "#800000";

const rootElement = createRoot( document.getElementById("root") )
rootElement.render(<App />);

