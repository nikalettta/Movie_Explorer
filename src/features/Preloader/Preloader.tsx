import clsx from 'clsx'
import styles from './Preloader.module.css'

export const Preloader = () => {
  return (
  <div className={clsx(styles.dots)}>
    <div className={clsx(styles.dot)} />
    <div className={clsx(styles.dot)} />
  </div>
  )
}