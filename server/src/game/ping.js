const { when } = require('k-ramel')

module.exports = [
  when('@@game/ping')(({ socketId }, store, { io }) => {
    io.emit(socketId)({ type: '@@game/ping', payload: Date.now() })
  }),
]
