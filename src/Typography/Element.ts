import { esn } from '../css';
import { body1, body2, caption, h1, h2, h3, h4, h5, h6, overline, subtitle1, subtitle2, legend, help } from './style';
export const Body1 = esn<{ mkMaxRows?: number, mkRows?: number }, {}, 'p'>({
    displayName: 'Typography.Body1',
    defaultProps: {},
    tag: 'p',
    style: body1,
    rule: {
        mkMaxRows: ({ value }: { value: number }) => value ? value === 1 ? ({
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis"
        }) : ({
            maxHeight: "3rem"
        }) : {},
        mkRows: ({ value }: { value: number }) => value ? value === 1 ? ({
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis"
        }) : ({
            height: "3rem"
        }) : {},
    }
});
export const Body2 = esn<{ mkMaxRows?: number, mkRows?: number }, {}, 'p'>({
    displayName: 'Typography.Body2',
    defaultProps: {},
    tag: 'p',
    style: body2,
    rule: {
        mkMaxRows: ({ value }: { value: number }) => value ? value === 1 ? ({
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis"
        }) : ({
            maxHeight: "3em"
        }) : {},
        mkRows: ({ value }: { value: number }) => value ? value === 1 ? ({
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis"
        }) : ({
            height: "3em"
        }) : {},
    }
});
export const Caption = esn({
    displayName: 'Typography.Caption',
    defaultProps: {},
    tag: 'caption',
    style: caption,
});
export const H1= esn({
    displayName: 'Typography.H1',
    defaultProps: {},
    tag: 'h1',
    style: h1,
});
export const H2= esn({
    displayName: 'Typography.H2',
    defaultProps: {},
    tag: 'h2',
    style: h2,
});
export const H3 = esn({
    displayName: 'Typography.H3',
    defaultProps: {},
    tag: 'h3',
    style: h3,
});
export const H4 = esn({
    displayName: 'Typography.H4',
    defaultProps: {},
    tag: 'h4',
    style: h4,
});
export const H5 = esn({
    displayName: 'Typography.H5',
    defaultProps: {},
    tag: 'h5',
    style: h5,
});
export const H6= esn({
    displayName: 'Typography.H6',
    defaultProps: {},
    tag: 'h6',
    style: h6,
});
export const Overline = esn({
    displayName: 'Typography.Overline',
    defaultProps: {},
    tag: 'p',
    style: overline,
});
export const Subtitl1= esn({
    displayName: 'Typography.Subtitl1',
    defaultProps: {},
    tag: 'h6',
    style: subtitle1,
});
export const Subtitl2= esn({
    displayName: 'Typography.Subtitl2',
    defaultProps: {},
    tag: 'h6',
    style: subtitle2,
});
export const Legend = esn({
    displayName: 'Typography.Legend',
    defaultProps: {},
    tag: 'legend',
    style: legend,
});
export const Help= esn({
    displayName: 'Typography.Help',
    defaultProps: {},
    tag: 'p',
    style: help,
});