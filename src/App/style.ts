import { StandProps } from '../css';
export const content: StandProps = {
    position: 'relative',
    mkFontFamily: 'sansSerif',
    mkBlock: 'center',
    mkContentWidth: 'large',
    
    paddingTop: 80,
    mkMedia: [{
       // mkContentWidth: 'small',
        mkWidth:'full',
        mkPaddingH:'large',
        mkPaddingGutterTop: 'large',
        marginTop: 56,
    }, {
        mkContentWidth: 'medium',

    }, {
        mkContentWidth: 'large',

    }],
};
export const body: StandProps = {
    mkColor: 'secondary',
    mkScrollBar: 'none',
    textRendering: 'optimizeLegibility',
    mkMinHeight:'fullScreen',
    mkFontFamily:'sansSerif'

};
export const navContent: StandProps = {
    mkWidth: 'full',
    float: 'left',
    mkHeight: 'full',
    mkColor: 'secondary',
    mkTransition: 'padding-left',
    boxSizing: 'border-box',

};
export const maskModal: StandProps = {
    mkFixed: 'top',
    mkWidth: 'full',
    mkHeight: 'full',
    mkTransition: 'opacity',
    backgroundColor: 'rgba(0,0,0,.5)',
    transform: 'translateZ(0)',
    mkZIndex: 'modal',
};

