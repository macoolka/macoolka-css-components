import { StandProps } from '../css';
export const label: StandProps = {
    mkInlineFlex: 'row',
    mkTypography: 'body2',
    cursor: 'pointer',
    mkTextColor: 'secondary',
    userSelect: 'none',
    textTransform: 'none',
    mkTransition: 'color',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
};
export const sliding: StandProps = {
    ...label,
   // transformOrigin: 'top left',
    position: 'absolute',
    mkTransition: 'color, font-size,bottom',
    mkTextColor: 'secondary',
    mkTypography: 'caption',
};
export const slidingFilled: StandProps = {
    mkTypography: 'body2',
    mkWidth: 'full',
    cursor: 'default',
    top: 24,
    mkPaddingBottom: 'small',
    pointerEvents: 'none',
    // mkTextColor:'main'
/*     transform: 'translate(0, 1.5px) scale(0.75)',
    transformOrigin: 'top left', */
};
export const slidingNormal: StandProps = {
    // position: 'absolute',
/*     left: 0,
    top: 0,
    // slight alteration to spec spacing to match visual spec result
    transform: 'translate(0, 24px) scale(1)', */
    // marginBottom: '0',
    mkPaddingBottom: 'none',
};
