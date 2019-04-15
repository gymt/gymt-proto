import React from 'react';
import {
    View,
    StyleSheet,
    Platform,
    TouchableNativeFeedback,
    TouchableOpacity,
} from 'react-native';
import {
    Text,
    Button,
} from 'react-native-elements';
import SpacingStyles from '../../styles/SpacingStyles';
import Colors from '../../constants/Colors';

export default function ExperienceLevel({ title, description, onPress, containerStyle }) {
    const TouchableComponent = Platform.select({
        android: TouchableNativeFeedback,
        default: TouchableOpacity,
    });

    return (
        <View style={[styles.container, containerStyle]}>
            <TouchableComponent
                onPress={onPress}
                activeOpacity={0.3}
            >
                <View style={styles.button}>
                    <Text h3 style={styles.title}>{ title }</Text>
                    <Text style={styles.desciption}>{ description }</Text>
                </View>
            </TouchableComponent>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 3,
        backgroundColor: Colors.primary,
    },
    button: StyleSheet.flatten([
        SpacingStyles['p-a-md'],
        {
            justifyContent: 'center',
        },
    ]),
    title: StyleSheet.flatten([
        SpacingStyles['p-b-md'],
        {
            color: Colors.light,
        },
    ]),
    desciption: {
        color: Colors.light,
    },
});
