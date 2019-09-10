
import { esn } from '../css';
import {
    cols, children, childrenSmall, col3FirstChildren,
    col3SecondChildren, col3ThirdChildren, col3FirstChildrenMedium
} from './style';
export const Cols3 = esn({
    displayName: 'Cols3',
    defaultProps: { },
    tag: 'div',
    style: {
        ...cols,
        selector: {
            '&>div': children,

            '&>div:nth-child(1)': col3FirstChildren,

            '&>div:nth-child(2)': col3SecondChildren,
            '&>div:nth-child(3)': col3ThirdChildren,
        },
        mkMedia: [{
            selector: {
                '&>div': childrenSmall,
            },

        }, {
            selector: {
                '&>div': childrenSmall,
                '&>div:nth-child(3)': col3FirstChildrenMedium,
            },
        }],
    },
});
