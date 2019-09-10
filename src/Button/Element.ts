import { esn } from '../css';
import { button, topButton } from './style';
export const BasicButton= esn({
    displayName: 'BasicButton',
    defaultProps: {
    },
    tag: 'button',
    style: button,
});
export const TopButton = esn({
    displayName: 'BasicButton',
    defaultProps: {
    },
    tag: 'button',
    style: topButton,
});
export const ButtonText = esn({
    displayName: 'BasicButton',
    defaultProps: {
        mkTypography: 'button',
    },
    tag: 'p',
    style: {},
});
export const StyledButton= esn<
{
    mkVariant?: 'flat' | 'normal' | 'raised' | 'outlined',
},{},'button'>({
    displayName: 'StyledButton',
    defaultProps: {
        mkVariant: 'flat',
    },
    tag: 'button',
    style: button,
    ruleEnum: {
        mkVariant: {
            flat: {
                mkColor:'transparent' 
            },
            normal: {
                mkColor:'divide' 
            },
            raised: {
                mkColor:'divide' ,
                mkShadow: 2,
                selector: {
                    ':disabled ': {
                        mkShadow: 0,
                    },
                    ':active:not(:disabled)': {
                        mkShadow: 8,
                    },
                },
            },
            outlined: {
                mkBorder: 'bordered',
                mkColor:'transparent' ,
                mkBorderColor: { name: 'currentColor', opacity: 'large' },
            },
        },
    },
});

export const TextButton=esn< 
{}, {
    mkSize?: 'small' | 'medium' | 'large'
},'button'> ({
    displayName: 'TextButton',
    defaultProps: {
        mkSize: 'medium',
    },
    tag: 'button',
    style: {
        ...button,
        mkTypography: 'button',
        mkBorderRadius: 'small',
    },
    ruleEnum: {
        mkSize: {
            small: ({
                minWidth: 64,
                height: 32,
                mkPaddingH: 'small',
                mkFontSize: 'caption',
            }),
            medium: ({
                minWidth: 88,
                height: 36,
                mkPaddingH: 'medium',
            }),
            large: ({
                minWidth: 112,
                minHeight: 40,
                mkPaddingH: 'large',
                mkFontSize: 'subtitle',
            }),
        },
    },
});
export const IconButton= esn<
{}, {
    mkSize?: 'small' | 'medium' | 'large'
},'button'>  ({
    displayName: 'IconButton',
    defaultProps: {
        mkSize: 'medium',
    },
    tag: 'button',
    style: {
        ...button,
        mkRounded: true,
    },
    ruleEnum: {
        mkSize: {
            small: ({
                mkSquare: 32,

            }),
            medium: ({
                mkSquare: 48,
            }),
            large: ({
                mkSquare: 56,
            }),
        },
    },
});
export const FabButton=esn < { mini?: boolean },{},'button'> ({
    displayName: 'FabButton',
    defaultProps: {
        mini: false,
    },
    tag: 'button',
    style: {
        ...button,
        mkRounded: true,
        width: 56,
        height: 56,
        mkShadow: 6,
        mkColor: 'accent',
        selector: {
            ':active': {
                mkShadow: 12,
            },
        },
    },
    rule: {
        mini: ({ value }: { value: boolean }) => value ? ({
            width: 40,
            height: 40,
        }) : ({
            width: 56,
            height: 56,
        }),
    },
});
export const FabTextButton=esn< { mini?: boolean },{},'button'>  ({
    displayName: 'FabTextButton',
    defaultProps: {
        mini: false,
    },
    tag: 'button',
    style: {
        ...button,
        mkColor: 'accent',
        borderRadius: 48 / 2,
        mkPaddingH: 'large',
        mkPaddingV: 'none',
        width: 'initial',
        minWidth: 48,
        height: 48,
    },
    rule: {
        mini: (value) => value ? ({
            minWidth: 40,
            height: 40,
        }) : ({}),
    },
});
