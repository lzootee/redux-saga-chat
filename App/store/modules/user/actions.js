import * as types from './constants'
import * as socket_types from '../socket/constants';

/**
 * Sign in.
 * @param {string} username 
 * @param {string} password
 */
export const login = (username: string, password: string) => {
  // async call
  return {
    type: types.LOGIN,
    payload: {
      username: username,
      password: password
    }
  }
}

/**
 * Sign out.
 */
export const logout = () => {
  // direct/sync call
  return {
    type: types.LOGOUT
  }
}

export const socket = (token) => {
  return {
    type: socket_types.CONNECT_SOCKET,
    payload: {
      token: token
    }
  }
}

export const getFriends = (socket) => {
  return {
    type: types.GET_LIST_FRIENDS,
    payload: {
      socket: socket.socket
    }
  }
}
