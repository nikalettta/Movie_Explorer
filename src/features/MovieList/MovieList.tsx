import { MovieCard } from "@features/MovieCard/MovieCard"
import type { MovieType } from "@shared/types"
import clsx from "clsx"
import styles from './MovieList.module.css'

interface MovieListProps {
  movies: MovieType[]
}


export const MovieList = ({ movies }: MovieListProps) => {

  return (
    <section>
      <h2>Все фильмы</h2>
      <ul className={clsx(styles.movie_list)}>
        {movies.map((movie) => (
          <li key={movie.id}>
            <MovieCard type="catalog" movie={movie} />
          </li>
        ))}
      </ul>
    </section>
  )
}