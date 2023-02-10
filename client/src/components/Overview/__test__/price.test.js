import {render, screen, waitFor} from '@testing-library/react';
import '@testing-library/jest-dom';
import Price from '../Price.jsx';


it('renders price for the product', ()=> {
  render(<Price currentPick={{original_price: "140"}} />)
  const priceElement = screen.getByText(/140/i);
  expect(priceElement).toBeInTheDocument();
})
it('renders sale price if present for the product', ()=>{
  render(<Price currentPick={{original_price: "140", sale_price: "100"}} />)
  const priceElement = screen.getByText(/100/i);
  expect(priceElement).toBeInTheDocument();
})
