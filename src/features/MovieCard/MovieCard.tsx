import type { MovieType } from "@shared/types"
import clsx from "clsx"
import styles from './MovieCard.module.css'
import { useState } from "react"
import { Link, useLocation } from "react-router-dom"

type CardType = 'catalog' | 'collection'

interface MovieCardProps {
  movie: MovieType
  type: CardType
}

export const MovieCard = ({ movie, type = 'catalog' }: MovieCardProps) => {

  const location = useLocation()
  const [cardIsLiked, setCardIsLiked] = useState(false)
  const collectionType = type === 'collection'

  return (
    <Link 
      className={
        clsx(
          styles.card_container, 
          collectionType ? styles.card_collection : styles.card_catalog
        )}
      to={`/movies/:${movie.id}`}
      state={{background: location}}
    >
      {movie.poster && 
        <img className={clsx(styles.image)} src={movie.poster.url} alt={`Постер фильма ${movie.name}`} />
      }
      <div className={clsx(styles.options_movie)}>
        <button 
          className={clsx(styles.like_button)}
          onClick={() => setCardIsLiked(!cardIsLiked)}  
        >
          <svg
          className={clsx(styles.icon, cardIsLiked? styles.icon_default : styles.icon_checked)}
          width="34"
          height="30"
          viewBox="0 0 34 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.08294 15.6491C0.375966 10.3197 2.37247 3.69388 7.96747 1.89305C10.9105 0.943317 14.5424 1.73556 16.6057 4.58158C18.5513 1.63056 22.2882 0.949681 25.2281 1.89305C30.8215 3.69388 32.8292 10.3197 31.1238 15.6491C28.4671 24.0964 19.1972 28.4967 16.6057 28.4967C14.0159 28.4967 4.82874 24.1951 2.08294 15.6491Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
      <div className={clsx(styles.movie_info)}>
        <div className={clsx(styles.movie_accent_info)}>
          <span>{`${movie.genres[0].name} ${movie.year}`}</span>
          <h2 className={clsx(styles.title)}>{movie.name}</h2>
          {movie.shortDescription && 
            <p className={clsx(styles.description)}>{movie.shortDescription}</p>
          }
        </div>
        <span className={clsx(styles.rating)}>{movie.rating?.filmCritics}</span>
      </div>
    </Link>
    
  )
}