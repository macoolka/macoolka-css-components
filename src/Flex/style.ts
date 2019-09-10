import { StandProps } from '../css';
import { style } from '../Element';
export const row: StandProps = {
    ...style.element,
    mkFlex: 'row',
};
export const rowCenter: StandProps = {
    ...style.element,
    mkFlex: 'rowCenter',
};
export const column: StandProps = {
    ...style.element,
    mkFlex: 'column',
};
export const columnCenter: StandProps = {
    ...style.element,
    mkFlex: 'columnCenter',
};
export const rowAuto: StandProps = {
    ...style.element,
    mkFlex: 'rowAuto',
};
export const rowAutoCenter: StandProps = {
    ...style.element,
    mkFlex: 'rowAutoCenter',
};
export const split: StandProps = {
    ...style.element,
    mkFlexItemGrow: 1,
    mkFlexItemShrink: 1,
    mkFlexItemWidth: 'auto',
};
