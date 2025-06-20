import type { FC } from 'react'
import styles from './NotFoundPage.module.scss'

export const NotFoundPage: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.label}>404</div>
    </div>
  )
}