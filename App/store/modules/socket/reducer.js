import { handleActions } from 'redux-actions'
import { SOCKET_CONNECTED, SOCKET_DISCONNECTED } from './constants';

export type SocketState = {
    connected: Boolean,
    socket: null
}

const initialState: SocketState = {
    connected: Boolean,
    socket: null
}

export default handleActions(
    {
        [SOCKET_CONNECTED]: (state: SocketState = initialState, action): SocketState => {
            console.log(action.socket);
            return {
                connected: true,
                socket: action.socket
            }
        },
        [SOCKET_DISCONNECTED]: (state: SocketState = initialState, action): SocketState => {
            return {
                connected: false,
                socket: null
            }
        },
    },
    initialState
)
