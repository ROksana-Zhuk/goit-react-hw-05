import { getMovieReviews } from '../../services/moviesService.js'
import {  useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import css from './MovieReviews.module.css'




export default function MovieReviews() {

    const { movieId } = useParams();
    const [movieReviews, setMovieReviews] = useState([]);


    useEffect(() => {
        getMovieReviews(movieId)
            .then((data) => setMovieReviews(data))
            .catch((error) => console.error(error));

        }, [movieId]);


    return (
        movieReviews.length > 0 ?
        (<ul className={css.list}>
            {movieReviews.map((review) => (
             <li key={review.id} className={css.item}>
             <h3 className={css.author}>Author: {review.author}</h3>
             <p className={css.content}>{review.content}</p>
             </li>
            ))}

        </ul>)
        : (<p className={css.noReviews}>We don't have any reviews for this movie.</p>)
    )
}



