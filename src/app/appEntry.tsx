import 'modern-normalize/modern-normalize.css'
import '@/app/styles/globals.scss'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { store } from '@/shared/redux'
import { AppRouter } from '@/app/routes/AppRouter.tsx'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <AppRouter/>
    </Provider>
  </StrictMode>,
)
