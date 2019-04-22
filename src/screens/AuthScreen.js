import React from 'react';
import {
    View,
    StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import {
    Input,
    Button,
    Text,
    Icon,
} from 'react-native-elements';
import LayoutStyles from '../styles/LayoutStyles';
import SpacingStyles from '../styles/SpacingStyles';
import Colors from '../constants/Colors';
import Typography from '../constants/Typography';

export default function AuthScreen(props) {
    function go() {
        // TODO
        const IS_FIRST_TIME_USER = true;

        if (IS_FIRST_TIME_USER) {
            props.navigation.navigate('Welcome')
        } else {
            props.navigation.navigate('App')
        }
    }

    return (
        <SafeAreaView style={LayoutStyles.page}>
            <View style={LayoutStyles.pageContainer}>
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
                <Button
                    onPress={go}
                    title="GO"
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
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
});
