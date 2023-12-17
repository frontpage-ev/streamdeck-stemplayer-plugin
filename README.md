# Stem Player for Stream Deck Plugin

> [!IMPORTANT]
> This software is just the Stream Deck Plugin. You need
> the [Stem Player](https://github.com/frontpage-ev/streamdeck-stemplayer) too to use it.

![Stem Player for Stream Deck](https://wiki.frontpage.gg/software/zqm99x0aod.png)

## Documentation

The documentation for the Stem Player for Stream Deck is
available [here](https://wiki.frontpage.gg/de/voc/software/streamdeck-stemplayer).

## Features

- Stop playback of current stem
- Toggle play/pause of current stem
- Play specific stem

## Quick Start Guide

A short guide to help you get started quickly.

### Clone the repo

```git clone https://github.com/elgatosf/streamdeck-plugin-template```

### Replace Name

Rename the folder as well as any references.

`gg.frontpage.streamdeck-stemplayer.sdPlugin` with `my.domain.plugin-name.sdPlugin`

> [!IMPORTANT]  
> When sym-linking the plugin, the folder name must end with `.sdPlugin`.

### Get the latest library

You can either clone the javascript library or add it as a submodule to your repository.

#### Clone

```git clone https://github.com/elgatosf/streamdeck-javascript-sdk src/my.domain.plugin-name/libs```

#### Add Submodule

```git submodule add https://github.com/elgatosf/streamdeck-javascript-sdk src/my.domain.plugin-name/libs```

### Start Coding

You can get started in app.js!

```javascript
const myAction = new Action('gg.frontpage.streamdeck-stemplayer.play');

/**
 * The first event fired when Stream Deck starts
 */
$SD.onConnected(({ actionInfo, appInfo, connection, messageType, port, uuid }) => {
  console.log('Stream Deck connected!');
});

myAction.onKeyUp(({ action, context, device, event, payload }) => {
  console.log('Your key code goes here!');
});

myAction.onDialRotate(({ action, context, device, event, payload }) => {
  console.log('Your dial code goes here!');
});
```

### Symbink


```
mklink /D C:\Users\%USERNAME%\AppData\Roaming\Elgato\StreamDeck\Plugins\gg.frontpage.streamdeck-stemplayer.sdPlugin %cd%\src\gg.frontpage.streamdeck-stemplayer.sdPlugin
```


## Documentation

- Nur ein Stem kann gleichzeitig aktiv sein




- Track
- Loop Start: 10.
- Loop End: null

- Sampels