import { StandProps } from '../css';
import { style } from '../Element';
export const item: StandProps = {
    ...style.element,
    mkInlineFlex: 'center',
    
};
export const pItem: StandProps = {
    ...item,
    mkPaddingH: 'medium',
    mkPaddingV: 'small',
};
export const mItem: StandProps = {
    ...pItem,
    mkMarginH: 'medium',
    mkMarginV: 'small',
};
