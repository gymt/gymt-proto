import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import AuthScreen from '../screens/AuthScreen';
import HomeScreen from '../screens/HomeScreen';

const SwitchNavigatorConfig = {
    initialRouteName: 'Auth'
};

const RouteConfig = {
    Auth: AuthScreen,
    Home: HomeScreen
};

const SwitchNavigator = createSwitchNavigator(RouteConfig, SwitchNavigatorConfig);

export default createAppContainer(SwitchNavigator);
