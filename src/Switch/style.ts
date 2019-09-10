import { StandProps } from '../css';
export const root: StandProps = {
    mkInlineFlex: 'rowCenter',
    width: 62,
    position: 'relative',
    mkFlexItemShrink: 0,
    verticalAlign: 'middle',
};
export const base: StandProps = {
    mkZIndex: 'base',
    mkTransition: 'transform',
    mkFlex: 'rowCenter',
    mkColor:'transparent',
    width: 48,
};
export const bar: StandProps = {
    borderRadius: 7,
    display: 'block',
    position: 'absolute',
    width: 34,
    height: 14,
    top: '50%',
    left: '50%',
    marginTop: -7,
    marginLeft: -17,
    mkTransition: 'opacity,background-color',

    opacity:  0.38 ,
};

export const item: StandProps = {

    mkShadow: 1,
    width: 20,
    height: 20,
    mkRounded: true,
};
export const checkedItem: StandProps = {
    ...item,
    mkShadow: 2,
    selector: {
        disabled: {
            mkShadow: 1,
        },
    },
};
