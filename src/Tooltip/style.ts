import { StandProps } from '../css';
export const tooltip: StandProps = {
    mkColor: {
       name: 'secondary',
       inverted:true,
    },
    mkBorderRadius: 'medium',
    mkFontSize: 'overline',
    lineHeight: 1.1,
    mkTransition: {
        property: 'opacity, transform',
        duration: 'shortest',
        ease: 'easeIn',
    },
    opacity: 0,
    transform: 'scale(0)',
    minHeight: 0,
    padding: '4px 8px',
};
export const tooltipOpened: StandProps = {
    opacity: 0.9,
    transform: 'scale(1)',
    mkTransition: {
        property: 'opacity, transform',
        duration: 'shortest',
        ease: 'easeOut',
    },
};
export const root: StandProps = {
    mkZIndex: 'tooltip',
    pointerEvents: 'none',
};
export const touch: StandProps = {
   // padding: '8px 16px',
   // mkTypography:'body2',
};
export const left: StandProps = {
    transformOrigin: 'right center',
    margin: '0 8px',
    mkMedia: [{ margin: '0 4px'}],

};
export const right: StandProps = {
    transformOrigin: 'left center',
    margin: '0 8px',
    mkMedia: [{ margin: '0 4px'}],
};
export const top: StandProps = {
    transformOrigin: 'center bottom',
    mkMarginV: 'small',
    mkMedia: [{ margin:  '4px 0'}],
};
export const bottom: StandProps = {
    transformOrigin: 'center top',
    mkMarginV: 'small',
    mkMedia: [{ margin:  '4px 0'}],
};
