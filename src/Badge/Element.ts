import { esn } from '../css';
import { item, container } from './style';
export const Container = esn({
    displayName: 'Badge.Container',
    defaultProps: {
    },
    tag: 'span',
    style: container,
});
export const Item = esn({
    displayName: 'Badge.Item',
    defaultProps: {
    },
    tag: 'span',
    style: item,
});
