// import { Authentication, SagaConst } from '@/constants/common';
// import { AuthService } from '@/services/auth.service';
// import { getError } from '@/utils/error.util';
// import { eventChannel as EventChannel } from 'redux-saga';
// import { call, fork, put, take, takeEvery } from 'redux-saga/effects';
// import io, { Socket } from 'socket.io-client';

//-------------------------------------------------------------------------
// let socketInstance: Socket | null;

//-------------------------------------------------------------------------
// const connect = (socketProps: any) => {
  // const { host, options = {} } = socketProps;
  // if (!socketProps?.host) {
  //   throw new Error('Invalid Socket IO Props!');
  // }
  // socketInstance = io(host, { ...options });
// };

//-------------------------------------------------------------------------
// const on = (opts: { socket: Socket; event: string; action: string }) => {
  // const { socket, event, action } = opts;
  //
  // return EventChannel((dispatch: any) => {
  //   const fwAction = action ?? event;
  //   socket.on(event, (message: Buffer) => {
  //     dispatch({ type: fwAction, payload: { event, message } });
  //   });
  //
  //   return () => {
  //     socket.off(event);
  //   };
  // });
// };

//-------------------------------------------------------------------------
// function* listen(props: any) {
  // const channel: ReturnType<typeof on> = yield call(on, props);
  //
  // try {
  //   while (true) {
  //     const action: ReturnType<typeof take> = yield take(channel);
  //
  //     yield put(action);
  //   }
  // } finally {
  //   console.log(props, ' is terminated!');
  // }
// }

//-------------------------------------------------------------------------
// function* onSocketConnected() {
// yield takeEvery(SagaConst.CONNECT, function* (action) {
// yield call(console.log, '[onSocketConnected] Action: ', action);
// });
// }

//-------------------------------------------------------------------------
// function* onSocketPing() {
//   yield takeEvery(SagaConst.PING, function* (action) {
//     yield call(console.log, '[onSocketPing] Action: ', action);
//   });
// }

//-------------------------------------------------------------------------
// function* establish() {
  // yield takeEvery(SagaConst.SOCKET_ESTABLISH, function* () {
  //   const authService = AuthService.getInstance();
  //
  //   const authToken = authService.getAuthToken();
  //
  //   if (isEmpty(authToken?.value)) {
  //     throw getError({
  //       message: '[establish] Invalid auth token to establish market stream!',
  //       statusCode: 401,
  //     });
  //   }
  //
  //   yield call(connect, {
  //     host: SagaConst.HOST,
  //     options: {
  //       path: SagaConst.STREAM,
  //       forceJSONP: true,
  //       extraHeaders: {
  //         Authorization: `${Authentication.TYPE_BEARER} ${authToken.value}`,
  //       },
  //     },
  //   });
  //
  //   if (!socketInstance) {
  //     console.error('Failed to initialize socket!');
  //     return;
  //   }
  //
  //   //Events
  //   const events = [{ event: SagaConst.CONNECT }, { event: SagaConst.PING }];
  //
  //   for (const el of events) {
  //     yield fork(listen, { socketInstance, ...el });
  //   }
  // });
// }

//-------------------------------------------------------------------------
export default function* sagas() {
  // yield fork(establish);

  //Events
  // yield fork(onSocketConnected)
  // yield fork(onSocketPing)
}
