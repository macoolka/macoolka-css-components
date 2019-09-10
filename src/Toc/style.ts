import { StandProps } from '../css';
import {style} from '../Block';
export const toc: StandProps = {
    ...style.item,
    mkBorder: 'leftBar',
    paddingLeft: 20,
    marginTop: 60,
    mkBorderColor: 'main',
};
export const tocSmall: StandProps = {

    display: 'none',
};
export const title: StandProps = {
    ...style.item,
    mkFontSize: 'subtitle',
    mkTextColor: 'secondary',
    marginBottom: 12,
    mkFontWeight: 'regular',
};
export const list: StandProps = {
    ...style.item,
    listStyle: 'none',
    marginTop: 0,
    paddingLeft: 0,
};
export const item: StandProps = {
    ...style.item,
    mkTextColor: 'main',
    mkFontSize: 'h6',
    mkElementHeight: 'medium',
    listStyleType: 'none',
    marginV: 0,
};
export const itemLast: StandProps = {
    paddingTop: 10,
    mkElementHeight: 'small',
};
export const link: StandProps = {
    ...style.item,
    mkTextColor: 'main',
    textDecoration: 'none',
    cursor: 'pointer',
};

export const root = (tag: string): StandProps => ({
    selector: {
        [`${tag}`]: toc,
        [`${tag} li:last-child`]: itemLast,
        [`${tag} h1`]: title,
        [`${tag} ul`]: list,
        [`${tag} li`]: item,
        [`${tag} a`]: link,
    },
});
export const rootMedia = (tag: string): StandProps[] => [{
    selector: {
        [`${tag}`]: tocSmall,
    },
}];
