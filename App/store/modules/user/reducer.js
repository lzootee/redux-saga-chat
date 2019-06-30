import {Alert} from 'react-native';
import { handleActions } from 'redux-actions'
import { LOGIN, LOGOUT, LOGIN_SUCCESS, LOGIN_FAILED, LIST_FRIENDS } from './constants'

export type UserState = {
  loggedIn: boolean,
  fullName: string,
  token: string,
  email: string,
  friends: []
}

const initialState: UserState = {
  loggedIn: false,
  fullName: '',
  token: '',
  email: '',
  friends: []
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
    [LIST_FRIENDS]: (state: UserState = initialState, action): UserState => {
      console.log(action);
      return {
        
      }
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
