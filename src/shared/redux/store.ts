import { configureStore, createDynamicMiddleware } from '@reduxjs/toolkit'
import { rootReducer } from '@/shared/redux/rootReducer.ts'

export const dynamicMiddleware = createDynamicMiddleware()

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(dynamicMiddleware.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
