import { spawn } from 'redux-saga/effects';
import socketSaga from './socket.saga';

export default function* rootSaga() {
  yield spawn(socketSaga);
}
