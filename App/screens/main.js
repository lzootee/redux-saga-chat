import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { actions, States } from '../store'
import { Login } from './login'
import { Button } from '../components'

/**
 * Main component. Display greeting when user is logged in,
 * otherwise it will display the login screen.
 * 
 * @class App
 * @extends {Component}
 */
class App extends Component {

  render() {
    const { doLogout, connectSocket, getListFriends, loggedIn, fullName, token } = this.props
		// Display login screen when user is not logged in
    if (!loggedIn) {
      return (
        <View style={{justifyContent: 'center', flex: 1}}>
          <Text style={{textAlign: 'center', color: '#c89123', fontSize: 20}}>Chat Hihi</Text>
          <Login />
        </View>
      )
    }

		// Display greeting with user full name displayed
    return (
      <View style={{justifyContent: 'center', flex: 1}}>
        <Text>Welcome {fullName}!</Text>
        <Button
          onPress={() => {
            connectSocket(token)
          }}
        >
          Add Friend
        </Button>
        <Button
          onPress={() => {
            getListFriends()
          }}
        >
          Get Friend
        </Button>
      </View>
    )
  }
}

export const Main = connect(

	// inject states to props
  (state: States) => ({
    loggedIn: state.user.loggedIn,
    fullName: state.user.fullName,
    token: state.user.token,
    email: state.user.email
	}),
	
  dispatch => ({
    doLogout: () => dispatch(actions.user.logout()),
    connectSocket: (token) => dispatch(actions.user.socket(token)),
    getListFriends: () => dispatch(actions.user.getFriends())
  })
)(App)
