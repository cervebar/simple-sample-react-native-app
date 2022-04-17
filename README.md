# simple-sample-react-native-app
## setup
[https://reactnative.dev/docs/environment-setup](https://reactnative.dev/docs/environment-setup)
- node v 16.4.2

## run
bundler
```
npx react-native start
```

Android
```
npx react-native run-android
```

ios
```
npx react-native run-ios
```

### dev
run Metro bundler
```
 npx react-native start
```
```
REACT_DEBUGGER="open -g 'rndebugger://set-debugger-loc?port=8081' ||" npx react-native run-ios
```

### troubleshooting

clear all and do fresh build:
```
watchman watch-del-all && rm -rf node_modules/ && yarn cache clean && yarn install && yarn start --reset-cache
```
