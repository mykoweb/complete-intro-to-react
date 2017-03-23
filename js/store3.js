import { createStore, compose } from 'redux'
import rootReducer from './reducers3'

const store = createStore(rootReducer, compose(
  // If we are in a Browser and Redux DevTools are avail, run the DevTools
  typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : (f) => f
))

export default store
