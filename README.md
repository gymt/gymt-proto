### Gymt Native iOS App

Written in React Native via _Expo_.

## Intro

_Expo_ is a CLI for React Native development, as well as a self-contained development workflow tool. It's pretty cool, lets you preview the native app you are developing right on your phone. That way I can avoid installing XCode and an iPhone emulator. 

When you start the development server, Expo will display a QR code. Opening this QR code with your iPhone will enable streaming your built code to the Expo Client app on your iPhone. You will need a (free) Expo account to take advantage of this development workflow.

I have yet to try developing with the iPhone emulator. Sometime when I crack open this repo on my Macbook I can take a look at what that takes. I know the Expo dev tools prompt you to launch the app on the emulator rather than via tunnel. I'm sure it's trivial but I have not tested it yet.

## Prerequisites

### NodeJS
Be sure NodeJS is on your machine. I am currently running Node 10.15.x.
Check your Node version with
```
node -v
```

### Global NPM packages
#### NPM

Verify NPM is installed globally. I am currently on npm 6.9.x.
Check your npm version with
```
npm -v
```
To update npm, use
```
npm install npm@latest -g
```

#### Expo CLI

Install the Expo CLI globally. I am currently on expo 2.14.0.
Check your Expo CLI version with
```
expo -V
```
(Note the capital "V" above). To update or install the Expo CLI, use
```
npm install expo-cli -g
```

As I mentioned, you will need a (free) Expo account to take advantage of the _Expo Client_ iOS app during development. [You can sign up here.](https://expo.io/signup)

#### Yarn

I prefer to use [Yarn](https://yarnpkg.com) over npm directly. If you don't have Yarn on your machine, you can [get an installer from yarnpkg.com](https://yarnpkg.com/en/docs/install#windows-stable)

You will need to download and install Yarn to use any Yarn command I use in this document, but it is not strictly required. Anything you do with Yarn can be done with npm.

### Expo Client
To develop on your iOS device you will need the _Expo Client_, available on the App Store, installed on your iPhone.

## Get started

* Clone this repository
* `cd` into the project folder
* `yarn install`
* `yarn start`
* The Expo web interface should automatically open in your web browser
* On your iPhone, in the camera app, scan the QR code displayed in the Expo web interface (it is also displayed in the console)
    * Sometimes I could not get the _Expo Client_ to see my app over the network in LAN mode. I think I might have a firewall issue as it is an uncommon port. In the Expo web interface you can set the connection mode to **Tunnel** and a new QR code will be generated. I was more successful with this connection.
* Use the app, and continue to make code changes. The app watches for changes and will "live reload" every time a file is saved and updated. 
* Keep an eye on the Expo web interface to see:
    * A console log for Metro Builder (the bundler for React Native)
    * A console log for your javascript session on the device. This can be likened to the browser console. You will see `console.log` results here as well as build/stream errors on behalf of Expo.