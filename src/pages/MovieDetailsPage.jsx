import { NavLink, useParams, Outlet, useLocation } from "react-router-dom";
import { getMovieDetails } from "../services/moviesService";
import { BackLink } from "../components/BackLink/BackLink";
import { useEffect, useState } from "react";
import css from './MovieDetailsPage.module.css'

export default function MovieDetailsPage() {
    const { movieId } = useParams();
    const [movieDetails, setMovieDetails] = useState(null);

    const location = useLocation();
    const backLinkHref = location.state ?? "/movies";


    useEffect(() => {

      getMovieDetails(movieId)
        .then((data) => setMovieDetails(data))
        .catch((error) => console.error(error));

    }, [movieId]);


     return (
        <div className={css.container}>
          <BackLink to={backLinkHref}>Go back</BackLink>

          {movieDetails &&


          <div>

            <div>
              <img src={`https://image.tmdb.org/t/p/w500/${movieDetails.backdrop_path}`}
                  alt={movieDetails.original_title}
                  className={css.poster}
              />
              <h2 className={css.title}> {movieDetails.original_title}</h2>
              <p className={css.score}>User score: {Number.parseInt(movieDetails.vote_average *10)}%</p>
              <h3 className={css.overviewTitle}> Overview</h3>
              <p>{movieDetails.overview} </p>
              <h4 className={css.genresTitle}>Genres</h4>


              {movieDetails.genres.map((genre) => (
                <span key={genre.id} className={css.genreItem}>
              {genre.name}
                </span>
              ))}




            </div>
            <hr/>
            <p className={css.text}>Additional information</p>
            <ul>
              <li>
                <NavLink to="cast"
                         state={backLinkHref}
                         className={({ isActive }) =>
                  isActive ? `${css.navLink} ${css.navLinkActive}` : css.navLink
                }
                >Cast

                </NavLink>
              </li>
              <li>
                 <NavLink to="reviews"
                          state={backLinkHref}
                          className={({ isActive }) =>
                  isActive ? `${css.navLink} ${css.navLinkActive}` : css.navLink
                }
                >Reviews
                </NavLink>
              </li>
            </ul>
            <hr/>

          </div>

          }

          <Outlet />
        </div>
     )
}