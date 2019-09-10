import { esn, lens } from '../css';
import { content, body, navContent, maskModal } from './style';
export const Page = esn({
    displayName: 'App.Page',
    defaultProps: {},
    tag: 'div',
    style: body,
});
export const AppContent = esn({
    displayName: 'App.Content',
    defaultProps: {},
    tag: 'div',
    style: content,
});
export interface AppNavContentProp {
    expanded: boolean;
}
export const AppNavContent = esn<AppNavContentProp>({
    displayName: 'App.NavContent',
    defaultProps: {
        expanded: false
    },
    tag: 'div',
    style: navContent,
    rule: {
        //expanded: ({ value,source }) => value ? { sideExpand, mkMedia: [{}, {}, { mkZIndex: 'popup' }] } : sideHide,
        expanded: ({ value, theme }) => ({
            paddingBottom: 100,
            marginTop: lens.boxBarHeightLens.get(theme).large,

            paddingLeft: value ? lens.boxContentWidthLens.get(theme).nav : 0,
            boxSizing: 'border-box',
            mkMedia: [{
                marginTop: lens.boxBarHeightLens.get(theme).medium,
                paddingLeft: 0,
                paddingBottom: 50,
            }, {
                paddingLeft: 0,
            }, {
                paddingLeft: 0,
            }],
        })



    },
});

export interface MaskModalProps {
    opened?: boolean;
    navOpened?: boolean;
}
export const MaskModal = esn< MaskModalProps, {}>({
    displayName: 'App.MaskModal',
    defaultProps: { opened: false },
    tag: 'div',
    style: maskModal,
    rule: {
        opened: ({ value }) => value ? ({
            opacity: 1,
            mkVisible: 'visible',
        }) : ({
            mkVisible: 'hidden',
            opacity: .1,
        }),
        navOpened: ({ value }) => value ? ({
            mkMedia: [{

            }, {

            }, {
                mkVisible: 'visible',
                opacity: 1,
            }],
        }) : ({
            mkMedia: [{

            }, {

            }, {
                mkVisible: 'hidden',
                opacity: .1,
            }],
        }),
    },
});
