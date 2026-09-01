import clsx from 'clsx'
import styles from './ErrorPage.module.css'
import { TextButton } from '@features/TextButton/TextButton'

export const ErrorPage = () => {

  return (
    <main className={clsx(styles.content)}>
      <div className={clsx(styles.title_cont)}>
        <h1 className={clsx(styles.title)}>что-то произошло :(<span className={clsx(styles.accent)}><br/>попробуй через часик еще раз!</span></h1>
        <TextButton type='accent' text='Перезагрузить страницу' onClick={() => {window.location.reload();}} />
      </div>
      <span className={clsx(styles.text)}>Когда-нибудь здесь будет мини-игра</span>
    </main>
  )
}