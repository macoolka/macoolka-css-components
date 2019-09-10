import { esn } from '../css';
import { element, paper } from './style';
export const Element = esn({
    displayName: 'Element',
    defaultProps: { },
    tag: 'div',
    style: element,
});
export const Paper= esn({
    displayName: 'Paper',
    defaultProps: { },
    tag: 'div',
    style: paper,
});
