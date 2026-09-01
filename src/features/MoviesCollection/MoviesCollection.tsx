import type { MovieType } from '@shared/types'
import styles from './MoviesCollection.module.css'
import { MovieCard } from '@features/MovieCard/MovieCard'
import clsx from 'clsx'

interface MoviesCollectionProps {
  movies: MovieType[]
  title: string
}

export const MoviesCollection = ({movies, title}: MoviesCollectionProps) => {

  return (
    <section>
      <h2>{title}</h2>
      <div className={clsx(styles.wrapper)}>
        <ul className={clsx(styles.movie_list)}>
          {movies.map((movie) => (
            <li key={movie.id}>
              <MovieCard type='collection' movie={movie} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}