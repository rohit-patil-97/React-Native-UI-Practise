# React-Native-UI-Practise
project use to make practice in react navive with demo componets

## Installation
- [Node.js](https://nodejs.org/en/) > 12 and npm (Recommended: Use nvm)
- [Watchman](https://facebook.github.io/watchman/)
- [Xcode 12](https://developer.apple.com/xcode/)
- [Cocoapods](https://cocoapods.org/) 1.10.1
- [JDK](https://www.oracle.com/java/technologies/downloads/#java11) > 11
- [Android Studio and Android SDK](https://developer.android.com/studio)

## Base Dependency
- [prop-types](https://github.com/facebook/prop-types) to type-check our components exposed properties.
- [react-native-config](https://github.com/luggit/react-native-config) to manage envionments.
- [react-navigation](https://reactnavigation.org/) navigation library.
- [react-native-localization](https://github.com/stefalda/ReactNativeLocalization) for string localization.

## Project structure 
- public directory 
    - all the font and assets is store in this directory.   
- src directory 
    - src 
        - assets
            - having all Images and fonts in this directory
        - component
            - CommonComponets 
                - All the common controlls like input button dropdowns are store in this component
            - ScreenComponents
                - screen regarding specific componet is store in this directory
        - screen 
            - specific screens are store in this directory like home profile details etc.   
        - navigation 
            - All the navigation logic having in this directory. how to navigate one screen to anothe screen
