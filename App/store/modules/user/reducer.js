import {Alert} from 'react-native';
import { handleActions } from 'redux-actions'
import { LOGIN, LOGOUT, LOGIN_SUCCESS, LOGIN_FAILED, LIST_FRIENDS, CONNECT_SOCKET_SUCESS } from './constants'

export type UserState = {
  loggedIn: boolean,
  fullName: string,
  token: string,
  email: string,
  friends: [],
  socket: Object
}

const initialState: UserState = {
  loggedIn: false,
  fullName: '',
  token: '',
  email: '',
  friends: [],
  socket: Object
}

export default handleActions(
  {
    [LOGIN_SUCCESS]: (state: UserState = initialState, action): UserState => {
      return {
        loggedIn: true,
        token: action.user.access_token
      }
    },
    [LOGIN_FAILED]: (state: UserState = initialState, action): UserState => {
      console.log(action);
      Alert.alert(
        'LOGIN NHU CC',
        'LOGIN THAT BAI',
        [
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        {cancelable: false},
      );
      return {}
    },
    [CONNECT_SOCKET_SUCESS]: (state: UserState = initialState, action): UserState => {
      console.log('CONNECT SOCKET SUCCESS', state);
      return {
        loggedIn: state.loggedIn,
        token: state.token,
        socket: action.socket
      }
    },
    [LIST_FRIENDS]: (state: UserState = initialState, action): UserState => {
      console.log('GET LIST FRIEND');
      return initialState
    },
    [LOGOUT]: (): UserState => {
      return {
        loggedIn: false,
        token: ''
      }
    }
  },
  initialState
)
