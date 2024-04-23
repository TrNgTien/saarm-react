import { ReduxActionTypes } from '@/common/redux';
import {
  AnyAction,
  combineReducers,
  configureStore,
  Reducer,
} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import {
  configReducer,
  fileUploadReducer,
  formReducer,
  infiniteTableReducer,
  inquiryReducer,
  routeReducer,
  toolbarReducer,
  userReducer,
} from './slices';

//----------------------------------------------------------------------------
// Combine reducers
const appReducer = combineReducers({
  config: configReducer,
  fileUpload: fileUploadReducer,
  form: formReducer,
  infiniteTable: infiniteTableReducer,
  inquiry: inquiryReducer,
  route: routeReducer,
  toolbar: toolbarReducer,
  user: userReducer,
});

//----------------------------------------------------------------------------
// Create saga middleware
const sagaMiddleware = createSagaMiddleware();

//----------------------------------------------------------------------------
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof appReducer>;

//----------------------------------------------------------------------------
// Reset store after logout
const rootReducer: Reducer = (state: RootState, action: AnyAction) => {
  if (action.type === ReduxActionTypes.RESET_APP) {
    state = {} as RootState;
  }
  return appReducer(state, action);
};

//----------------------------------------------------------------------------
// Create store
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware: () => string | any[]) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

//----------------------------------------------------------------------------
// Run saga
sagaMiddleware.run(rootSaga);

//----------------------------------------------------------------------------
// Inferred type
export type AppDispatch = typeof store.dispatch;
