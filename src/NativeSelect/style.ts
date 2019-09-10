import { StandProps } from '../css';
export const root: StandProps = {
    mkFlexItemGrow: 1,
    mkInlineFlex: 'row',
    selector: {
        ':disabled': {
            mkTextColor: 'disabled',
        },
    },
};

export const element: StandProps = {

    userSelect: 'none',
    mkFlexItemGrow: 1,
    minWidth: 16, // So it doesn't collapse.
    cursor: 'pointer',
    selector: {
        ':focus': {
            mkColor: 'secondary',
        },
    },
    font: 'inherit',
};
export const item: StandProps = {

    width: 'auto', // Fix Safari textOverflow
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    minHeight: '1.1875em', // Reset (19px), match the native input line-height
};
