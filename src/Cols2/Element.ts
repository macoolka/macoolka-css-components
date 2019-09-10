
import { esn } from '../css';
import { cols, children, childrenSmall, col2FirstChildren, col2SecondChildren, col2ChildrenMedium } from './style';
export const Cols2 =esn ({
    displayName: 'Cols2',
    defaultProps: { },
    tag: 'div',
    style: {
        ...cols,
        selector: {
            '&>div': children,

            '&>div:nth-child(1)': col2FirstChildren,

            '&>div:nth-child(2)': col2SecondChildren,
        },
        mkMedia: [{
            selector: {
                '&>div': childrenSmall,
            },

        }, {
            selector: {
                '&>div': childrenSmall,
                '&>div:nth-child(1),&>div:nth-child(2)': col2ChildrenMedium,
            },
        }],
    },
});
