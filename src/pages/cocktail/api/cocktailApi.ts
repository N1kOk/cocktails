import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { CocktailDto } from '@/pages/cocktail/api/types'

type Response = {
  drinks: CocktailDto[]
}

export const cocktailApi = createApi({
  reducerPath: 'cocktailApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://www.thecocktaildb.com/api/json/v1/1' }),
  endpoints: (builder) => ({
    getCocktailsByName: builder.query<CocktailModel[], string>({
      query: (name) => ({
        url: '/search.php',
        params: {
          s: name,
        },
      }),
      transformResponse: (response: Response) => {
        return response.drinks.map(cocktail => ({
          id: cocktail.idDrink,
          name: cocktail.strDrink,
          category: cocktail.strCategory,
          glass: cocktail.strGlass,
          instructions: cocktail.strInstructions,
          measures: Object.entries(cocktail).filter(value => value[0].startsWith('strMeasure')).map(value => value[1]),
          ingredients: Object.entries(cocktail).filter(value => value[0].startsWith('strIngredients')).map(value => value[1]),
          thumb: cocktail.strDrinkThumb,
        }));
      }
    }),
  }),
})

export const { useGetCocktailsByNameQuery } = cocktailApi