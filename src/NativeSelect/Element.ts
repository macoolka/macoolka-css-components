import { esn } from '../css';
import {
    element,
    root,
    item,
} from './style';

export const NativeSelectRoot = esn({
    displayName: 'NativeSelect.Root',
    defaultProps: {},
    tag: 'div',
    style: root,

});
export const NativeSelectInput = esn({
    displayName: 'NativeSelect.Input',
    defaultProps: {},
    tag: 'select',
    style: element,

});
export const NativeSelectItem= esn({
    displayName: 'NativeSelect.Option',
    defaultProps: {},
    tag: 'option',
    style: item,

});
