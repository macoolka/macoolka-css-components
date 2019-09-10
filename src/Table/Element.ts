import { esn } from '../css';
import {
    tr,
    td,
    root,
    tbody,
    table,
    thead,
    th

} from './style';
export const Table = esn({
    displayName: 'Table.Table',
    defaultProps: { },
    tag: 'table',
    style: {
        ...table,
        ...root(''),
    },
});
export const THead= esn({
    displayName: 'Table.THead',
    defaultProps: { },
    tag: 'thead',
    style: {
        ...thead,
    },
});
export const TBody = esn({
    displayName: 'Table.TBody',
    defaultProps: { },
    tag: 'tbody',
    style: {
        ...tbody,
    },
});
export const Th = esn({
    displayName: 'Table.Th',
    defaultProps: { },
    tag: 'th',
    style: {
        ...th,
    },
});
export const Tr = esn({
    displayName: 'Table.Tr',
    defaultProps: { },
    tag: 'tr',
    style: {
        ...tr,
    },
});
export const Td = esn({
    displayName: 'Table.Td',
    defaultProps: { },
    tag: 'td',
    style: {
        ...td,
    },
});
