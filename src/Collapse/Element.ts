import { esn } from '../css';
import { collapse } from './style';
export interface CollapseProps {
    opened?: boolean;
}
export const Collapse = esn<CollapseProps>({
    displayName: 'Collapse',
    defaultProps: {
        opened: false,
     },
    tag: 'div',
    style: collapse,
    rule: {
        opened: ({value}) => value ? ({
            height: 'auto',
        }) : ({}),
    },
});
