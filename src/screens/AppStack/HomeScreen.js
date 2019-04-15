import React from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import LayoutStyles from '../../styles/LayoutStyles';

export default function HomeScreen(props) {
    return (
        <SafeAreaView style={LayoutStyles.page}>
            <Text h1>Home</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
});
