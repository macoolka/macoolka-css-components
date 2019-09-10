import { esn } from '../css';
import { row, column, rowAuto, columnCenter, rowAutoCenter, rowCenter, split } from './style';
export const Row = esn({
    displayName: 'Flex.Row',
    defaultProps: {
        mkChildMarginLeft:'small',
    },
    tag: 'div',
    style: row,
});
export const RowCenter = esn({
    displayName: 'Flex.Row',
    defaultProps: {
        mkChildMarginLeft:'small',
    },
    tag: 'div',
    style: rowCenter,
});
export const Column = esn({
    displayName: 'Flex.Column',
    defaultProps: {
        mkChildMarginTop:'small',
    },
    tag: 'div',
    style: column,
});
export const ColumnCenter = esn({
    displayName: 'Flex.Column',
    defaultProps: {
        mkChildMarginTop:'small',
    },
    tag: 'div',
    style: columnCenter,
});
export const RowAuto = esn({
    displayName: 'Flex.Box',
    defaultProps: {
        mkChildMarginLeft:'small',
    },
    tag: 'div',
    style: rowAuto,
});
export const RowAutoCenter = esn({
    displayName: 'Flex.Box',
    defaultProps: {
        mkChildMarginLeft:'small',
    },
    tag: 'div',
    style: rowAutoCenter,
});
export const SplitItem= esn({
    displayName: 'Flex.SplitItem',
    defaultProps: {},
    tag: 'div',
    style: split,
});
