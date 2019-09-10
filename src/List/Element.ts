import { esn} from '../css';
import { item, list,   icon,  secondaryAction } from './style';

export interface ListProps {
    dense?: boolean;
    subheader?: boolean;
    disableGutters?: boolean;
}
export const List=esn< ListProps, {},'dl'>  ({
    displayName: 'List',
    tag: 'dl',
    defaultProps: {
        dense: false,
        subheader: false,
        disableGutters: false,
    },
    style: list,
    rule: {
        dense: ({ value }) => value ? ({
            mkPaddingV: 'mini',
        }) : ({}),
        subheader: ({ value }) => value ? ({
            mkPaddingTop: 'none',
        }) : ({}),
        disableGutters: ({ value }) => value ? ({
            mkPaddingV: 'none',
        }) : ({}),
    },
});
export interface ListItemProps {
    dense?: boolean;
    disabled?: boolean;
    divider?: boolean;
    secondaryAction?: boolean;
    focusVisible?: boolean;
    disableGutters?: boolean;
    level?: number;
}
export const ListTitle= esn< ListItemProps, {},'dt'>  ({
    displayName: 'List.Item',
    tag: 'dt',
    defaultProps: {
        disabled: false,
        divider: false,
    },
    style: item,

    rule: {
        level: ({ value }) => ({
            paddingLeft: 24 * value,
/*             mkMedia: [{
                paddingLeft: 24 * value,
            }], */
        }),
        disabled: ({ value }) => value ? ({
            opacity: 0.5,
        }) : ({}),
        divider: ({ value }) => value ? ({
            mkBorder: 'bottom',
            mkBorderColor: 'divide',
            backgroundClip: 'padding-box',
        }) : ({}),

    },
});
export const ListItem= esn<ListItemProps, {},'dd'> ({
    displayName: 'List.Item',
    tag: 'dd',
    defaultProps: {
        dense: false,
        disabled: false,
        divider: false,
        secondaryAction: false,
        focusVisible: false,
        disableGutters: false,
    },
    style: item,

    rule: {
        level: ({ value }) => ({
            paddingLeft: 24 * value,
/*             mkMedia: [{
                paddingLeft: 24 * value,
            }], */
        }),
        dense: ({ value }) => value ? ({
            mkPaddingV:'small'
            //paddingV: 8,
        }) : ({}),
        disabled: ({ value }) => value ? ({
            opacity: 0.5,
        }) : ({}),
        divider: ({ value }) => value ? ({
            mkBorder: 'bottom',
            mkBorderColor: 'divide',
            backgroundClip: 'padding-box',
        }) : ({}),
        secondaryAction: ({ value }) => value ? ({
            paddingRight: 32,
        }) : ({}),
        focusVisible: ({ value }) => value ? ({
            mkColor: 'main',
        }) : ({}),
        disableGutters: ({ value }) => value ? ({
            mkPaddingV: 'none',
        }) : ({}),
    },
});

export const ListIcon=esn ({
    displayName: 'List.Icon',
    tag: 'div',
    defaultProps: {},
    style: icon,
});

export const ListSecondaryAction=esn ({
    displayName: 'List.SecondaryAction',
    tag: 'div',
    defaultProps: {},
    style: secondaryAction,

});
