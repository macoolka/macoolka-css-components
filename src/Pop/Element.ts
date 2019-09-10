import { esn } from '../css';
import { popover, modal, maskModal, content } from './style';
export const Popover = ({
    displayName: 'Pop.Popover',
    defaultProps: {},
    tag: 'div',
    style: popover,
});
export const PopContent = esn({
    displayName: 'Pop.Content',
    defaultProps: {},
    tag: 'div',
    style: content,
});
export interface PopProps {
    opened?: boolean;
}
export const Modal = esn<PopProps>({
    displayName: 'Pop.Modal',
    defaultProps: { opened: false },
    tag: 'div',
    style: modal,
    rule: {
        opened: ({ value }) => value ? ({
        }) : ({
            mkVisible: 'hidden',
        }),
    },
});
export const MaskModal = esn<PopProps>({
    displayName: 'Pop.MaskModal',
    defaultProps: { opened: false },
    tag: 'div',
    style: maskModal,
    rule: {
        opened: ({ value }) => value ? ({
            opacity: 1,
        }) : ({
            mkVisible: 'hidden',
            opacity: .1,
        }),
    },
});
