CloudMTD
=====================

HTML5 Cross-platform bus tracking app for CUMTD in Champaign-Urbana, IL.

## Getting dependencies

CloudMTD uses cordova and ionic framework (which utilizes angularjs).
Oh and of course you'll need node.js

First clone the repo from GitHub, then run:

```bash
$ cd cloudmtd
$ sudo npm install -g cordova ionic
$ npm install
```

## Testing the app
On a web browser
```bash
$ ionic serve
```

With emulators
```bash
$ ionic platform android
$ ionic build android
$ ionic emulate android
```

As a native app
```bash
$ ionic run android
```

Switch android to other platforms supported by cordova as needed.

## Building binaries

Refer to http://ionicframework.com/docs/guide/publishing.html
