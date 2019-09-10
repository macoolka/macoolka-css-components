import { esn, lens } from '../css';
import {
    side,
    top,
    sideExpand,
    sideHide,
    sideWrapper,
    bottom,
    bottomWrapper,
} from './style';
export interface SideBarEProp {

    pos: 'left' | 'right'

}
export interface SideBarProp {
    expanded?: boolean;
    standExpanded?: boolean;
    full: boolean;
    // auto: boolean;
}
export const Sidebar= esn<SideBarProp>({
    displayName: 'Sidebar.Sidebar',
    defaultProps: {
        expanded: false,
        standExpanded: false,
        full: false,
    },
    tag: 'div',
    style: side,
    rule: {
        //expanded: ({ value,source }) => value ? { sideExpand, mkMedia: [{}, {}, { mkZIndex: 'popup' }] } : sideHide,
        standExpanded: ({ value, source, theme }) => {
            const data: SideBarProp = (source as any)[""];
            const fullStyle = data.full ? {} : {
                paddingTop: lens.boxBarHeightLens.get(theme).large,
            };
            const standStyle = (value ? sideExpand : sideHide);
            const expandStyle = data.expanded ? { ...sideExpand, mkZIndex: 'popup', paddingTop: 0 } : sideHide

            const result = ({ ...standStyle, ...fullStyle, mkMedia: [expandStyle, expandStyle, expandStyle] })
            return result as any;
        },
        full:{}


    },
});
export const SidebarWrapper = esn({
    displayName: 'Sidebar.Wrapper',
    defaultProps: {},
    tag: 'div',
    style: sideWrapper,

});
export const SidebarBottom = esn({
    displayName: 'Sidebar.Bottom',
    defaultProps: {},
    tag: 'div',
    style: bottom,

});
export const SidebarBottomWrapper = esn({
    displayName: 'Sidebar.BottomWrapper',
    defaultProps: {},
    tag: 'div',
    style: bottomWrapper,

});
export const SidebarTop = esn({
    displayName: 'Sidebar.Top',
    defaultProps: {},
    tag: 'div',
    style: top,

});
