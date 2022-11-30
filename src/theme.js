import React from 'react';
import { ThemeProvider } from 'styled-components/macro';

export const theme = {
    colors: {
        strongCyan: 'hsl(172, 67%, 45%)',
        veryDarkCyan: 'hsl(183, 100%, 15%)',
        firstDarkGrayishCyan: 'hsl(186, 14%, 43%)',
        secondDarkGrayishCyan: 'hsl(184, 14%, 56%)',
        firstLightGrayishCyan: 'hsl(185, 41%, 84%)',
        secondLightGrayishCyan: 'hsl(189, 41%, 97%)',
        white: 'hsl(0, 0%, 100%)',
    },
    fontWeights: {
        regular: 400,
        bold: 700,
    },
    breakpoints: {
        mobile: 'max-width: 480px',
        tablets: 'min-width: 481px',
        laptops: 'min-width: 769px',
        desktops: 'min-width: 1025px',
        xlScreens: 'min-width: 1201px',
    },
};

const Theme = ({ children }) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
