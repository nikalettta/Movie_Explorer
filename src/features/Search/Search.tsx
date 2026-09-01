import clsx from 'clsx'
import styles from './Search.module.css'

interface SearchProps {
  onClick: (value: string) => void
}

export const Search = ({ onClick }: SearchProps) => {

  return (
    <div className={clsx(styles.input_container)}>
      <input type='search' placeholder='поиск по названию, режиссёру, актеру' className={clsx(styles.input)} />
      <button className={clsx(styles.search_button)} onClick={() => onClick}>
        <svg className={clsx(styles.icon)} width="27" height="25" viewBox="0 0 27 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="11.3095" cy="11.3095" r="9.80952" stroke="currentColor"/>
          <path d="M15.4761 11.9048C15.4761 9.27483 13.3442 7.14285 10.7142 7.14285" stroke="currentColor" stroke-linecap="round"/>
          <path d="M19.0476 17.8571L25 22.619" stroke="currentColor" stroke-linecap="round"/>
        </svg>
      </button>
    </div>
  )
}