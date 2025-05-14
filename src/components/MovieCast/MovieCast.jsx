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

    const defaultImg = "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";

    return (
       <ul className={css.list}>
           {movieCast.map((actor) => (
                <li key={actor.id}>
                    <img src={
                        actor.profile_path
                        ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
                        : defaultImg}
                    className={css.image}
                    ></img>
                    <p  className={css.text}>{actor.name}</p>
                    <p  className={css.text}>Character: {actor.character}</p>
                </li>

           ))}
       </ul>
    )
}







