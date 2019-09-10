import { StandProps } from '../css';

export const table: StandProps = {

    mkColor: 'primary',
    mkWidth: 'full',
    mkMarginGutterBottom: 'medium',
    tableLayout: 'auto',
    borderCollapse: 'collapse',
    borderSpacing: '0px',
};
export const tbody: StandProps = {

};
export const thead: StandProps = {

};
export const tr: StandProps = {

};
export const th: StandProps = {
    mkColor: 'divide',
    mkTextColor: 'secondary',
    mkTypography: 'body2',
    mkBorder: 'bordered',
    mkBorderColor: 'divide',
    padding: '12px 12px 12px 24px',
    verticalAlign: 'middle',
};
export const trFirst: StandProps = {

};
export const td: StandProps = {

    mkBorder: 'bordered',
    mkBorderColor: 'divide',
    mkTypography: 'body2',
    mkTextColor: 'primary',
    verticalAlign: 'middle',
    mkElementHeight: 'medium',
    padding: '12px 12px 12px 24px',
};
export const leftBorder: StandProps = {
    mkBorder: 'left',
    mkBorderColor: 'divide',
};
export const topBorder: StandProps = {
    mkBorder: 'top',
    mkBorderColor: 'divide',
};
export const rightBorder: StandProps = {
    mkBorder: 'right',
    mkBorderColor: 'divide',
};
export const bottomBorder: StandProps = {
    mkBorder: 'bottom',
    mkBorderColor: 'divide',
};
/* export const PInFirstTr:Props={
    mkTextColor: 'secondary',
} */
export const tdLastChild: StandProps = {
    mkMarginBottom: 'none',
};

export const root = (tag: string): StandProps => ({
    selector: {
        [`${tag}`]: table,
        [`${tag} thead`]: thead,
        [`${tag} tbody`]: tbody,
        [`${tag} tr`]: tr,

        [`${tag} tr td`]: td,
        [`${tag} tr th`]: th,

        [`${tag} tr th:first-child,${tag} tr td:first-child`]: leftBorder,
        [`${tag} thead tr th:last-child,${tag} tr td:last-child`]: rightBorder,

        [`${tag} tr:first-child th`]: topBorder,
      //  [`${tag} tr:first-child th p`]: PInFirstTr,

        [`${tag} tr:last-child td`]: bottomBorder,

        [`${tag} td>:last-child`]: tdLastChild,

    },
});
export const rootMedia = (tag: string): StandProps[] => [];
