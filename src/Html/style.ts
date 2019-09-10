import { StandProps } from '../css';
import {omit} from 'macoolka-object'
/* import {style} from '../Block';
import {style as inlineStyle} from '../Inline' */
export const h1: StandProps = {
  //  mkTypography:'h1',
     mkFontSize: 'h6',
    mkFontWeight: 'regular',
    lineHeight: '32px',
    mkMarginGutterBottom: 'small', 
  //  maxWidth: 940,
};
export const h2: StandProps = {
  //  mkTypography:'h2',
    mkFontSize: 'subtitle',
    mkFontWeight: 'regular',
    lineHeight: '25px',
    mkMarginGutterBottom: 'small',
    maxWidth: 760, 
};
export const h3: StandProps = {
  //  mkTypography:'h3',
     mkFontSize: 'p',
    mkFontWeight: 'medium',
    lineHeight: '21px',
    mkMarginGutterBottom: 'small',
    maxWidth: 760, 
};
export const p: StandProps = {
    mkTypography:'body2',
    //maxWidth: 760,
};

export const blockquote: StandProps = {
    mkBorder: 'leftBar',
    mkPaddingV: 'small',
    mkPaddingH: 'large',
    mkMarginV: 'large',
    mkMarginH: 'none',
    fontSize: 'inherit',

};
export const pre: StandProps = {

    mkFontSize: 'p',
    lineHeight: '20px',
    padding: '10px 25px 10px 20px',
    mkColor: 'primary',
    mkScrollBar: 'both',
    mkMarginV: 'large',
    mkMarginH: 'none',
    /*     mkBorder:'bordered',
        mkBorderColor:'secondary',
        mkBorderRadius: 'medium', */
};
export const hr: StandProps = {
    mkColor: 'divide',
    mkPadding: 'none',
    mkMarginV: 'none',
    mkMarginH: 'none',
    border: '0',
    height: '1px',
};

export const ul: StandProps = {

    mkMarginGutterBottom: 'small',
    mkPaddingGutterLeft: 'small',
    listStyleType: 'disc',
};
export const ol: StandProps = {

    mkMarginGutterBottom: 'small',
    mkPaddingGutterLeft: 'small',
    listStyleType: 'decimal',
};
export const li: StandProps = {
    ...p,

};
export const a: StandProps = {

    mkTextColor: 'accent',
    cursor: 'pointer',
    display: 'inline',
    textDecoration: 'none',
    fontSize: 'inherit',
};
export const img: StandProps = {
   

   // mkMaxWidth: 'full',
  //  mkWidth: 'full',
};
export const strong: StandProps = {

    mkFontWeight: 'bold',
};
const limitWidthProcss =(limitWidth:boolean)=>(a:StandProps)=>limitWidth?a:omit(a,'maxWidth');
export const root = (tag: string,limitWidth:boolean=true): StandProps => ({
    selector: {
        [`${tag} h1:not(.mk-component)`]: limitWidthProcss(limitWidth)(h1),
        [`${tag} h2:not(.mk-component)`]: limitWidthProcss(limitWidth)(h2),
        [`${tag} h3:not(.mk-component)`]: limitWidthProcss(limitWidth)(h3),
        [`${tag} p:not(.mk-component)`]: limitWidthProcss(limitWidth)(p),
        [`${tag} a:not(.mk-component)`]: a,
        [`${tag} blockquote:not(.mk-component)`]: blockquote,
        [`${tag} pre:not(.mk-component)`]: pre,
        [`${tag} hr:not(.mk-component)`]: hr,
        [`${tag} ul:not(.mk-component)`]: ul,
        [`${tag} ol:not(.mk-component)`]: ol,
        [`${tag} li:not(.mk-component)`]: li,
        [`${tag} img:not(.mk-component)`]: img,
        [`${tag} strong:not(.mk-component)`]: strong,
    },
});
export const rootMedia = (tag: string): StandProps[] => [];
