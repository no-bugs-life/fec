import renderer from 'react-test-renderer';
import ReviewList from './ReviewList.jsx';

it('renders properly', () => {
  const component = renderer.create(
    <ReviewList/>
  );

  let test = component.toJSON();
  expect(test).toMatchSnapshot();
});

//I tried to add more complicated tests but nothing works and my brain is hurting