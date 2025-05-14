import css from "./MoviesPage.module.css";
import MovieList from "../components/MovieList/MovieList";
import { getMoviesFiltered } from '.././services/moviesService.js'
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Loader from '../components/Loader/Loader'




export default function MoviesPage() {

    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const [searchParams, setSearchParams] = useSearchParams();




    useEffect(() => {

        const query = searchParams.get("search") ?? "";

        setIsError(false)
        setIsLoading(true)
        getMoviesFiltered(query)
            .then((data) => setMovies(data))
            .catch((error) => {
                setIsError(true);
                console.log(error);
            })
            .finally(() => setIsLoading(false));
    }, [searchParams]);



    const handleSubmit = (event) => {
            event.preventDefault();

            const search = event.target.elements.search.value;
            const nextSearchParams = new URLSearchParams(searchParams);

            if (search !== "") {
              nextSearchParams.set("search", search);
            } else {
              nextSearchParams.delete("search");
            }
            setSearchParams(nextSearchParams);


            event.target.reset();
    };

    return (
        <div>
         {isError && <p><strong>Error! Try again.</strong></p> }
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
        {isLoading && <Loader />}
        <MovieList movies={movies}/>
      </div>
        )
    }





