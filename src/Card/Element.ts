import { esn } from '../css';
import { media, header, card, content, actions } from './style';
export const Card = esn({
    displayName: 'Card.Card',
    defaultProps: {},
    tag: 'div',
    style: card,
});
export const CardContent = esn({
    displayName: 'Card.Content',
    defaultProps: {},
    tag: 'div',
    style: content,
});
export const CardActions = esn({
    displayName: 'Card.Actions',
    defaultProps: {},
    tag: 'div',
    style: actions,
});
export const CardMedia = esn({
    displayName: 'Card.Media',
    defaultProps: {},
    tag: 'div',
    style: media,
});
export const CardHeader = esn({
    displayName: 'Paper',
    defaultProps: {},
    tag: 'div',
    style: header,
});
