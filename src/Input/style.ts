import { StandProps } from '../css';

export const formControl: StandProps = {
    selector: {
        'label + &': {
            marginTop: 16,
        },
    },

};

const placeholder: StandProps = {
    color: 'currentColor',
    opacity: 0.42,
};
export const placeholderHidden: StandProps = {
    opacity: 0,
};
export const placeholderVisible: StandProps = {
    opacity: 0.42,
};

export const element: StandProps = {
    border: '0',
    textOverflow: 'ellipsis',
    minWidth: 0,
    width: '100%',
    color: 'currentColor',
    mkColor: 'transparent',

    paddingH: 0,
    maxWidth: '100%',
    fontSize: 'inherit',
    zIndex: 1,
    boxSizing: 'content-box',
    verticalAlign: 'middle',
    background: 'none',
    mkTransition: 'color, background-color,opacity',
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
        '::-webkit-input-placeholder': placeholder,
        '::-moz-placeholder': placeholder, // Firefox 19+
        ':-ms-input-placeholder': placeholder, // IE 11
        '::-ms-input-placeholder': placeholder, // Edge

        // Reset Firefox invalid required input style
        '&:invalid': {
            mkShadow: 0,
        },
        '&::-webkit-search-decoration': {
            // Remove the padding when type=search.
            // '-webkit-appearance': 'none',
        },
        ':disabled': {
            // opacity: 1, // Reset iOS opacity
        },
    },
    font: 'inherit',
    mkFlexItemGrow: 1,
    mkFlexItemShrink: 1,
    // Remove grey highlight
    // WebkitTapHighlightColor: 'transparent',
    display: 'block',
    mkMargin: 'none',
    // Make the flex item shrink with Firefox

};

export const textareaRoot: StandProps = {
    position: 'relative', // because the shadow has position: 'absolute',
    mkWidth: 'full',
};
export const textarea: StandProps = {
    mkWidth: 'full',
    mkHeight: 'full',
    resize: 'none',
    font: 'inherit',
    padding: 0,
    cursor: 'inherit',
    boxSizing: 'border-box',
    lineHeight: 'inherit',
    border: 'none',
    outline: 'none',
    background: 'transparent',
};
export const textareaShadow: StandProps = {
    resize: 'none',
    // Overflow also needed to here to remove the extra row
    // added to textareas in Firefox.
    overflow: 'hidden',
    // Visibility needed to hide the extra text area on ipads
    visibility: 'hidden',
    position: 'absolute',
    height: 'auto',
    whiteSpace: 'pre-wrap',
};
