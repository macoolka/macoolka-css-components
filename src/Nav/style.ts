import { StandProps } from '../css';
export const nav: StandProps = {
    lineHeight: 1,
    paddingH: 0,
    paddingTop: 12,
    paddingBottom: 40,
    mkWidth:'full',
};
const space=22;
export const list: StandProps = {

};
export const item: StandProps = {
    mkTransition: 'height',
};
export const title=(order:number=1): StandProps =>({
    mkTypography: 'subtitle2',
    lineHeight: 1,
    cursor: 'pointer',
    paddingV: 15,
    paddingLeft: space*order,
    paddingRight: 0,
    marginTop: 0,
    borderLeft: '2px solid transparent',
    mkHoverColor:'divide',
});
export const link=(order:number=2): StandProps => ({
    paddingV: 10,
    paddingLeft: space*order+2,
    paddingRight: 10,
    mkWidth:'full',
    borderLeft: '2px solid transparent',
    cursor: 'pointer',
    userSelect: 'none',
    overflow: 'hidden',
    display: 'block',
    letterSpacing: 0.1,
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    lineHeight: 1,
    mkTypography: 'subtitle2',
    mkTextColor: 'primary',
    textDecoration: 'none',
    selector: {
        ':hover': {
            mkColor: 'divide',
        },
    },
});

export const root = (tag: string): StandProps => ({
    selector: {
        [`${tag}`]: nav,
        [`${tag} dt`]: title(),
        [`${tag} dl`]: list,
        [`${tag} dd`]: item,
        [`${tag} a`]: link(),
    },
});
export const rootMedia = (tag: string): StandProps[] => [];
