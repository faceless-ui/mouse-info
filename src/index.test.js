import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { mockWindowMouseEvents, mockRequestAnimationFrame } from '@trbl/utils';

configure({ adapter: new Adapter() });

mockWindowMouseEvents();
mockRequestAnimationFrame();
