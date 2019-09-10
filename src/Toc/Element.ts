import { esn } from '../css';
import {
    toc,
    title,
    list,
    item,
    link,
    rootMedia,
    root,
} from './style';
export const Toc = esn({
    displayName: 'Toc.Toc',
    defaultProps: {},
    tag: 'nav',
    style: {
        ...toc,
        ...root(''),
        mkMedia: rootMedia(''),

    },
});
export const Title = esn({
    displayName: 'Toc.Title',
    defaultProps: {},
    tag: 'h1',
    style: title,
});
export const List = esn({
    displayName: 'Toc.List',
    defaultProps: {},
    tag: 'ul',
    style: list,
});
export const Item = esn({
    displayName: 'Toc.Item',
    defaultProps: {},
    tag: 'li',
    style: item,
});
export const Link = esn({
    displayName: 'Toc.Link',
    defaultProps: {},
    tag: 'a',
    style: link,
});
