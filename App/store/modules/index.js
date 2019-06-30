import { UserState, user } from './user'
import { AppState, app } from './app'
import { SocketState, socket } from './socket'

/**
 * Root states.
 */
export type States = {
  app: AppState,
  user: UserState,
  socket: SocketState
}

/**
 * Root reducers.
 */
export const reducers = {
  app: app.reducer,
  user: user.reducer,
  socket: socket.reducer
}

/**
 * Root actions.
 */
export const actions = {
  app: app.actions,
  user: user.actions
}

export { app, user }
