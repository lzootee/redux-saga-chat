import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import Api from './Api';
import socketIO from '../socket/socket';
import * as types from '../user/constants';
import * as socket_types from '../socket/constants';


// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUser(action) {
    try {
        const user = yield call(Api.login, action.payload.username, action.payload.password);
        yield put({ type: types.LOGIN_SUCCESS, user: user });
    } catch (e) {
        yield put({ type: types.LOGIN_FAILED, message: e });
    }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* mySaga() {
    yield takeEvery(types.LOGIN, fetchUser);
    yield takeEvery(socket_types.CONNECT_SOCKET, connectSocket);
    yield takeEvery(types.GET_LIST_FRIENDS, getListFriends);
}


// Connect Socket
function* connectSocket(action) {
  try {
    const socket = yield call(socketIO.connect, action.payload.token);
    console.log(socket);
    yield put({ type: socket_types.SOCKET_CONNECTED, socket: socket });
  } catch (e) {
    console.log(e);
    yield put({ type: types.LOGIN_FAILED, message: e });
  }
}

function* getListFriends(action) {
  try {
    yield call(socketIO.getFriends, action.payload.socket);
  } catch (e) {
    yield put({ type: types.LOGIN_FAILED, message: e });
  }
}


/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/

export default mySaga;