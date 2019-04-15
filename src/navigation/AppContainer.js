import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import AuthScreen from '../screens/AuthScreen';
import HomeScreen from '../screens/AppStack/HomeScreen';
import ExperienceLevelScreen from '../screens/WelcomeStack/ExperienceLevelScreen';

const AppStack = createStackNavigator(
    {
        Home: HomeScreen
    },
    {
        initialRouteName: 'Home'
    }
);

const WelcomeStack = createStackNavigator(
    {
        ExperienceLevel: ExperienceLevelScreen
    },
    {
        initialRouteName: 'ExperienceLevel',
        headerMode: 'none'
    }
);

const RootNavigator = createSwitchNavigator(
    {
        Auth: AuthScreen,
        App: AppStack,
        Welcome: WelcomeStack
    },
    {
        initialRouteName: 'Auth'
    }
);

export default createAppContainer(RootNavigator);
