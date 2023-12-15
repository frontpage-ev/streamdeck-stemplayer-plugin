/// <reference path="libs/js/action.js" />
/// <reference path="libs/js/stream-deck.js" />

const playAction = new Action('gg.frontpage.streamdeck-stemplayer.play')
const stopAction = new Action('gg.frontpage.streamdeck-stemplayer.stop')
const toggleAction = new Action('gg.frontpage.streamdeck-stemplayer.toggle')

const socket = io('http://localhost:3123')

/**
 * The first event fired when Stream Deck starts
 */
$SD.onConnected(({ actionInfo, appInfo, connection, messageType, port, uuid }) => {
    console.log('Stream Deck connected!')
})

playAction.onKeyUp(({ action, context, device, event, payload }) => {
    socket.emit('play', { action, context, device, event, payload })
})

stopAction.onKeyUp(({ action, context, device, event, payload }) => {
    socket.emit('stop', { action, context, device, event, payload })
})

toggleAction.onKeyUp(({ action, context, device, event, payload }) => {
    socket.emit('toggle', { action, context, device, event, payload })
})