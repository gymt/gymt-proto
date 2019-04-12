import Color from 'color';

// CUSTOM PALETTE
const sunsetOrange = '#F05D5E';
const skobeloff = '#0F7173';
const antiFlashWhite = '#EFE9F4';
const charleston = '#272932';
const eerieBlack = '#161925';
const gargoyleGas = '#FFE74C';

const white = '#FFFFFF';
const black = '#000000'

// BASE
const primary = sunsetOrange;
const secondary = skobeloff;
const tertiary = gargoyleGas;
const light = antiFlashWhite;
const dark = charleston;
const darker = eerieBlack;
const pureWhite = white;
const pureBlack = black;

// DERIVED
const primaryLighter = Color(primary).lighten(0.15);
const primaryDarker = Color(primary).darken(0.15);
const secondaryLighter = Color(secondary).lighten(0.15);
const secondaryDarker = Color(secondary).darken(0.15);

export default {
    primary,
    primaryLighter,
    primaryDarker,
    secondary,
    secondaryLighter,
    secondaryDarker,
    tertiary,
    light,
    dark,
    darker,
    pureWhite,
    pureBlack,
};
