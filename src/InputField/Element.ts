import { esn } from '../css';
import {
    root, slidingLabelRoot, stand, outlined, inline
} from './style';

export interface InputSFieldProps {
    error?: boolean;
    success?: boolean;
    disabled?: boolean;
    slidingLabeled?: boolean;
    focused?: boolean;

}
export interface InputEFieldProps {
    mkVariant?: 'standard' | 'outlined' | 'inline',
    mkSize?: 'small' | 'medium' | 'large'

}
export interface InputFieldProps extends InputSFieldProps, InputEFieldProps {

}
export const InputField=esn<InputSFieldProps, InputEFieldProps> ({
    displayName: 'InputField',
    defaultProps: {
        error: false,
        success: false,
        disabled: false,
        mkVariant: 'standard',
        mkSize: 'medium'
    },
    tag: 'div',
    style: root,
    rule: {
        focused: ({ value }) => value ? ({
            mkBorderColor: 'main',
        }) : ({}),
        error: ({ value }) => value ? ({
            mkBorderColor: 'alert',
        }) : ({}),
        success: ({ value }) => value ? ({
            mkBorderColor: 'success',
        }) : ({}),
        disabled: ({ value }) => value ? ({
            borderStyle: 'dotted',
        }) : ({}),
        slidingLabeled: ({ value }) => value ? slidingLabelRoot : ({}),
        // size: ({ value }) => ({mkTextFieldHeight:value}),
    },
    ruleEnum: {
        mkVariant: {
            standard: stand,
            outlined: outlined,
            inline: inline
        },


    }
});
