import {  parse} from '../css';
import {TextButton} from './Element'
describe('StyledButton', () => {
    it(' StyledButton variant text', () => {
        expect(parse(TextButton)({
            mkSize: 'small',
        })).toMatchSnapshot();
    });

    it(' StyledButton variant container', () => {
        expect(parse(TextButton)({
            mkSize: 'medium',
        })).toMatchSnapshot();
    });  
    it(' StyledButton variant outline', () => {
        expect(parse(TextButton)({
            mkSize: 'large',
        })).toMatchSnapshot();
    });  
});