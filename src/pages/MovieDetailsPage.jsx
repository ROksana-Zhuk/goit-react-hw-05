import { NavLink, useParams, Outlet, useLocation } from "react-router-dom";
import { getMovieDetails } from "../services/moviesService";
import { BackLink } from "../components/BackLink/BackLink";
import { useEffect, useState } from "react";


export default function MovieDetailsPage() {
    const { movieId } = useParams();
    const [movieDetails, setMovieDetails] = useState(null);

    const location = useLocation();
    const backLinkHref = location.state ?? "/movies";


    useEffect(() => {

      getMovieDetails(movieId)
        .then((data) => setMovieDetails(data))
        .finally(() => console.log('11111'));

    }, [movieId]);


     return (
        <div>
          <BackLink to={backLinkHref}>Go back</BackLink>

          {movieDetails &&


          <div>

            <div>
              <img src={`https://image.tmdb.org/t/p/w500/${movieDetails.backdrop_path}`}/>
              <h2> {movieDetails.original_title}</h2>
              <p>User score: {Number.parseInt(movieDetails.vote_average *10)}%</p>
              <h3> Overview</h3>
              <p>{movieDetails.overview} </p>
              <h4>Genres</h4>


              {movieDetails.genres.map((genre) => (
                  <p key={genre.id}>{genre.name}</p>
              ))}

            </div>
            <hr/>
            <p>Additional information</p>
            <ul>
              <li>
                <NavLink to="cast" state={backLinkHref}>Cast</NavLink>
              </li>
              <li>
                 <NavLink to="reviews" state={backLinkHref}>Reviews</NavLink>
              </li>
            </ul>
            <hr/>

          </div>




          }

          <Outlet />
        </div>
     )
}