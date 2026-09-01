import clsx from "clsx"
import styles from './Header.module.css'
import { Link, useLocation } from "react-router-dom"
import { TextButton } from "@features/TextButton/TextButton"

export const Header = () => {

  const location = useLocation()

  const headerLinks = [
    {
      name: 'Каталог',
      to: '/'
    },
    {
      name: 'Избранное',
      to: '/favorite'
    },
    {
      name: 'Подборки',
      to: '/collections'
    },
    {
      name: 'Новинки',
      to: '/news'
    },
  ]

  return (
    <header className={clsx(styles.header)}>
      <ul className={clsx(styles.link_list, styles.item_list)}>
        {headerLinks.map((link) => (
          <li key={link.name} className={clsx(styles.header_item)}>
            <Link 
              to={link.to} 
              className={
                clsx(
                  styles.header_link,
                  location.pathname === link.to &&
                  styles.active_link
                )
              }
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
      <ul className={clsx(styles.button_list, styles.item_list)}>
        <li>
          <TextButton type="secondary" text="Войти" onClick={() => {}} />
        </li>
        <li>
          <TextButton type="accent" text="Зарегистрироваться" onClick={() => {}} />
        </li>
      </ul>
    </header>
  )
}