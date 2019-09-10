import { esn } from '../css';
import { item, pItem, mItem } from './style';
export const Item = esn({
    displayName: 'inlineFlex.Item',
    defaultProps: {},
    tag: 'span',
    style: item,
});
export const PItem = esn({
    displayName: 'inlineFlex.PItem',
    defaultProps: {},
    tag: 'span',
    style: pItem,
});
export const MItem = esn({
    displayName: 'inlineFlex.MItem',
    defaultProps: {},
    tag: 'span',
    style: mItem,
});
