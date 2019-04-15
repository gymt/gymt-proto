import React from 'react';
import {
    AppLoading, Asset, Font,
} from 'expo';
import { ThemeProvider } from 'react-native-elements';
import AppContainer from './navigation/AppContainer';
import Theme from './constants/Theme';
import Typography from './constants/Typography';

export default class Gymt extends React.Component {
  state = {
      isLoadingComplete: false,
  };

  render() {
      if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
          return (
              <AppLoading
                  startAsync={this._loadResourcesAsync}
                  onError={this._handleLoadingError}
                  onFinish={this._handleFinishLoading}
              />
          );
      }
      return (
          <ThemeProvider theme={Theme}>
              <AppContainer />
          </ThemeProvider>
      );
  }

  _loadResourcesAsync = async () => Promise.all([
      Asset.loadAsync([
          /* TODO prelaod any static images used in app */
          // require('./assets/images/robot-dev.png'),
      ]),
      Font.loadAsync({
          /* TODO import all the Raleway font faces */
          [Typography.primaryBlack]: require('./assets/fonts/Raleway-Black.ttf'),
          [Typography.primaryBlackItalic]: require('./assets/fonts/Raleway-BlackItalic.ttf'),
          [Typography.primaryBold]: require('./assets/fonts/Raleway-Bold.ttf'),
          [Typography.primaryBoldItalic]: require('./assets/fonts/Raleway-BoldItalic.ttf'),
          [Typography.primary]: require('./assets/fonts/Raleway-Regular.ttf'),
          [Typography.primaryItalic]: require('./assets/fonts/Raleway-Italic.ttf'),
      }),
  ]);

  _handleLoadingError = (error) => {
      // In this case, you might want to report the error to your error
      // reporting service, for example Sentry
      console.warn(error);
  };

  _handleFinishLoading = () => {
      this.setState({ isLoadingComplete: true });
  };
}
