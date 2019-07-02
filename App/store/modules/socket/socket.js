import io from 'socket.io-client';
import * as user_types from '../user/constants'


var socket;

const Socket = function (token) {
  socket = io('http://localhost:3000', {
    query: { token: token },
    forceNew: true,
    jsonp: false,
    reconnection: true,
    reconnectionDelay: 100,
    reconnectionAttempts: 100000,
    transports: ['websocket']
  });
  
  socket.on('list-friends', function (list) {
    console.log(list);
  });

  return socket;
}

export const getFriends = function (socket) {
  socket.emit("list-friends");
}
export default Socket;