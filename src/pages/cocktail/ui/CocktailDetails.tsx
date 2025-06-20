import type { FC } from 'react'
import styles from './CocktailDetails.module.scss'
import type { CocktailModel } from '@/pages/cocktail/model/types.ts'

type CocktailDetailsProps = {
  cocktail: CocktailModel
}

export const CocktailDetails: FC<CocktailDetailsProps> = ({ cocktail }) => {
  const renderIngredients = () =>
    [...Array(Math.max(cocktail.measures.length, cocktail.ingredients.length))].map((_, i) => (
      <li key={i}>
        {cocktail.measures[i] && <span>{cocktail.measures[i]} </span>}
        {cocktail.ingredients[i] && <span>{cocktail.ingredients[i]}</span>}
      </li>
    ))

  return (
    <article className={styles.container}>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={cocktail.thumb} alt={cocktail.name} loading={'lazy'}/>
      </div>

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
          {renderIngredients()}
        </ul>
      </div>
    </article>
  )
}
