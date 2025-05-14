import {  useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieCast } from '../../services/moviesService.js'

export default function MovieCast() {
    const { movieId } = useParams();
    const [movieCast, setMovieCast] = useState([]);


    useEffect(() => {
        getMovieCast(movieId)

            .then((data) => setMovieCast(data))
            .finally(() => console.log('11111'));

        }, [movieId]);


    return (
       <ul>
           {movieCast.map((actor) => (
                <li key={actor.id}>
                    <img src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}></img>
                    <p>{actor.name}</p>
                    <p>Character: {actor.character}</p>
                </li>

           ))}
       </ul>
    )
}







