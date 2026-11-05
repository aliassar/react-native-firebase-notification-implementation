# React Native Firebase Notifications Setup

A 2021 exercise in wiring Firebase Cloud Messaging and notifications into a React Native Android app, using the old `react-native-firebase` v5 library.

## What it does

The native Android side is configured; the JavaScript side is not.

- `package.json` depends on `react-native-firebase` ^5.4.2.
- `android/settings.gradle` and `android/app/build.gradle` include the library, `firebase-core` 16.0.9, `firebase-messaging` 18.0.0 and Play Services base, and apply the `com.google.gms.google-services` plugin.
- `MainApplication.java` registers `RNFirebasePackage`, `RNFirebaseNotificationsPackage` and `RNFirebaseMessagingPackage`.
- `AndroidManifest.xml` declares `RNFirebaseMessagingService` for `MESSAGING_EVENT` and requests `INTERNET`, `RECEIVE_BOOT_COMPLETED` and `VIBRATE`.
- `App.js` does not call any Firebase API. It is just a two-column `FlatList` of placeholder strings, so no token request, permission prompt or message listener is implemented in this repo.

There is no iOS Firebase setup (no `GoogleService-Info.plist` and no Podfile).

## Tech

React Native 0.59.8, React 16.8.3, `react-native-firebase` ^5.4.2 (the deprecated pre-`@react-native-firebase` package).

## Run it

This is an old React Native version (0.59). To get actual notifications you would need your own Firebase project and your own `android/app/google-services.json` for package `com.implementfirebase`; the one in the repo belongs to the original author's project.

```sh
yarn install
yarn start
# in another terminal, with a device or emulator
npx react-native run-android
```
