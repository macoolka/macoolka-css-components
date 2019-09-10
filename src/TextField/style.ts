import { StandProps } from '../css';
export const row: StandProps = {
    mkFlex: 'row',
    position: 'relative',
    flexGrow: 1,
};
export const message: StandProps = {
    mkTextColor: 'secondary',
    userSelect: 'none',
    textTransform: 'none',
    mkFontWeight: 'regular',
    mkMarginH: 'none',
    textAlign: 'left',
    mkMarginTop: 'small',
    mkMarginBottom: 'none',
    lineHeight: '1em',
    minHeight: '1em',

    flexGrow: 1,
    mkTypography: 'caption',
    mkTransition: 'color',
};
export const bordered: StandProps = {
    mkBorder: 'bottom',
    mkBorderColor: 'divide',
};
export const counter: StandProps = {
    textAlign: 'right',
    marginLeft: 32,
    mkTypography: 'caption',
    mkTransition: 'color',
};
export const messageWrapper: StandProps = {
    flexGrow: 1,
    mkTypography: 'caption',
    mkTransition: 'color',
};
export const info: StandProps = {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: 8,
};
export const postfix: StandProps = {
    padding: 4,
};
export const prefix: StandProps = {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    flexShrink: 0,
    paddingLeft: '0',
};
export const prefixText: StandProps = {
    display: 'flex',
    alignItems: 'center',
    color: 'inherit',
    padding: 4,
    mkTransition: 'color',
};
export const group: StandProps = {
    display: 'flex',
    mkTypography: 'subtitle2',
    position: 'relative',
    maxWidth: '100%',
    flexGrow: 1,
    alignItems: 'center',
    mkTransition: 'border-color, border-style',
};
export const icon: StandProps = {
    display: 'flex',
    color: 'inherit',
    opacity: 0.54,
    selector: {
        ':disabled': {
            opacity: 0.35,
        },
        ':focus': {
            opacity: 1,
        },
    },

    mkTransition: 'color, opacity',
    marginRight: 4,
};

export const element: StandProps = {
    borderWidth: '0',
    textOverflow: 'ellipsis',
    flexGrow: 1,
    width: '100%',
    mkColor: 'transparent',
    mkTextColor: 'primary',
    paddingV: 8,
    maxWidth: '100%',
    fontSize: 'inherit',
    zIndex: 1,
    mkTransition: 'color, background-color',
    paddingH: '0',
    selector: {
        ':hover': {
            outline: 'none',
        },
        ':focus': {
            outline: 'none',
        },
        ':placeholder': {
            mkTextColor: 'disabled',
        },
    },
};
