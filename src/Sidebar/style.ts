import { StandProps } from '../css';
export const side: StandProps = {
    mkColor: 'primary',
    mkHeight: 'full',
    mkContentWidth: 'nav',
    mkBorder: 'right',
    mkBorderColor: 'divide',
    mkScrollBar: 'vertical',
    mkFixed: 'left',
    mkZIndex: 'nav',
    transform: 'translateZ(0)',
    transformStyle: 'preserve-3d',
    mkTransition: {
        property: 'transform,left',
        delay: 'shortest',
        duration: 'shorter',
        ease: 'easeInOut',
    },
};

export const sideExpand: StandProps = {
    left: 0,
    visibility: 'visible',
    transform: 'translateX(0)',
    
};
export const sideHide: StandProps = {
    left: -241,
    visibility: 'hidden',
    transform: 'translateX(0)',
};
export const sideWrapper: StandProps = {
    mkScrollBar: 'vertical',
    mkAbsolute: 'full',
};
export const bottomWrapper: StandProps = {
   // paddingBottom: 96,
    mkMinHeight: 'full',
    position: 'relative',
    mkFlex: 'column',
};
export const bottom: StandProps = {
    mkPadding: 'large',
    mkElementHeight: 'large',
    mkTextColor: 'secondary',
    mkTypography: 'caption',
};
export const top: StandProps = {
    mkBorder: 'bottom',
    mkBorderColor: 'divide',
    mkElementHeight: 'large',
    mkInlineFlex: 'center',
    // mkMedia:[{ height: 56,}]
};

export const root = (tag: string): StandProps => ({

});
export const rootMedia = (tag: string): StandProps[] => [];
