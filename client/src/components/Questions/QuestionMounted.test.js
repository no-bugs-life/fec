import 'jsdom-global/register';
import QuestionMounted from './QuestionMounted.jsx';
import renderer from 'react-test-renderer';
import React from 'react';
import Enzyme from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';

Enzyme.configure({ adapter: new Adapter() });

describe('Questions Mounted', () => {
      it('should be defined', () => {
        expect(QuestionMounted).toBeDefined();
      })

      it('should render without throwing an error', () => {
        expect(Enzyme.shallow(<QuestionMounted />).exists()).toBe(true);
      });

      it('should be selected by class', function() {
        expect(Enzyme.shallow(<QuestionMounted />).is('.question')).toBe(true);
      });

      it('should mount in a full DOM', function() {
        expect(Enzyme.mount(<QuestionMounted />).find('.question').length).toBe(1);
      });
    });

