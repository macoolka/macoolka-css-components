import { StandProps } from '../css';
export const card: StandProps = {
    mkFlex: 'column',
    mkColor: 'primary',
    mkShadow: 2,
};
export const media: StandProps = {
    display: 'block',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    mkWidth: 'full',
};
export const header: StandProps = {
    mkFlex: 'row',
    mkPaddingV: 'medium',
    mkPaddingH: 'large',
    mkChildMarginLeft:'medium',

    mkMedia: [{
        mkPaddingH: 'medium',
    }],
};
export const content: StandProps = {
    mkFlex: 'column',
    mkPaddingV: 'medium',
    mkPaddingH: 'large',
    mkMedia: [{
        mkPaddingH: 'medium',
    }],
};
export const actions: StandProps = {
    mkFlex: 'row',
    mkPaddingV: 'small',
    mkPaddingH: 'large',
    mkMedia: [{
        mkPaddingH: 'medium',
    }],
    selector: {
        '>*:nth-child(1)': {
            marginLeft: 0,
        },
        '>*': {
            marginLeft: 16,
            mkHoverColor: 'divide',
        },
    },

};
