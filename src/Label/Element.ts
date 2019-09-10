import { esn } from '../css';
import { label, sliding, slidingFilled, slidingNormal } from './style';
export interface LabelProps {
    error?: boolean;
    success?: boolean;
    focused?: boolean;
    disabled?:boolean;
}
export const Label= esn<LabelProps, {},'label'>  ({
    displayName: 'Label.Label',
    tag: 'label',
    defaultProps: {
        error: false,
        success: false,
        focused: false,
        disabled:false,
    },
    style: label,
    rule: {
        error: ({ value }) => value ? ({
            mkTextColor: 'alert',
        }) : ({}),
        success: ({ value }) => value ? ({
            mkTextColor: 'success',
        }) : ({}),
        focused: ({ value }) => value ? ({
            mkTextColor: 'main',
        }) : ({}),
        disabled:({ value }) => value ? ({
            mkTextColor: 'disabled',
        }) : ({}),
    },
});
export interface SlidingLabelProps extends LabelProps {
    filled?: boolean;
}
export const SlidingLabel = esn<SlidingLabelProps, {},'label'>({
    displayName: 'Label.SlidingLabel',
    tag: 'label',
    defaultProps: {
        error: false,
        success: false,
        focused: false,
        filled: false,
    },
    style: sliding,
    rule: {
        error: ({ value }) => value ? ({
            mkTextColor: 'alert',
        }) : ({}),
        success: ({ value }) => value ? ({
            mkTextColor: 'success',
        }) : ({}),
        focused: ({ value }) => value ? ({
            mkTextColor: 'main',
        }) : ({}),
        filled: ({ value }) => value ? slidingFilled : slidingNormal,
    },
});
