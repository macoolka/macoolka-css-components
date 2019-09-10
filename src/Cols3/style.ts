import {  StandProps } from '../css';
import {cols, children, childrenSmall} from '../Cols2/style';
export {cols, children, childrenSmall};

export const col3FirstChildren: StandProps = {
    width: 350,
    mkMarginGutterRight: 'medium',
};
export const col3SecondChildren: StandProps = {
    width: 350,
    mkMarginGutterRight: 'medium',
    verticalAlign: 'top',

};
export const col3ThirdChildren: StandProps = {
    width: 350,
    verticalAlign: 'top',
    mkMarginRight: 'none',
};
export const col3FirstChildrenMedium: StandProps = {
    display: 'block',
    width: 'auto',
};

export const root = (tag: string): StandProps => ({
    selector: {
        [`${tag}`]: cols,
        [`${tag} >div`]: children,
        [`${tag} >div:nth-child(1)`]: col3FirstChildren,
        [`${tag} >div:nth-child(2)`]: col3SecondChildren,
        [`${tag} >div:nth-child(3)`]: col3ThirdChildren,
    },
});
export const rootMedia = (tag: string): StandProps[] => [{
    selector: {
        [`${tag} >div`]: childrenSmall,
    },
}, {
    selector: {
        [`${tag} >div`]: childrenSmall,
        [`${tag} >div:nth-child(1)`]: col3FirstChildrenMedium,
    },
}];
