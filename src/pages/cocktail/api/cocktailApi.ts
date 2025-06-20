import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { CocktailDto } from '@/pages/cocktail/api/types.ts'
import type { CocktailModel } from '@/pages/cocktail/model/types.ts'
import { dynamicMiddleware, rootReducer } from '@/shared/redux'

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
          alcoholic: cocktail.strAlcoholic,
          glass: cocktail.strGlass,
          instructions: cocktail.strInstructions,
          measures: Object.entries(cocktail).filter(value => value[0].startsWith('strMeasure') && value[1]).map(value => value[1]),
          ingredients: Object.entries(cocktail).filter(value => value[0].startsWith('strIngredient') && value[1]).map(value => value[1]),
          thumb: cocktail.strDrinkThumb,
        }))
      },
    }),
  }),
})

rootReducer.inject(cocktailApi)
dynamicMiddleware.addMiddleware(cocktailApi.middleware)

export const { useGetCocktailsByNameQuery } = cocktailApi
