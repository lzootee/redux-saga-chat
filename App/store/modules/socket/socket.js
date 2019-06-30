import io from 'socket.io-client';
import * as types from './constants'
import * as user_types from '../user/constants'

const init = (token) => {
  let socket = io('http://localhost:3000', {
    query: { token: token },
    forceNew: true,
    jsonp: false,
    reconnection: true,
    reconnectionDelay: 100,
    reconnectionAttempts: 100000,
    transports: ['websocket']
  });

  socket.on('list-friends', (list) => {
    console.log(list);
  });

  return socket;
}

const Socket = {
  connect: (token) => {
    return init(token);
  },
  getFriends: (socket) => {
    socket.emit('list-friends');
    return true;
  }
}

export default Socket;