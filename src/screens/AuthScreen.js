import React from 'react';
import {
    View,
    StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import {
    Input,
    Text,
    Icon,
} from 'react-native-elements';
import PrimaryButton from '../components/patterns/PrimaryButton';

import BackgroundStyles from '../styles/BackgroundStyles';
import LayoutStyles from '../styles/LayoutStyles';
import SpacingStyles from '../styles/SpacingStyles';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';
import Typography from '../constants/Typography';

export default function AuthScreen(props) {
    function goToHome() {
        props.navigation.navigate('Home')
    }

    return (
        <SafeAreaView style={styles.page}>
            <View style={styles.container}>
                <Text h1 style={styles.title}>PUMPT</Text>
                <View style={styles.loginBox}>
                    <Input
                        containerStyle={styles.input}
                        label="Email"
                        leftIcon={
                            <Icon
                                name='email'
                                size={24}
                            />
                        }
                    />
                    <Input
                        containerStyle={styles.input}
                        label="Password"
                        leftIcon={
                            <Icon
                                name='lock'
                                size={24}
                            />
                        }
                    />
                    <Input
                        containerStyle={styles.input}
                        label="Confirm"
                        leftIcon={
                            <Icon
                                name='lock'
                                size={24}
                            />
                        }
                    />
                </View>
                <PrimaryButton
                    onPress={goToHome}
                    buttonStyle={styles.button}
                    title="GO"
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    page: StyleSheet.flatten([
        BackgroundStyles.pageBackground,
        { 
            flex: 1,
        },
    ]),
    container: StyleSheet.flatten([
        LayoutStyles.vertical,
        SpacingStyles['m-l-xl'],
        SpacingStyles['m-r-xl'],
        {
            flex: 1,
            justifyContent: 'center',
        },
    ]),
    title: StyleSheet.flatten([
        SpacingStyles['m-b-lg'],
        {
            fontFamily: Typography.primaryBlackItalic,
            color: Colors.primary,
        }
    ]),
    loginBox: StyleSheet.flatten([
        SpacingStyles['m-b-lg'],
        SpacingStyles['p-a-lg'],
        LayoutStyles.vertical,
        {
            width: '100%',
            backgroundColor: Colors.light,
            borderRadius: 20,
        }
    ]),
    input: StyleSheet.flatten([
        SpacingStyles['m-b-lg'],
    ]),
    button: {
        borderRadius: 20,
    }
});
