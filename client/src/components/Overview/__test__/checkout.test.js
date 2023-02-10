import {render, screen, waitFor} from '@testing-library/react';
import '@testing-library/jest-dom';
import Checkout from '../Checkout.jsx';

it('renders the Checkout button',()=> {
  render(<Checkout />);
  const checkoutElement = screen.getByText(/Add to Bag/i);
  expect(checkoutElement).toBeInTheDocument();
})
it('renders proper text in the button based on the prop passed', ()=> {
  render(<Checkout checkoutUpdate={true}/>);
  const checkoutElement = screen.getByText(/Added to Bag/i);
  expect(checkoutElement).toBeInTheDocument();
})
it('renders proper text in the button based on the prop passed', ()=> {
  render(<Checkout checkoutUpdate={false}/>);
  const checkoutElement = screen.getByText(/Add to Bag/i);
  expect(checkoutElement).toBeInTheDocument();
})