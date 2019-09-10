import { esn } from '../css';
import { topBar, toolBar } from './style';
export interface TopBarProps {
    mkPosition?: 'fixed' | 'absolute' | 'sticky' | 'static';
}

export const TopBar= esn<{}, TopBarProps,'header'> ({
    displayName: 'Bar.TopBar',
    defaultProps: { },
    tag: 'header',
    style: topBar,
    ruleEnum: {
        mkPosition: {
            fixed: {
                mkFixed: 'top',
            },
            absolute: {
                mkAbsolute: 'top',
            },
            sticky: {
                mkSticky: 'top',
            },
            static: {
                position: 'static',
            },
        },
    },
});

export const ToolBar = esn({
    displayName: 'Bar.Toolbar',
    defaultProps: { },
    tag: 'div',
    style: toolBar,
});
