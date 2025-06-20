import { Provider } from 'react-redux'
import { store } from '@/shared/redux'
import { AppRouter } from '@/app/routes/AppRouter.tsx'

function App() {
  return (
    <Provider store={store}>
      <AppRouter/>
    </Provider>
  )
}

export default App
