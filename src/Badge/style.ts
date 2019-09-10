import { StandProps } from '../css';
export const container: StandProps = {
    mkInlineFlex: 'row',
    position: 'relative',
    // For correct alignment with the text.
    verticalAlign: 'middle',
};
export const item: StandProps = {
    mkFlex: 'center',
    mkAbsoluteTopRight: {
        width: 24,
        height: 24,
    },
    mkRounded: true,
    mkTypography: 'caption',
    mkZIndex: 'base',
};
