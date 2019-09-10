import { StandProps } from '../css';

export const topBar: StandProps = {
    mkFlex: 'column',
    mkWidth: 'full',
    boxSizing: 'border-box', // Prevent padding issue with the Modal and fixed positioned AppBar.
    mkZIndex: 'bar',
    flexShrink: 0,
};

export const toolBar: StandProps = {
    mkFlex: 'row',
    minHeight: 64,
    paddingH: 24,
    mkWidth: 'full',
    mkMedia: [{
        minHeight: 56,
        paddingH: 16,
    }],
};
