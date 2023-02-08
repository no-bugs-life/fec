jest.useFakeTimers()
import renderer from 'react-test-renderer';
import RelatedList from '../RelatedList.jsx';


jest.mock("axios")


it('renders properly', () => {
  const component = renderer
    .create(
      <RelatedList product={{id: 40352}}/>
    )
    .toJSON();
  expect(component).toMatchSnapshot();
});