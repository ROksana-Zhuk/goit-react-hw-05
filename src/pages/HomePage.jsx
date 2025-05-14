import { useEffect, useState } from "react";
import { getMoviesTrending } from '../services/moviesService.js'
import MovieList from "../components/MovieList/MovieList";


export default function HomePage() {

        const [movies, setMovies] = useState([]);
        const [loading, setLoading] = useState(false);

        useEffect(() => {
          setLoading(true);
          getMoviesTrending()
            .then((data) => setMovies(data))
            .finally(() => setLoading(false));
        }, []);


    return (
       <div>
         <h1>Trending today</h1>
         <MovieList movies={movies}/>
       </div>
    )
}

