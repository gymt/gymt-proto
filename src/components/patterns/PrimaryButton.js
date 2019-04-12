import React from 'react';
import { Button } from 'react-native-elements';
import LinearGradient from 'expo';
import Colors from '../../constants/Colors';

export default (props) => <Button
  ViewComponent={LinearGradient}
  linearGradientProps={{
    colors: [Colors.primary, Colors.tertiary],
    start: { x: 0.5, y: 0.5 },
    end: { x: 1, y: 0 },
  }}
  {...props}
/>
