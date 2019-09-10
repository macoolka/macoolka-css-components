import { StandProps } from '../css';
export const popover: StandProps = {
    mkScrollBar: 'vertical',
    position: 'absolute',
    // So we see the popover when it's empty.
    // It's most likely on issue on userland.
    minWidth: 16,
    minHeight: 16,
    maxWidth: 'calc(100% - 32px)',
    maxHeight: 'calc(100% - 32px)',
    // We disable the focus ring for mouse, touch and keyboard users.
    outline: 'none',
};
export const modal: StandProps = {
    position: 'fixed',
    mkZIndex: 'modal',
    right: 0,
    bottom: 0,
    top: 0,
    left: 0,
};
export const content: StandProps = {
    position: 'absolute',
    mkScrollBar: 'vertical',
    // So we see the popover when it's empty.
    // It's most likely on issue on userland.
    minWidth: 16,
    minHeight: 16,
    maxWidth: 'calc(100% - 32px)',
    maxHeight: 'calc(100% - 32px)',
    // We disable the focus ring for mouse, touch and keyboard users.
    outline: 'none',
};
export const maskModal: StandProps = {
    mkFixed: 'top',
    mkWidth: 'full',
    mkHeight: 'full',
    mkTransition: 'opacity',
    mkZIndex: 'modal',
};
