import {  StandProps } from '../css';
export const cols: StandProps = {
    mkMarginGutterTop: 'large',
    mkMarginGutterBottom: 'medium',
};
export const children: StandProps = {
    verticalAlign: 'top',
    display: 'inline-block',
    mkPaddingGutterBottom: 'small',
};
export const childrenSmall: StandProps = {
    mkWidth: 'full',
    marginH: 0,
    mkMarginGutterV: 'small',
    mkScrollBar: 'both',
};
export const col2FirstChildren: StandProps = {
    width: 350,
    mkMarginGutterRight: 'medium',
};
export const col2SecondChildren: StandProps = {
    width: 740,
    verticalAlign: 'top',
};
export const col2ChildrenMedium: StandProps = {
    width: 'auto',
    display: 'block',
    marginRight: 0,
};
export const root = (tag: string): StandProps => ({
    selector: {
        [`${tag}`]: cols,
        [`${tag} >div`]: children,
        [`${tag} >div:nth-child(1)`]: col2FirstChildren,
        [`${tag} >div:nth-child(2)`]: col2SecondChildren,
    },
});
export const rootMedia = (tag: string): StandProps[] => [{
    selector: {
        [`${tag} >div`]: childrenSmall,
    },
}, {
    selector: {
        [`${tag} >div`]: childrenSmall,
        [`${tag} >div:nth-child(1),${tag} >div:nth-child(2)`]: col2ChildrenMedium,
    },
}];
