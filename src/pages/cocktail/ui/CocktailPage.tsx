import type { FC } from 'react'
import { NavLink, useParams } from 'react-router'
import { cocktailCodes } from '@/pages/cocktail/model/cocktailCodes.ts'
import { useGetCocktailsByNameQuery } from '@/pages/cocktail/api/cocktailApi.ts'
import styles from './CocktailPage.module.scss'
import { CocktailDetails } from '@/pages/cocktail/ui/CocktailDetails.tsx'
import { capitalize, getErrorMessage } from '@/shared/lib'

type SearchParams = { cocktailCode: string }

export const CocktailPage: FC = () => {
  const { cocktailCode } = useParams<SearchParams>()
  const { data: cocktails, isFetching, isError, error } = useGetCocktailsByNameQuery(cocktailCode ?? cocktailCodes[0])

  const renderCocktails = () => {
    if (isFetching)
      return <h1>Loading...</h1>

    if (isError)
      return <div>{getErrorMessage(error)}</div>

    if (!cocktails || cocktails.length === 0)
      return <h1>Cocktails not found</h1>

    return cocktails.map(item => (
      <CocktailDetails key={item.id} cocktail={item}/>
    ))
  }

  return (
    <div className={styles.container}>
      <aside>
        <nav className={styles.nav}>
          {cocktailCodes.map(item => <NavLink key={item} to={`/${item}`}>{capitalize(item)}</NavLink>)}
        </nav>
      </aside>

      <main className={styles.main}>
        {renderCocktails()}
      </main>
    </div>
  )
}
