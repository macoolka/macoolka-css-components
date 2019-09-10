import { esn } from '../css';
import {title, titleSmall, article, articleSmall, titleFirst, titleFirstSmall} from './style';
export const Article= esn ({
    displayName: 'Article.Article',
    defaultProps: {
    },
    tag: 'article',
    style: {
        ...article,
        mkMedia: [{
            ...articleSmall,
            selector: {
                ':nth-child(1) > h1,:nth-child(1) > h2': titleFirstSmall,
            },
        }],
        selector: {
            ':nth-child(1) > h1,:nth-child(1) > h2': titleFirst,
        },
    },
});
export const Title=esn ({
    displayName: 'Article.Title',
    defaultProps: {
    },
    tag: 'h2',
    style: {
        ...title,
        mkMedia: [titleSmall],
    },
});
