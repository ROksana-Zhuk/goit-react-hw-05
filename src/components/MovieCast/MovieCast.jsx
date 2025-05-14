import {  useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieCast } from '../../services/moviesService.js'
import css from './MovieCast.module.css'

export default function MovieCast() {
    const { movieId } = useParams();
    const [movieCast, setMovieCast] = useState([]);


    useEffect(() => {
        getMovieCast(movieId)

            .then((data) => setMovieCast(data))
            .catch((error) => console.error(error));

        }, [movieId]);


    return (
       <ul className={css.list}>
           {movieCast.map((actor) => (
                <li key={actor.id}>
                    <img src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                    className={css.image}
                    ></img>
                    <p  className={css.text}>{actor.name}</p>
                    <p  className={css.text}>Character: {actor.character}</p>
                </li>

           ))}
       </ul>
    )
}







