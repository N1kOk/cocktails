import type { FC } from 'react'
import styles from './CocktailDetails.module.scss'

type CocktailDetailsProps = {
  cocktail: CocktailModel
}

export const CocktailDetails: FC<CocktailDetailsProps> = ({ cocktail }) => {
  return (
    <article className={styles.container}>
      <img className={styles.image} src={cocktail.thumb} alt={cocktail.name} loading={'lazy'}/>

      <div className={styles.marginBottom}>
        <h2>{cocktail.name}</h2>
        <div>
          <div>{cocktail.category}</div>
          <div>{cocktail.alcoholic}</div>
          <div>{cocktail.glass}</div>
        </div>
      </div>

      <div className={styles.marginBottom}>
        <div>
          <h3>Instructions:</h3>
          <p>{cocktail.instructions}</p>
        </div>
      </div>

      <div>
        <h3>List of ingredients:</h3>
        <ul>
          {
            [...Array(Math.max(cocktail.measures.length, cocktail.ingredients.length))].map((_, i) => (
              <li key={i}>
                {cocktail.measures[i] && <span>{cocktail.measures[i]} </span>}
                {cocktail.ingredients[i] && <span>{cocktail.ingredients[i]}</span>}
              </li>
            ))
          }
        </ul>
      </div>
    </article>
  )
}
