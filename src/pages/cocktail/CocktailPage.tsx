import type { FC } from 'react'
import { useParams } from 'react-router'

type SearchParams = { cocktailCode: string }

export const CocktailPage: FC = () => {
  const { cocktailCode } = useParams<SearchParams>()

  return (
    <>{cocktailCode}</>
  )
}
