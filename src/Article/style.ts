import { StandProps } from '..';

export const article: StandProps = {

    mkMarginTop: 'none',
    mkPaddingGutterTop: 'medium',
};
export const articleSmall: StandProps = {
    mkPaddingTop: 'none',
};
export const title: StandProps = {
    mkFontWeight: 'regular',
    mkTextColor: 'main',
    overflow: 'hidden',
    mkBorder: 'top',
    mkBorderColor: 'divide',
    mkTypography: 'h5',
    mkMarginGutterBottom: 'small',
    mkPaddingGutterTop: 'medium',
    mkMaxWidth: 'full',
};
export const titleSmall: StandProps = {
    mkTypography: 'h6',
    mkMarginBottom: 'none',
    mkPaddingTop: 'medium',
    mkPaddingBottom: 'medium',
};
export const titleFirst: StandProps = {
    borderTop: 'none',
};
export const titleFirstSmall: StandProps = {
    mkBorder: 'top',
};

export const root = (tag: string): StandProps => ({
    selector: {
        [`${tag}`]: article,
        [`${tag}>h1:not(.mk-component),${tag}>h2:not(.mk-component)`]: title,
        [`${tag}:nth-child(1) > h1:not(.mk-component),${tag}:nth-child(1) > h2:not(.mk-component)`]: titleFirst,
    },
});
export const rootMedia = (tag: string): StandProps[] => [{
    selector: {
        [`${tag}`]: articleSmall,
        [`${tag} >h1:not(.mk-component),${tag} >h2:not(.mk-component)`]: titleSmall,
        [`${tag}:nth-child(1) > h1:not(.mk-component),${tag}:nth-child(1) > h2:not(.mk-component)`]: titleFirstSmall,
    },
}];
