import { ReduxActionTypes } from '@/common/redux';
import {
  Reducer,
  UnknownAction,
  combineReducers,
  configureStore,
} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import { detectionReducer, roomReducer, userReducer } from './slices';

//----------------------------------------------------------------------------
// Combine reducers
const appReducer = combineReducers({
  user: userReducer,
  room: roomReducer,
  detection: detectionReducer,
});

//----------------------------------------------------------------------------
// Create saga middleware
const sagaMiddleware = createSagaMiddleware();

//----------------------------------------------------------------------------
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof appReducer>;

//----------------------------------------------------------------------------
// Reset store after logout
const rootReducer: Reducer = (state: RootState, action: UnknownAction) => {
  if (action.type === ReduxActionTypes.RESET_APP) {
    state = {} as RootState;
  }
  return appReducer(state, action);
};

//----------------------------------------------------------------------------
// Create store
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

//----------------------------------------------------------------------------
// Run saga
sagaMiddleware.run(rootSaga);

//----------------------------------------------------------------------------
// Inferred type
export type AppDispatch = typeof store.dispatch;
