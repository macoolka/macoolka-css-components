import { esn } from '../css';
import { item, pItem, mItem } from './style';
export const Item = esn({
    displayName: 'Block.Item',
    defaultProps: {
    },
    tag: 'div',
    style: item,
});
export const PItem= esn({
    displayName: 'Block.PItem',
    defaultProps: {
    },
    tag: 'div',
    style: pItem,
});
export const MItem = esn({
    displayName: 'Block.MItem',
    defaultProps: {
    },
    tag: 'div',
    style: mItem,
});
