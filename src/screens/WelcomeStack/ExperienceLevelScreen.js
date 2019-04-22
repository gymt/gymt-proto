import React from 'react';
import {
    View,
    StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import {
    Text,
} from 'react-native-elements';
import ExperienceLevel from '../../components/WelcomeStack/ExperienceLevel';
import LayoutStyles from '../../styles/LayoutStyles';
import Colors from '../../constants/Colors';
import SpacingStyles from '../../styles/SpacingStyles';

const EXPERIENCE_LEVELS = [
    {
        title: 'New to fitness',
        description: `0-1 years experience\n\nIt's been a while since I was fit.`,
    },
    {
        title: 'Intermediate',
        description: `2-3 years experience`,
    },
    {
        title: 'Advanced',
        description: '4+ years of experience\n\nI am veteran at strength training.',
    },
];

export default function ExperienceLevelScreen(props) {
    return (
        <SafeAreaView style={LayoutStyles.page}>
            <View style={LayoutStyles.pageContainer}>
                <Text h3 style={styles.title}>What is your experience level?</Text>
                <View style={styles.options}>
                    { EXPERIENCE_LEVELS.map(({ title, description }, i) => (
                        <ExperienceLevel
                            key={i}
                            title={title}
                            description={description}
                            containerStyle={styles.option}
                        />
                    )) }
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    title: StyleSheet.flatten([
        SpacingStyles['m-b-xl'],
        {
            color: Colors.light,
        },
    ]),
    options: {
        flex: 1,
    },
    option: StyleSheet.flatten([
        SpacingStyles['m-b-md'],
        {
            flex: 1,
        },
    ])
});
