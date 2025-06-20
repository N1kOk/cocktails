import { combineSlices } from '@reduxjs/toolkit'

/* eslint-disable @typescript-eslint/no-empty-object-type */
export interface LazyLoadedSlices {}

export const rootReducer = combineSlices().withLazyLoadedSlices<LazyLoadedSlices>()
