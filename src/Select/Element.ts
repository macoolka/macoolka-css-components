import { esn } from '../css';
import { slidingLabelRoot } from '../InputField/style';
import {

    root,


} from './style';

export interface SelectProps {

    slidingLabeled?: boolean;
}


export const SelectorRoot = esn<SelectProps>({
    displayName: 'Select.Root',
    defaultProps: {},
    tag: 'div',
    style: root,
    rule: {

        slidingLabeled: ({ value }) => value ? slidingLabelRoot : ({}),
    },
});

