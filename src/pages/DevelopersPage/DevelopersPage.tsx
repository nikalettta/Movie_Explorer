import clsx from 'clsx'
import styles from './DevelopersPage.module.css'
import { TextButton } from '@features/TextButton/TextButton'
import { Search } from '@features/Search/Search'
import { useNavigate } from 'react-router-dom'

export const DevelopersPage = () => {
  const navigate = useNavigate()
  const onClick = () => {
    navigate('/')
  }

  return (
    <main className={clsx(styles.content)}>
      <div className={clsx(styles.title_cont)}>
        <h1 className={clsx(styles.title)}>Страница в <span className={clsx(styles.accent)}>разработке</span></h1>
        <TextButton type='accent' text='Перейти в каталог' onClick={onClick} />
      </div>
      <Search onClick={() => {}} />
    </main>
  )
}