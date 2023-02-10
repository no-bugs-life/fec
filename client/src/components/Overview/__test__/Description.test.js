import {render, screen, waitFor} from '@testing-library/react';
import '@testing-library/jest-dom';
import Description from '../Description.jsx';

let product= {campus: "hr-rfp", category:"Jackets",default_price : "140.00",description : "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.", id : 40344 ,name : "Camo Onesie", slogan: "Blend in to your crowd"}
it('renders loading',async ()=> {
  await render(<Description  product={product}/>);
  const loadingElement = await screen.findByText(/Loading/i);
   expect(loadingElement).toBeInTheDocument();
})
// it('renders proper text in the button based on the prop passed', ()=> {
//   render(<Checkout checkoutUpdate={true}/>);
//   const checkoutElement = screen.getByText(/Added to Bag/i);
//   expect(checkoutElement).toBeInTheDocument();
// })
