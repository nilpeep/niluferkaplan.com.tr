import React from 'react'
import styles from './button.module.css'

const ButtonDark = ({text}) => {
  return (
    <div className={styles.dark}>{text}</div>
  )
}

export default ButtonDark