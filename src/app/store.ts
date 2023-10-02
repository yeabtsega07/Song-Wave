/* eslint-disable prettier/prettier */
import { configureStore} from "@reduxjs/toolkit"
import createSagaMiddleware from 'redux-saga'
import songReducer from '../features/song/songSlice'
import modalReducer, { modal2Reducer } from '../features/modal/ModalSlice'
import songSaga from '../features/saga/songSaga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    song: songReducer,
    modal: modalReducer,
    modal2: modal2Reducer
  },
  middleware: [sagaMiddleware]
})

sagaMiddleware.run(songSaga);
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
