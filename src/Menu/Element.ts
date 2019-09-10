import { extendComponentModuleNoTheme } from '../css';
import { ListItem } from '../List';
import { item } from './style';
export interface MenuItemProps {
    selected?: boolean;
}
export const MenuItem = extendComponentModuleNoTheme(ListItem)
<MenuItemProps, {}, 'li'>({
    displayName: 'Menu.Item',
    tag: 'li',
    defaultProps: {
        selected: false,
    },
    style: item,
    rule: {
        selected: ({ value }) => value ? ({
            mkColor: 'divide',
        }) : ({}),

    },
}) 
