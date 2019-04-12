import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import LiftsScreen from '../screens/LiftsScreen';

export default createAppContainer(createSwitchNavigator({
    Home: HomeScreen,
    Lifts: LiftsScreen
}));