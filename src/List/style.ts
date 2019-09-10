import { StandProps } from '../css';
export const item: StandProps = {
    mkFlex: 'rowCenter',
   // position: 'relative',
    textDecoration: 'none',
    mkWidth: 'full',
    boxSizing: 'border-box',
    textAlign: 'left',
    mkPaddingV: 'smallX',
    mkPaddingH: 'medium',
    // paddingV: 12,
    // paddingH: 16,
    outline: 'none',
    cursor: 'pointer',
/*     mkMedia: [{
        mkPaddingH: 'large',
        // paddingH: 24,
    }], */
    mkChildMarginLeft:'medium',
};
export const list: StandProps = {
    listStyle: 'none',
    mkMargin: 'none',
    mkPaddingV: 'small',
    mkPaddingH: 'none',
    //  margin: 0,
    //  paddingV: 8,
    //  paddingH: 0,
    //  position: 'relative',
    mkFlex: 'column',
    mkFlexAlignV:'stretch',
    mkWidth: 'full',
};

export const icon: StandProps = {
    marginRight: 16,
    mkTextColor: 'accent',
    flexShrink: 0,
};

export const secondaryAction: StandProps = {
    position: 'absolute',
    right: 4,
    top: '50%',
    transform: 'translateY(-50%)',
};
