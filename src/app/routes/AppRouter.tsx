import { HashRouter, Navigate, Route, Routes, useParams } from 'react-router'
import { cocktailCodes, CocktailPage } from '@/pages/cocktail'
import { NotFoundPage } from '@/pages/not-found'

const CocktailPageRoute = () => {
  const { cocktailCode } = useParams()

  if (!cocktailCode || !cocktailCodes.includes(cocktailCode)) {
    return <NotFoundPage/>
  }

  return <CocktailPage/>
}

export const AppRouter = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate to={`/${cocktailCodes[0]}`} replace/>}/>
        <Route path=":cocktailCode" element={<CocktailPageRoute/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
    </HashRouter>
  )
}