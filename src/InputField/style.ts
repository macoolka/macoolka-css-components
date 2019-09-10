import { StandProps } from '../css';
export const root: StandProps = {
    mkInlineFlex: 'row',
    mkFlexAlignV:'stretch',
    mkFontFamily: 'sansSerif',
    position: 'relative',
    mkTextColor: 'primary',
    mkFlexItemGrow:1,
    // height:32,
    lineHeight: '1.1875em', // Reset (19px), match the native input line-height
    mkBorderColor: 'divide',
    selector: {
        ':hover:not(:disabled)': {
          //  borderWidth: 2,
        },

    },
};
export const stand: StandProps = {

    mkBorder: 'bottom',

};
export const outlined: StandProps = {
    mkBorder: 'bordered',
};
export const inline: StandProps = {
    mkBorder: 'none',
};
export const small: StandProps = {
    mkElementHeight: 'none',
};
export const slidingLabelRoot:StandProps={
    selector: {
        'label + &': {
            marginTop: 16,
        },
    },
}
