import clsx from "clsx"
import styles from './CatalogPage.module.css'
import { Search } from "@features/Search/Search"
import { TextButton } from "@features/TextButton/TextButton"
import { useState } from "react"
import { useSelector } from "@app/store/store"
import { MovieList } from "@features/MovieList/MovieList"
import { MoviesCollection } from "@features/MoviesCollection/MoviesCollection"
import { Preloader } from "@features/Preloader/Preloader"

export const CatalogPage = () => {

  const [selectedGenre, setSelectedGenre] = useState<string | null>(null)

  const genres = useSelector((state) => state.genres.genres);
  const movies = useSelector((state) => state.movies.movies);
  const isLoading = useSelector((state) => state.movies.moviesAreLoading)
  const topMovies = useSelector((state) => state.movies.moviesCollections.top);
  const moviesCount = useSelector((state) => state.movies.moviesCount);

  if (isLoading) {
    return <Preloader />
  }
  
  return (
      <main className={clsx(styles.content)}>
        <section className={clsx(styles.header_zone)}>
          <div className={clsx(styles.decoration_zone)}>
            <div>
              <div className={clsx(styles.accent_title)}>
                <span className={clsx(styles.text_white)}>смотри</span>
                <span className={clsx(styles.text_pink)}>что нравится.</span>
              </div>
              <span className={clsx(styles.description)}>Тысячи фильмов, сериалов и документалок.<br/>Найди то, что зацепит.</span>
            </div>
            <div className={clsx(styles.number_container)}>
              <span className={clsx(styles.number)}>{moviesCount}</span>
              <span className={clsx(styles.number_description)}>фильмов в базе</span>
            </div>
          </div>
          <div className={clsx(styles.serch_zone)}>
            <Search onClick={() => {}} />
            <div className={clsx(styles.tabs_wrapper)}>
              <ul className={clsx(styles.tabs_list)}>
                {genres.map((genre) => (
                  <li className={clsx(styles.tab)} key={genre.slug}>
                    <TextButton text={genre.name} type="genre" onClick={() => setSelectedGenre(genre.name)} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        <MoviesCollection movies={topMovies} title="Легенды" />
        <MovieList movies={movies} />
      </main>
  )
}