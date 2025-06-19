import { HashRouter, Navigate, Route, Routes } from 'react-router'
import { cocktailCodes, CocktailPage } from '@/pages/cocktail'

export const AppRouter = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate to={`/${cocktailCodes[0]}`} replace/>}/>
        <Route path=":cocktailCode" element={<CocktailPage/>}/>
      </Routes>
    </HashRouter>
  )
}