
import { Link, useLocation } from 'react-router-dom';
import css from './MovieList.module.css';


export default function MovieList( { movies }) {

    const location = useLocation();


    return (
       <div>
          <ul className={css.list}>
         {movies.map((movie) => (
            <li key={movie.id} className={css.item}>

            <Link to={`/movies/${movie.id}`} state={location} className={css.link}>
                {movie.title}
            </Link>

            </li>
           ))}
         </ul>
       </div>
    )
}
