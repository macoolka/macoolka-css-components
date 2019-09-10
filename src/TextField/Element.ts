import {  esn,  extendComponentModuleNoTheme } from '../css';
import { pipe } from 'fp-ts/lib/pipeable'
import {
    row,
    message,
    messageWrapper,
    counter,
    info,
    prefix,
    postfix,
    prefixText,
    group,
    bordered,
    element,
    icon
} from './style';
export interface TextFieldPropsE {

}
export interface TextFieldPropsS {
    slidingLabel?: boolean;
    error?: boolean;
    success?: boolean;
    disabled?: boolean;
    bordered?: boolean;

}
export interface TextFieldProps extends TextFieldPropsE, TextFieldPropsS {

}
export const TextFieldRow = esn<TextFieldProps>({
    displayName: 'TextField.Row',
    defaultProps: {},
    tag: 'div',
    style: row,
    rule: {
        slidingLabel: ({ value }) => value ? ({
            paddingTop: 12,
        }) : ({}),
    },
});

export interface TextFieldMessagePropsS {
    error?: boolean;
    disabled?: boolean;

}
export const TextFieldMessage = esn<TextFieldMessagePropsS>({
    displayName: 'TextField.Message',
    defaultProps: {
        error: false,
        disabled: false,
    },
    tag: 'div',
    style: message,
    rule: {
        error: ({ value }) => value ? ({
            mkTextColor: 'alert',
        }) : ({}),
        disabled: ({ value }) => value ? ({
            mkTextColor: 'disabled',
        }) : ({}),
    },
});
export const TextFieldBordered = esn< TextFieldProps>({
    displayName: 'TextField.Message',
    defaultProps: {
        error: false,
        success: false,
        disabled: false,
        bordered: false,
    },
    tag: 'div',
    style: bordered,
    rule: {
        bordered: ({ value }) => value ? ({
            borderWidth: 1,
            mkBorderRadius: 'small',
            mkHoverBorderColor: 'divide',

        }) : ({
            borderBottomWidth: 1,
            borderTopWidth: 0,
            borderRightWidth: 0,
            borderLeftWidth: 0,
            mkHoverBorderColor: 'divide',

        }),
        error: ({ value }) => value ? ({
            mkBorderColor: 'alert',
        }) : ({}),
        success: ({ value }) => value ? ({
            mkBorderColor: 'success',
        }) : ({}),
    },
});
const extendTextFieldMessage = pipe(
    TextFieldMessage,
    extendComponentModuleNoTheme,
);
export const TextFieldMessageWrapper = extendTextFieldMessage({
    displayName: 'TextField.MessageWrapper',
    defaultProps: {},
    tag: 'div',
    style: messageWrapper,
})


export const _TextFieldPostfix = esn<TextFieldProps,{},'label'>({
    displayName: 'TextField.Postfix',
    defaultProps: {},
    tag: 'label',
    style: postfix,
    rule: {
        bordered: ({ value }) => value ? ({
            paddingRight: 8,
        }) : ({}),
    },
});
export const TextFieldPostfix = extendTextFieldMessage<TextFieldProps,{},'label'>({
    displayName: 'TextField.Postfix',
    defaultProps: {},
    tag: 'label',
    style: postfix,
    rule: {
        bordered: ({ value }) => value ? ({
            paddingRight: 8,
        }) : ({}),
    },
})

export const TextFieldPrefix= extendTextFieldMessage< TextFieldProps,{},'label'>({
    displayName: 'TextField.Prefix',
    defaultProps: {},
    tag: 'label',
    style: prefix,
    rule: {
        bordered: ({ value }) => value ? ({
            paddingLeft: 8,
        }) : ({}),
    },
});


export const TextFieldPrefixText= esn({
    displayName: 'TextField.PrefixText',
    defaultProps: {},
    tag: 'span',
    style: prefixText,
});

export const TextFieldGroup = pipe(
    TextFieldBordered,
    extendComponentModuleNoTheme,
    ex=>ex({
        displayName: 'TextField.PrefixGroup',
        defaultProps: {},
        tag: 'span',
        style: group,
    })
)
export const _TextFieldCountMessage = esn({
    displayName: 'TextField.CountMessage',
    defaultProps: {},
    tag: 'div',
    style: counter,
});
export const TextFieldCountMessage = extendTextFieldMessage({
    displayName: 'TextField.CountMessage',
    defaultProps: {},
    tag: 'div',
    style: counter,
})
export const TextFieldInput = extendTextFieldMessage< TextFieldPropsS, TextFieldPropsE,'input'>({
    displayName: 'TextField.Info',
    defaultProps: {
        bordered: false,
        disabled: false,
    },
    tag: 'input',
    style: element,
    rule: {
        bordered: ({ value }) => value ? ({
            paddingH: 8,
        }) : ({}),
    },
})
export const TextFieldInfo= esn({
    displayName: 'TextField.Info',
    defaultProps: {},
    tag: 'div',
    style: info,
});
export const TextFieldIcon = esn({
    displayName: 'TextField.Icon',
    defaultProps: {
    },
    tag: 'div',
    style: icon,
});
