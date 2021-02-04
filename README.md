```js
Fixed work for react native support

example:
import { createStore, applyMiddleware } from 'redux'
import AsyncStorage from '@react-native-community/async-storage'
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistStore, persistReducer } from 'redux-persist'
import thunk from 'redux-thunk'
import reducer from '@/reducers'

import { createOffline } from '@vahesaroyan/redux-offline'
import offlineConfig from '@vahesaroyan/redux-offline/lib/defaults/index'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}

const {
  middleware: offlineMiddleware,
  enhanceReducer: offlineEnhanceReducer,
  enhanceStore: offlineEnhanceStore,
} = createOffline({
  ...offlineConfig,
  persist: false,
})

const persistedReducer = persistReducer(
  persistConfig,
  offlineEnhanceReducer(reducer),
)

const store = createStore(
  persistedReducer,
  composeWithDevTools(
    offlineEnhanceStore,
    applyMiddleware(thunk, offlineMiddleware),
  ),
)
const persistor = persistStore(store)

export { store, persistor }

```
