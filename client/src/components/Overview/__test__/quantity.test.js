import {render, screen, waitFor} from '@testing-library/react';
import '@testing-library/jest-dom';
import Quantity from '../Quantity.jsx';

let currentInventory = {'1394769':{quantity: 16, size: 'S'}}

it('renders Quantity Component for the product', ()=> {
  render(<Quantity currentInventory={currentInventory} currentSize={'1394769'}/>)
  const quantityElement = screen.getByText(/Qty/i);
  expect(quantityElement).toBeInTheDocument();
})
// it('renders a select dropdown', ()=>{
//   render(<Quantity currentInventory={currentInventory} currentSize={'1394769'} />)
//   const priceElement = screen.getByText(/100/i);
//   expect(priceElement).toBeInTheDocument();
// })
