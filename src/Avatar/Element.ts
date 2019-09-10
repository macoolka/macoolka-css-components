import { esn } from '../css';
import { avatar } from './style';
export interface AvatarProps {
    mkSize?: 'small' | 'medium' | 'large';
}
export const Avatar= esn< {}, AvatarProps>({
    displayName: 'Avatar',
    defaultProps: {
        mkSize: 'medium'
    },
    tag: 'div',
    style: avatar,
    ruleEnum: {
        mkSize: {
            small: {
                width: 36,
                height: 36,
            },
            medium: {
                width: 48,
                height: 48,
            },
            large: {
                width: 64,
                height: 64,
            }
        },
    },
});
export const AvatarImage= esn<{}, AvatarProps,'img'> ({
    displayName: 'Avatar',
    defaultProps: {
        mkSize: 'medium'
    },
    tag: 'img',
    style: avatar,
    ruleEnum: {
        mkSize: {
            small: {
                width: 36,
                height: 36,
            },
            medium: {
                width: 48,
                height: 48,
            },
            large: {
                width: 64,
                height: 64,
            }
        },
    },
});
