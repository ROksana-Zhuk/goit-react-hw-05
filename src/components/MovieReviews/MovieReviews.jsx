import { getMovieReviews } from '../../services/moviesService.js'
import {  useParams } from "react-router-dom";
import { useEffect, useState } from "react";




export default function MovieReviews() {

    const { movieId } = useParams();
    const [movieReviews, setMovieReviews] = useState([]);


    useEffect(() => {
        getMovieReviews(movieId)
            .then((data) => setMovieReviews(data))
            .finally(() => console.log('11111'));

        }, [movieId]);


    return (
        movieReviews.length > 0 ?
        (<ul>
            {movieReviews.map((review) => (
             <li key={review.id}>
             <h3>Author: {review.author}</h3>
             <p>{review.content}</p>
             </li>
            ))}

        </ul>)
        : ("We don't have any reviews for this movie.")
    )
}

