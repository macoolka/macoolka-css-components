
import { parse } from '../css';
import { StyledButton } from './Element'
describe('StyledButton', () => {
    it(' StyledButton variant text', () => {
        expect(parse(StyledButton)({
            mkVariant: 'flat',
        })).toMatchSnapshot();
    });
    it(' StyledButton variant text cancel hover color', () => {
        expect(parse(StyledButton)({
            mkVariant: 'flat',
            mkHoverTextColor: 'none',
        })).toMatchSnapshot();
    });
    it(' StyledButton variant container', () => {
        expect(parse(StyledButton)({
            mkVariant: 'raised',
        })).toMatchSnapshot();
    });
    it(' StyledButton variant outline', () => {
        expect(parse(StyledButton)({
            mkVariant: 'outlined',
        })).toMatchSnapshot();
    });
});