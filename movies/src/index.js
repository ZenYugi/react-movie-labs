import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import SiteHeader from './components/siteHeader';
import MovieReviewPage from "./pages/movieReviewPage";

import Upcoming from "./pages/upcoming";


const App = () => {
  return (
    <BrowserRouter>
    <SiteHeader />
    <Routes>
      <Route path="/reviews/:id" element={ <MovieReviewPage /> } />
      <Route path="/movies/favorites" element={<FavoriteMoviesPage />} />
      <Route path="/movies/:id" element={<MoviePage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={ <Navigate to="/" /> } />

      <Route path="/movies/upcoming" element={<Upcoming />} />


    </Routes>
  </BrowserRouter>

  );
};

const rootElement = createRoot( document.getElementById("root") )
rootElement.render(<App />);

