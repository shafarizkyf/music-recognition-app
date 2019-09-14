import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import SingleResultScreen from './src/screens/SingleResultScreen';
import GridResultScreen from './src/screens/GridResultScreen';

const App = createStackNavigator({
  HomeScreen: {
    screen: HomeScreen,
  },
  SingleResultScreen: {
    screen: SingleResultScreen,
  },
  GridResultScreen: {
    screen: GridResultScreen,
  },
}, {
  initialRouteName: 'HomeScreen',
  defaultNavigationOptions: {
    headerTransparent: true
  }
});

export default createAppContainer(App);