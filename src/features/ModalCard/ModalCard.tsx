import clsx from 'clsx'
import styles from './ModalCard.module.css'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react';
import { useDispatch, useSelector } from '@app/store/store';
import { getTheMovie } from '@entities/selectedMovie/api/getTheMovie';
import { Preloader } from '@features/Preloader/Preloader';
import type { MovieType } from '@shared/types';

export const ModalCard = () => {
  const dispatch = useDispatch();
  const  {id} = useParams();
  const movie: MovieType | null = useSelector((state) => state.selectedMovie.movie);
  const isLoading = useSelector((state) => state.selectedMovie.movieIsLoading)

  useEffect(() => {
    dispatch(getTheMovie(Number(id)))
  }, [])

  if(isLoading || !movie) {
    return <Preloader />
  }

  return (
    <div className={clsx(styles.content)}>
      <div className={clsx(styles.movie_info)}>
        <img
          className={clsx(styles.image)}
          alt={`Постер фильма ${movie.name}`}
          src={movie.poster?.url}
        />
        <div className={clsx(styles.movie_description)}>
          <h1>{movie.name}</h1>
          <p className={clsx(styles.description)}>{movie.description}</p>
        </div>
      </div>
      <div className={clsx(styles.artists_info)}>

      </div>
    </div>
  )
}