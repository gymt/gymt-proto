import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome'
import PrimaryButton from '../components/patterns/PrimaryButton';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';

export default function HomeScreen(props) {
    function goToLifts() {
        props.navigation.navigate('Lifts')
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <PrimaryButton
                    containerStyle={styles.tile}
                    buttonStyle={styles.button}
                    icon={<Icon name="space-shuttle" color={Colors.pureWhite} size={64} />}
                    title="WORK OUT"
                    onPress={goToLifts}
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
                    containerStyle={{ ...styles.tile, paddingBottom: Layout.spacing.xl }}
                    buttonStyle={styles.button}
                    icon={<Icon name="area-chart" color={Colors.pureWhite} size={64} />}
                    title="STATS"
                    titleProps={{ h1: true }}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.dark
    },
    button: {
        flexDirection: 'column',
        height: '100%'
    },
    tile: {
        flex: 1,
        paddingTop: Layout.spacing.xl,
        paddingLeft: Layout.spacing.xl,
        paddingRight: Layout.spacing.xl
    }
});
