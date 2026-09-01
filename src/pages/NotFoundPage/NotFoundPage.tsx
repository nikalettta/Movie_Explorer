import clsx from "clsx"
import styles from './NotFoundPage.module.css'
import { TextButton } from "@features/TextButton/TextButton";
import { useNavigate } from "react-router-dom";

export const NotFoundPage = () => {

  const navigate = useNavigate()
  const onClick = () => {
    navigate('/')
  }

  return (
    <main className={clsx(styles.content)}>
      <h1 className={clsx(styles.title)}>404<span className={clsx(styles.accent)}><br/>страница не найдена</span></h1>
      <TextButton type='accent' text='в каталог' onClick={onClick} />
    </main>
  )
}