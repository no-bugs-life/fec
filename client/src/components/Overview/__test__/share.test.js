import {render, screen, waitFor} from '@testing-library/react';
import '@testing-library/jest-dom';
import Share from '../share.jsx';

it('renders three social media icons',async ()=> {
  render(<Share/>);
  const loadingElement = await screen.findAllByRole("link");
   expect(loadingElement.length).toBe(3);
})