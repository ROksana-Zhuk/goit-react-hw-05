import { useEffect, useState } from "react";
import { getMoviesTrending } from '../services/moviesService.js'
import MovieList from "../components/MovieList/MovieList";
import css from './HomePage.module.css'


export default function HomePage() {

        const [movies, setMovies] = useState([]);

        useEffect(() => {
          getMoviesTrending()
            .then((data) => setMovies(data))
            .catch((error) => console.error(error));
        }, []);


    return (
       <div className={css.container}>
         <h1 className={css.title}>Trending today</h1>
         <MovieList movies={movies}/>
       </div>
    )
}

