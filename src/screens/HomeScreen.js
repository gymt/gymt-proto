import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome'
import PrimaryButton from '../components/patterns/PrimaryButton';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';

import BackgroundStyles from '../styles/BackgroundStyles';
import LayoutStyles from '../styles/LayoutStyles';
import SpacingStyles from '../styles/SpacingStyles';

export default function HomeScreen(props) {
    return (
        <SafeAreaView style={styles.page}>
            <PrimaryButton
                containerStyle={styles.tile}
                buttonStyle={styles.button}
                icon={<Icon name="space-shuttle" color={Colors.pureWhite} size={64} />}
                title="WORK OUT"
                titleProps={{ h1: true }}
            />
            <PrimaryButton
                containerStyle={styles.tile}
                buttonStyle={styles.button}
                icon={<Icon name="pencil" color={Colors.pureWhite} size={64} />}
                title="PLAN"
                titleProps={{ h1: true }}
            />
            <PrimaryButton
                containerStyle={styles.tile}
                buttonStyle={styles.button}
                icon={<Icon name="area-chart" color={Colors.pureWhite} size={64} />}
                title="STATS"
                titleProps={{ h1: true }}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    page: StyleSheet.flatten([
        LayoutStyles.vertical,
        BackgroundStyles.pageBackground,
        { 
            flex: 1,
        },
    ]),
    button: {
        flexDirection: 'column',
        height: '100%'
    },
    tile: StyleSheet.flatten([
        SpacingStyles['m-a-lg'],
        {
            backgroundColor: 'transparent',
            flex: 1
        }
    ])
});
