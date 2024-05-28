import { shadeColor } from "./utils"

export const App = {
    author: 'Michel R.',
    version: '2.0',
    name: 'SimpList',
    dev: true,
}

const Colors = {
    neutrals: {
        0   : '#FFFFFF',
        100 : '#EFEFEF',
        200 : '#DEDEDE',
        300 : '#CCCCCC',
        400 : '#B2B2B2',
        500 : '#8A8A8A',
        600 : '#6E6E6E',
        700 : '#585858',
        800 : '#333333',
        900 : '#161616',
        1000: '#000000',
    },
    red: {
        100: '#FFB0B2',
        200: '#F9868D',
        300: '#EF5868',
        400: '#EA3B56',
        500: '#E30044',
        600: '#C5003A',
        700: '#A80030',
        800: '#71001D',
        900: '#3F000C',
    },
    accent: '#0038FF',
}

export const ColorPalette = (lightMode:boolean) => {
    return {
        neutrals: {
            lowest : lightMode ? Colors.neutrals[100] : Colors.neutrals[800],
            lower  : lightMode ? Colors.neutrals[200] : Colors.neutrals[700],
            low    : lightMode ? Colors.neutrals[300] : Colors.neutrals[600],
            medium : lightMode ? Colors.neutrals[500] : Colors.neutrals[500],
            high   : lightMode ? Colors.neutrals[700] : Colors.neutrals[300],
            higher : lightMode ? Colors.neutrals[800] : Colors.neutrals[200],
            highest: lightMode ? Colors.neutrals[900] : Colors.neutrals[100],
        },
        danger: {
            lowest : lightMode ? Colors.red[100] : Colors.red[800],
            lower  : lightMode ? Colors.red[200] : Colors.red[700],
            low    : lightMode ? Colors.red[300] : Colors.red[600],
            medium : lightMode ? Colors.red[500] : Colors.red[500],
            high   : lightMode ? Colors.red[700] : Colors.red[300],
            higher : lightMode ? Colors.red[800] : Colors.red[200],
            highest: lightMode ? Colors.red[900] : Colors.red[100],
        },
        accent: {
            medium : lightMode ? Colors.accent : shadeColor(Colors.accent, 20),
            high : lightMode ? shadeColor(Colors.accent, -20) : Colors.accent
        },

      }
}



export const CornerRadius = {
    s: 4,
    m: 8,
    l: 12,
}

export const Spacing = {
    none: 0,
    xxs : 4,
    xs  : 8,
    s   : 12,
    m   : 16,
    l   : 24,
    xl  : 28,
    xxl : 32,
}

const FontSize = {
    100: 11,
    200: 13,
    300: 17,
    400: 24
}
const FontLineHeight = {
    100: '120%',
    200: '140%',
}
const FontWeight : 
{
    thin      : WidgetJSX.FontWeight,
    extralight: WidgetJSX.FontWeight,
    light     : WidgetJSX.FontWeight,
    regular   : WidgetJSX.FontWeight,
    medium    : WidgetJSX.FontWeight,
    semibold  : WidgetJSX.FontWeight,
    bold      : WidgetJSX.FontWeight,
    extrabold : WidgetJSX.FontWeight,
    black     : WidgetJSX.FontWeight,
} = {
    thin      : 100,
    extralight: 200,
    light     : 300,
    regular   : 400,
    medium    : 500,
    semibold  : 600,
    bold      : 700,
    extrabold : 800,
    black     : 900,
}

export const Font = {
    family: 'Inter',
    code: 'IBM Plex Mono',
    heading: {
        medium: {
            size: FontSize[400],
            weight: FontWeight.medium,
            lineHeight: FontLineHeight[100],
        },
        bolder: {
            size: FontSize[400],
            weight: FontWeight.semibold,
            lineHeight: FontLineHeight[100],
        },
    },
    body: {
        medium: {
            size: FontSize[300],
            weight: FontWeight.medium,
            lineHeight: FontLineHeight[200],
        },
        bolder: {
            size: FontSize[300],
            weight: FontWeight.semibold,
            lineHeight: FontLineHeight[200],
        },
    },
    footnote: {
        medium: {
            size: FontSize[200],
            weight: FontWeight.medium,
            lineHeight: FontLineHeight[100],
        },
        bolder: {
            size: FontSize[200],
            weight: FontWeight.semibold,
            lineHeight: FontLineHeight[100],
        },
    },
    caption: {
        medium: {
            size: FontSize[100],
            weight: FontWeight.medium,
            lineHeight: FontLineHeight[100],
        },
        bolder: {
            size: FontSize[100],
            weight: FontWeight.semibold,
            lineHeight: FontLineHeight[100],
        },
    },
}