import { StandProps } from '../css';
import { style } from '../InlineFlex';
export const button: StandProps = {
    ...style.item,
    position: 'relative',
    mkBorder: 'none',
    cursor: 'pointer',
    mkColor: 'transparent',
    mkChildMarginLeft:'small',
};
export const topButton: StandProps = {
    mkFixed: 'top',
    left: 12,
    mkMedia: [{
        left: 4,
    }],
};
