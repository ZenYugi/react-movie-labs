# Assignment 1 - ReactJS app.

Name: [Aaron O Brien]

## Overview.

[This responsity is the same movies folder I am using in the class labs. It is an expaned version of our Movie website. With new views, TMDB endpoints and more color to make it more visually appealing. In my opinon, I found this assignment quite difficult as I would have an idea for the website, but getting it to excute I found very hard. I will explain more in the video demo.]

### Features.
[ A bullet-point list of the __new features__ you added to the Movies Fan app (and any modifications to existing features) .]

+ Added a Top Rated page that displays the best rated movies from TMDB.
+ Added a Now Playing page that displays current movies being played in the cinema.
+ Added a Popular page that displays the most popular movies.
+ Attempted to add TV TMDB endpoints that a simular to the previous movies endpoints.
+ Modtify and change the colour of the app bar, movie cards, movie headers, movie details and more
+ Attempted to add movie credits in a simular way of adding movie reviews
+ Added bold and italic text
+ Change the the look of the filter movie search bar, added a new image from pixbay.com and imported to the images folder


## Setup requirements.

[ Not too sure what is meant by this, but I connected this assignment to my movies responsity on github. That way, if I do lose my assignment I can get the backup from github.]

## API endpoints.

[ List the __additional__ TMDB endpoints used, giving the description and pathname for each one.] 

+ Discover list of movies - discover/movie
+ Movie details - movie/:id
+ Movie genres = /genre/movie/list

+ Top Rated Movies page (getTopRated) = /movies/top_rated
+ Now Playing Movies page (getNowPlaying) = /movies/NowPlaying
+ Popular Movies page (getPopular) = /movies/popular

+ Latest Movies page (getLatest) = /movies/latest (Attempted)
+ Credits For A Movie (getCredits) = /credits/:id (Attempted)

+ Discover list of tv shows (getTvs) = discover/tv (Attempted)
+ Tv Show Details (getTv) = /tvs/:id (Attempted)
+ Tv Generes (getGenresTv) = /genre/tv/list (Attempted)
+ Tv Images/Posters (getTvImages) = /tv/{tv_id}/images (Attempted)
+ Tv Reviews (getTvReviews) = /reviews/:id (Attempted)
+ Tv Shows On The Air Page (getTvOnTheAir) = /tv/on_the_air (Attempted)


## Routing.

[ List the __new routes__ supported by your app and state the associated page.]

+ /movies/top_rated - Displays a page that has list of the Top Rated Movies (topRatedPage.js)

+ /movies/NowPlaying - Displays a page that has list of the current Movies played in the cinema (nowPlaying.js)

+ /movies/popular - Displays a page that has list of the most popular Movies  (popular.js)

+ /movies/latest - Displays a page that has list of the latest Movies (latest.js)

+ /credits/:id- Displays a page that has list of credits relevant to the movie (movieCreditsPage.js)

+ discover/tv - Displays a page that has list of tv shows (homePageTv.js)

+ /tvs/:id - Displays the relevant details associated with the tv show (tvDetailsPage.js)

+ /genre/tv/list- Displays the relevant genres associated with the tv show (tvDetailsPage.js)

+ /tv/{tv_id}/images - Displays the relevant images associated with the tv show
(templateTvPage/index.js)

+ /reviews/:id - Displays the relevant reviews associated with the tv show
(tvReviewPage.js)

+ /tv/on_the_air - Displays Tv Shows On Air in a list using previous tv componets
(tvAir.js)


[If relevant, state what aspects of your app are protected (i.e. require authentication) and what is public.]

## Independent learning (If relevant).

For modifying properties like changing the colour of a text font, I use the website "https://mui.com/material-ui/getting-started/overview/". It has a good library of material UI and it was handy for this assignmet. 
