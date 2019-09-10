import { StandProps } from '..';
import {style} from '../Block';
export const h1: StandProps = {
    ...style.item,
    mkTextColor: 'main',
    mkTypography: 'h4',
    mkMarginGutterBottom: 'small',
};
export const h1Small: StandProps = {
    mkTypography: 'h5',
    mkMarginGutterBottom: 'medium',
};
export const chapter: StandProps = {

};

export const root = (tag: string): StandProps => ({
    selector: {
        [`${tag} >h1:not(.mk-component)`]: h1,
    },
});
export const rootMedia = (tag: string): StandProps[] => [{
    selector: {
        [`${tag} >h1:not(.mk-component)`]: h1Small,
    },
}];
