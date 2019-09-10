import { esn } from '../css';
import {
    bar,
    root,
    item,
    checkedItem,
    base,

} from './style';
export interface SwitchBarProp {
    checked?: boolean;
    disabled?: boolean;
}
export const SwitchRoot = esn({
    displayName: 'Switch.Switch',
    defaultProps: {},
    tag: 'span',
    style: root,
});
export const SwitchBar= esn<SwitchBarProp,{},'span'>({
    displayName: 'Switch.Bar',
    defaultProps: {},
    tag: 'span',
    style: bar,
    rule: {
        disabled: ({value}) => value ? { opacity: 0.12} : ({}),
    },
});
export const SwitchBarItem = esn({
    displayName: 'Switch.Item',
    defaultProps: {},
    tag: 'span',
    style: item,
});
export const SwitchBarItemChecked = esn({
    displayName: 'Switch.Item',
    defaultProps: {},
    tag: 'span',
    style: checkedItem,

});

export const Switch = esn<SwitchBarProp,{},'span'>({
    displayName: 'Switch.Switch',
    defaultProps: {},
    tag: 'span',
    style: base,
    rule: {
        checked: ({value}) => value ? { transform: 'translateX(14px)'} : ({}),
    },

});
