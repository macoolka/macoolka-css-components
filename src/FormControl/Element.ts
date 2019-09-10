import { esn } from '../css';
import { root } from './style';

export interface FormControlProps {
    mkSize?: 'small' | 'medium' | 'large';
}
export const FormControl = esn<{}, FormControlProps>({
    displayName: 'FormControl',
    tag: 'div',
    defaultProps: {
        mkSize: 'medium',

    },
    style: root,
    ruleEnum: {
        mkSize: {
            small: {

            },
            medium: {
            /*     marginTop: 8,
                marginBottom: 4, */
            },
            large: {
/*                 marginTop: 16,
                marginBottom: 8, */
            },
        },

    },
});
