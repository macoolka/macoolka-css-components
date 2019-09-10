import { esn, lens } from '../css';
import { bar, barWrapper } from './style';
type AppBarProp = {
    full: boolean;
}
export const AppBar=esn<AppBarProp,{},'header'>  ({
    displayName: 'AppBar.AppBar',
    defaultProps: {
        full: true
    },
    tag: 'header',
    style: bar,
    rule: {
        full: ({ value, theme }) => value ? ({ mkPaddingLeft: 'none' }) : ({
            mkTransition: 'padding-left',

            paddingLeft: lens.boxContentWidthLens.get(theme).nav,
            mkMedia: [{
            }, {

            }, {
                mkPaddingLeft: 'none'
            }],
        })
    }
});
export const AppBarWrapper = esn({
    displayName: 'AppBar.Wrapper',
    defaultProps: {},
    tag: 'div',
    style: barWrapper,
});
