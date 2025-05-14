import css from "./MoviesPage.module.css";
import MovieList from "../components/MovieList/MovieList";
import { getMoviesFiltered } from '.././services/moviesService.js'
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";




export default function MoviesPage() {

    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState('');

    const [searchParams, setSearchParams] = useSearchParams();





    const updateSearchParams = (key, value) => {
        const updatedParams = new URLSearchParams(searchParams);
        updatedParams.set(key, value);
        setSearchParams(updatedParams);
      };


    useEffect(() => {
        const search = searchParams.get("search");
        if(search === null) {
            return
        }
        setQuery(search);


            getMoviesFiltered(query)
                .then((data) => setMovies(data))
                .catch((error) => console.error(error));
    }, [query, searchParams]);



    const handleSubmit = (event) => {
            event.preventDefault();


            const search = event.target.elements.search.value;

            updateSearchParams("search", search);

            setQuery(search);
            event.target.reset();
    };

    return (
        <div>
        <form onSubmit={handleSubmit} className={css.form}>
            <input
              type="text"
              name="search"
              className={css.input}
            />
        <button type="submit"
                className={css.button}
            >Search
        </button>
        </form>
        <MovieList movies={movies}/>
      </div>
        )
    }





