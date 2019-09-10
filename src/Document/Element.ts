
import { esn } from '../css';
import {
    props, media,
} from './style';
export interface DocumentProps {

    limitWidth?: boolean;
}
export const Document = esn<DocumentProps>({
    displayName: 'Document',
    defaultProps: {
        limitWidth: true
    },
    tag: 'div',
    style: {
        mkMedia: media,
    },

    rule: {
        limitWidth: ({ value }) => value ? ({
            ...props(true),
        }) : ({
            ...props(false)
        }),

    },
});
