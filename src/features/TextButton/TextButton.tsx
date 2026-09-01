import clsx from "clsx";
import styles from './TextButton.module.css'
import { useState } from "react";

type ButtonType = 'accent' | 'secondary' | 'genre' ;

interface TextButton {
  type: ButtonType
  text: string
  onClick: () => void
}

export const TextButton = ({ type, text, onClick }: TextButton) => {

  const [isSelected, setIsSelected] = useState<boolean>(false)

  const onChange = () => {
    onClick();
    setIsSelected(!isSelected)
  }

  return (
    <button type="button" onClick={onChange} className={clsx(styles.button, styles[type], isSelected && styles.isActive)}>
      <span className={clsx(styles.span)}>{text}</span>
    </button>
  )
}