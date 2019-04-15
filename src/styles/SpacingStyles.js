import { StyleSheet } from 'react-native';
import Layout from '../constants/Layout';

const stylesObj = {};
const SIZES = ['xs', 'sm', 'md', 'lg', 'xl'];
const DIRECTIONS = {
    'a': '',
    'b': 'Bottom',
    't': 'Top',
    'l': 'Left',
    'r': 'Right'
};
const TYPES = {
    'm': 'margin', 
    'p': 'padding'
};

for (const s of SIZES) {
    for (const [t, type] of Object.entries(TYPES)) {
        for (const [d, direction] of Object.entries(DIRECTIONS)) {
            stylesObj[`${t}-${d}-${s}`] = {
                [`${type}${direction}`]: Layout.spacing[s]
            };
        }
    }
}

export default StyleSheet.create(stylesObj);
