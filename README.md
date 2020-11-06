apk: https://drive.google.com/file/d/1OoP7MLYmmJ6lxZnGaY6HRfIb9_KQDrNO/view?usp=sharing

# Step 1
generate project by running the commain `react-native init ProjectName`

# Step 2
cd into the project and add libraries thru `yarn`:  
- `@react-native-community/masked-view` - required by `@react-navigation/stack`
- `@react-navigation/native` - core navigation system
- `@react-navigation/stack` - stack navigation (not drawer, not tab)
- `axios` - calling http resources
- `moment` - manipulating date and time, in this case, i'm using this to generate a random Id for each created News object
- `react-native-gesture-handler` - required by `@react-navigation/native`
- `react-native-keyboard-aware-scroll-view` - handling virtual keyboard so as to not cover the text inputs
- `react-native-paper` - UI library  based on Material Design
- `react-native-reanimated` - required by `@react-navigation/native`
- `react-native-safe-area-context` - required by `@react-navigation/native`
- `react-native-screens` - required by `@react-navigation/native`
- `react-native-vector-icons` - required by `react-native-paper`
- `react-redux` - redux bridge specifically for React
- `redux` - state management
- `redux-saga` - handle asynchronous calls
- `reduxsauce` - helper library for redux
- `seamless-immutable` - helper library for redux

# Step 3
prepare the `src` directory structure  
- /components - contains all the small and reusable components like Button, TextInput, etc
- /images - contains image files like application logo
- /navigation - contains the navigation stacks e.g AuthStack and HomeStack
- /screens - contains all the screen files like Login, Registration, Home, etc
- /services - contains helper files like API (wrapper for all REST calls) and Navigation (small helper to allow navigation outside a navigation stack)
- /store - contains the whole state management setups, actions, reducers, sagas
- /themes - contains application-wide colors, metrics and image resources
- /utils - utility functions like ID generator, etc

# Step 4
- setup stack navigations: AuthStack and HomeStack
- AuthStack is going to contain the screens for unauthenticated users, while HomeStack contains the opposite
- create some screens and components and wire them up with the navigation stacks

# Step 5
- setup redux state management
- create `Actions`
- create and combine `Reducers`
- create `Sagas`
- create the store by using `createStore` and supplying the rootReducer and applying the saga middleware
- run each saga via the saga middleware instance
- wrap the entire component (usually in index.js) with the `Provider` component from `react-redux` while supplying a store prop which i created from the previous line

# Step 6
wire up the screens the needs to access the global state by via the `connect` component from `react-redux` and mapping the redux states and dispatching them in each screens

# Step 7
perform QA

# Step 8
build the APK by running the command `react-native run-android --variant=release`
