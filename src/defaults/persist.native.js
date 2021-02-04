// @flow
// $FlowIgnore
import { persistStore } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage'
export default (store: any, options: {}, callback: any) =>
  // $FlowFixMe
  persistStore(store, { storage: AsyncStorage, ...options }, callback)
