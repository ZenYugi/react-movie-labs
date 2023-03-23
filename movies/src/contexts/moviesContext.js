import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [favorites, setFavorites] = useState( [] )

  const [myReviews, setMyReviews] = useState( {} ) 

  const [MustWatch, setMustWatch] = useState( [] )


  const addToFavorites = (movie) => {
    let newFavorites = [];
    if (!favorites.includes(movie.id)){
      newFavorites = [...favorites, movie.id];
    }
    else{
      newFavorites = [...favorites];
    }
    setFavorites(newFavorites)
  };

  const addReview = (movie, review) => {
    setMyReviews( {...myReviews, [movie.id]: review } )
  };
  console.log(myReviews);


  // We will use this function in a later section
  const removeFromFavorites = (movie) => {
    setFavorites( favorites.filter(
      (mId) => mId !== movie.id
    ) )
  };


  const addMustWatch = (movie) => {
    let newMustWatch = [];
    if (!MustWatch.includes(movie.id)){
      newMustWatch = [...MustWatch, movie.id];
    }
    else{
      newMustWatch = [...MustWatch];
    }
    setMustWatch(newMustWatch)
  };

  

  return (
    <MoviesContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
        addReview,
        addMustWatch,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );

};

export default MoviesContextProvider;
