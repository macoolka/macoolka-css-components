import { esn } from '../css';
import {
    nav,
    list,
    title,
    item,
    link,
} from './style';
export interface NavProps {

    level: number;
}
export const Nav = esn({
    displayName: 'Nav.Nav',
    defaultProps: {},
    tag: 'nav',
    style: nav,
});
export const List = esn({
    displayName: 'Nav.List',
    defaultProps: {},
    tag: 'dl',
    style: list,
});
export const Title = esn<NavProps, {}, 'dt'>({
    displayName: 'Nav.Title',
    defaultProps: {
        level: 1,
    },
    tag: 'dt',
    style: {},
    rule: {
        level: ({ value }) => title(value),
    },
});
export const Item = esn({
    displayName: 'Nav.Item',
    defaultProps: {},
    tag: 'dd',
    style: item,
});
export const Link = esn<NavProps, {}, 'a'>({
    displayName: 'Nav.Link',
    defaultProps: {
        level: 2,
    },
    tag: 'a',
    style: {},
    rule: {
        level: ({ value }) => link(value),
    },
});
