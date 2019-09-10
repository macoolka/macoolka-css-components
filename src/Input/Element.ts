import { esn, extendComponentModuleNoTheme } from '../css';
import {
    element,
    textarea,
    textareaRoot,
    textareaShadow
} from './style';

export interface InputSProps {

    disabled?: boolean;
    // bordered?: boolean;
    multiline?: boolean;
    //dense?: boolean;
    inputType?: boolean;
}
export interface InputEProps {
    mkVariant?: 'standard' | 'outlined' | 'inline',
    mkSize?: 'small' | 'medium' | 'large'
}
export interface InputProps extends InputSProps, InputEProps {
}
export const Input= esn<InputSProps, InputEProps,'input'> ({
    displayName: 'Input.Input',
    defaultProps: {
       // bordered: false,
        disabled: false,
        multiline:false,
        mkVariant: 'standard',
        mkSize: 'medium'
    },
    tag: 'input',
    style: element,
    rule: {
        disabled: ({ value }) => value ? ({
            mkTextColor: 'disabled',
        }) : ({}),
        /*         bordered: ({ value }) => value ? ({
                   
                }) : ({}), */
        multiline: ({ value }) => value ? ({
            resize: 'none',
        }) : ({}),
/*         dense: ({ value }) => value ? ({
            paddingTop: 3,
        }) : ({}), */
        inputType: ({ value }) => value ? ({
            height: '1.1875em',
        }) : ({}),
    },
    ruleEnum: {
        mkVariant: {
            standard: {
              
            },
            outlined: {
                paddingH: 8,
            },
            inline: {
                paddingH: 8,
            }
        },
        mkSize:{
            small:{
                paddingTop: 4,
                paddingBottom: 5,
            },
            medium:{
                paddingTop: 6,
                paddingBottom: 7,
            },
            large:{
                paddingTop: 10,
                paddingBottom: 11,
            }
        }
    }

});
export const Textarea = esn({
    displayName: 'Input.Textarea',
    defaultProps: {

    },
    tag: 'textarea',
    style: textarea,
});
export const ShadowTextarea= esn({
    displayName: 'Input.ShadowTextarea',
    defaultProps: {

    },
    tag: 'textarea',
    style: {
        ...textarea,
        ...textareaShadow,
    },
});
export const TextareaRoot =extendComponentModuleNoTheme(Input)({
    displayName: 'Input.TextareaRoot',
    defaultProps: {},
    tag: 'div',
    style: textareaRoot,
})
