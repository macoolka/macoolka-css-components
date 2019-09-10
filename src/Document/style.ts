import {  StandProps } from '../css';
import { style as chapterStyle } from '../Chapter';
import { style as commonStyle } from '../Html';
import { style as articleStyle } from '../Article';
import { style as tocStyle } from '../Toc';
import { style as cols2Style } from '../Cols2';
import { style as cols3Style } from '../Cols3';
import { style as tableStyle } from '../Table';
import {getFold} from 'macoolka-object'
export const props=(limitWidth:boolean=true): StandProps=>  getFold()([
    chapterStyle.root(' .chapter'),
    commonStyle.root('',limitWidth),
    articleStyle.root(' .chapter article'),
    tocStyle.root(' .chapter nav'),
    cols2Style.root(' .cols2'),
    cols3Style.root(' .cols3'),
    tableStyle.root('  table'),
]);
export const media: StandProps[] = getFold()([
    chapterStyle.rootMedia(' .chapter'),
    commonStyle.rootMedia(''),
    articleStyle.rootMedia(' .chapter article'),
    tocStyle.rootMedia(' .chapter nav'),
    cols2Style.rootMedia(' .cols2'),
    cols3Style.rootMedia(' .cols3'),
    tableStyle.rootMedia('  table'),
]);
