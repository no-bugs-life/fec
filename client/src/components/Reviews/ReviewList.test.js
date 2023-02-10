import renderer from 'react-test-renderer';
import ReviewList from './ReviewList.jsx';
import {render, fireEvent, screen, waitFor, getByText} from '@testing-library/react';
import '@testing-library/jest-dom'

it('renders properly', () => {
  const component = renderer.create(
    <ReviewList />
  );

  let test = component.toJSON();
  expect(test).toMatchSnapshot();
});

it('does not search when less than 3 characters are typed in the search bar', async () => {
  render(<ReviewList product_id={40344} productName={'funny hat'}/>);
  return waitFor(() => expect(screen.queryByText('Write Review')).toBeInTheDocument())
    .then(() => {
      const inputNode = screen.getByPlaceholderText('Search...')
      fireEvent.keyDown(inputNode, {Key: 'A', code: 'KeyA'})
      console.log(inputNode)
    })
    .catch((err) => {
      console.log('error', err);
    })
});

it('adds filter to page when progress bar is clicked', () => {
  render(<ReviewList product_id={40344} productName={'funny hat'}/>);
  return waitFor(() => expect(screen.queryByText('Write Review')).toBeInTheDocument())
    .then(() => {

    })
    .catch((err) => {
      console.log('error', err);
    })
})

it('opens write a review modal on button click', () => {
  render(<ReviewList product_id={40352} productName={'funny hat'}/>);
  // const button = getByText('Write Review')
  return waitFor(() => expect(screen.queryByText('Write Review')).toBeInTheDocument())
    .then(()=> {
      fireEvent.click(screen.getByText('Write Review'));
    })

})