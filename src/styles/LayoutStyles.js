import { StyleSheet } from 'react-native';
import BackgroundStyles from './BackgroundStyles';
import SpacingStyles from './SpacingStyles';

export default StyleSheet.create({
    placeContentCenter: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    page: StyleSheet.flatten([
        BackgroundStyles.pageBackground,
        { 
            flex: 1,
        },
    ]),
    pageContainer: StyleSheet.flatten([
        SpacingStyles['m-a-lg'],
        { 
            flex: 1,
        },
    ]),
})
