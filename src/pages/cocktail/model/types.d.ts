export type CocktailModel = {
  id: string
  name: string
  alcoholic: string
  category: string
  glass: string
  instructions: string
  measures: (string | null)[]
  ingredients: (string | null)[]
  thumb: string
}
