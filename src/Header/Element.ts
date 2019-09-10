import { esn } from '../css';
import {
    header, headerSmall, headerLarge, toolbar,
    imageRightHeader,
    imageRightHeaderDescription,
    imageRightHeaderImage,
    imageRightHeaderTitle
} from './style';
export const Header = esn({
    displayName: 'Header.Header',
    defaultProps: {},
    tag: 'header',
    style: {
        ...header,
        mkMedia: [headerSmall, {

        }, headerLarge],
    },
});
export const Toolbar= esn({
    displayName: 'Header.Toolbar',
    defaultProps: {},
    tag: 'header',
    style: toolbar,
});
export const ImageRightHeader = esn({
    displayName: 'Header.ImageRightHeader',
    defaultProps: {},
    tag: 'header',
    style: imageRightHeader,
});
export const ImageRightHeaderTitle = esn({
    displayName: 'Header.ImageRightHeaderTitle',
    defaultProps: {},
    tag: 'h3',
    style: imageRightHeaderTitle,
});
export const ImageRightHeaderDescription= esn({
    displayName: 'Header.ImageRightHeaderDescription',
    defaultProps: {},
    tag: 'h2',
    style: imageRightHeaderDescription,
});
export const ImageRightHeaderImage = esn({
    displayName: 'Header.ImageRightHeaderImage',
    defaultProps: {},
    tag: 'img',
    style: imageRightHeaderImage,
});
