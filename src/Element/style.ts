import { StandProps } from '../css';

export const element: StandProps = {
    mkScrollBar: 'none',
    userSelect: 'none',
    outline: 'none',
    mkFontFamily:'sansSerif',
    mkTextColor:'primary',
    mkTextDecoration: 'none',

    selector: {
        ':disabled': {
            pointerEvents: 'none',
            cursor: 'default',
            mkTextColor: 'disabled',
        },
    },
};
export const paper: StandProps = {
    mkColor: 'primary',
    mkZIndex: 'base',
    mkWidth: 'full',
    mkShadow: 4,
};
