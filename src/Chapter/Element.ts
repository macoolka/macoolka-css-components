import { esn } from '../css';
import { h1, h1Small, chapter } from './style';
export const Title = esn({
    displayName: 'Chapter.Title',
    defaultProps: {},
    tag: 'h1',
    style: {
        ...h1,
        mkMedia: [h1Small],
    },
});
export const Chapter = esn({
    displayName: 'Chapter.Chapter',
    defaultProps: {},
    tag: 'section',
    style: chapter,
});
