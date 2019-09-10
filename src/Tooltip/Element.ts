import { esn } from '../css';
import {
    root,
    tooltip,
    tooltipOpened,
    left,
    touch,
    right,
    top,
    bottom

} from './style';
export type TooltipPropS= {
    opened?: boolean,
    touch?: boolean,
};
export type TooltipPropE= {
    pop?: 'left' | 'right' | 'top' | 'bottom'
};
export interface TooltipProp extends TooltipPropS, TooltipPropE {

}
export const TooltipRoot = esn<TooltipPropS>({
    displayName: 'Tooltip.Root',
    defaultProps: {},
    tag: 'div',
    style: root,
    rule: {
        opened: ({ value }) => value ? ({
            pointerEvents: 'auto',
        }) : ({}),
    },
});
export const Tooltip= esn< TooltipPropS, TooltipPropE>({
    displayName: 'Tooltip.Tooltip',
    defaultProps: {},
    tag: 'div',
    style: tooltip,
    rule: {
        opened: ({ value }) => value ? (tooltipOpened) : ({}),
        touch: ({ value }) => value ? (touch) : ({}),
    },
    ruleEnum: {
        pop: {
            left: left,
            right: right,
            top: top,
            bottom: bottom,
        },
    },
});
