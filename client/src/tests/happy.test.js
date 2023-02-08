import React from 'react';
import '@testing-library/react/dont-cleanup-after-each';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import {render, screen, waitFor} from '@testing-library/react';
import Description from '../components/Overview/Description.jsx';
import axios from 'axios';

// import React from 'react';
// import { render, fireEvent } from '@testing-library/react';
// import axios from 'axios';
// import RelatedList from '../RelatedList.jsx';
axios.defaults.baseURL = 'http://localhost:3000';

jest.mock('axios');

// axios.get.mockImplementation((url) => {
//   switch (url) {
//     case '/users.json':
//       return Promise.resolve({data: [{name: 'Bob', items: []}]})
//     case '/items.json':
//       return Promise.resolve({data: [{id: 1}, {id: 2}]})
//     default:
//       return Promise.reject(new Error('not found'))
//   }
// })


describe('RelatedList component', () => {
  let product;
  let myObj = {
    campus
  :
  "hr-rfp",
  category
  :
  "Jackets",
  created_at
  :
  "2021-08-13T14:38:44.509Z",
  default_price
  :
  "140.00",
  description
  :
  "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
  features
  :
  [
  {feature: 'Fabric', value: 'Canvas'},
  {feature: 'Buttons', value: 'Brass'}]
  ,
  id
  :
  40344,
  name
  :
  "Camo Onesie",
  slogan
  :
  "Blend in to your crowd",
  updated_at
  :
  "2021-08-13T14:38:44.509Z"}
  let myObj2 =
    {
      product_id
      :
      "40344",
      results
      :
      [
      {style_id: 240500, name: 'Forest Green & Black', original_price: '140.00', sale_price: null, photos:[{thumbnail_url
        :
        "https://images.unsplash.com/photo-1533779183510-8f55a55f15c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
        url
        :
        "https://images.unsplash.com/photo-1533779183510-8f55a55f15c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"}],
       skus: [
        {quantity: 16, size: 'S'},
        {quantity: 10, size: 'L'}
      ] },
      {style_id: 240501, name: 'Desert Brown & Tan', original_price: '140.00', sale_price: null,photos:[{thumbnail_url:
        "https://images.unsplash.com/photo-1533779183510-8f55a55f15c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
        url
        :
        "https://images.unsplash.com/photo-1533779183510-8f55a55f15c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"}]
      },
      ]}

  beforeEach(() => {
    product = {
      campus:"hr-rfp",
  category: "Jackets",
  default_price:"140.00",
  description:"The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
  id:40344,
  name:"Camo Onesie",
  slogan:"Blend in to your crowd",
  updated_at:
  "2021-08-13T14:38:44.509Z"
  };
    axios.get.mockImplementation((url) => {
      switch(url) {
        case `/api/products/40344`:
          return Promise.resolve({data: myObj })
        case  `/api/products/${product.id}/styles`:
          return Promise.resolve({data: myObj2 })
        default:
          return Promise.resolve({data: []})
      }
    })
  });

  it('should render related products', async () => {
    const {findByTestId,findByText,getByText} = render(<Description product={product} />);
    const title = await findByTestId("category");
    console.log(title)
    expect(title).toHaveTextContent('Jackets');

    const view = await findByTestId('2');
    expect(view).toBeInTheDocument();

  });


    })





// describe('Jest+RTL Workshop', function() {


//   // it('should decrease the counter', () => {
//   //   expect(screen.getByTestId('counter')).toHaveTextContent('1');
//   //   return user.click(screen.getByRole('button', {name: 'Decrease!'}))
//   //     .then(() => {
//   //       expect(screen.getByTestId('counter')).toHaveTextContent(/^0$/);
//   //     })
//   // });

//   // it('should change the counter with the dropdown', () => {
//   //   expect(screen.getByTestId('counter')).toHaveTextContent('0');
//   //   return user.selectOptions(screen.getByRole('combobox'), screen.getByRole('option', {name: 1}))
//   //     .then(() => {
//   //       expect(screen.getByTestId('counter')).toHaveTextContent(/^1$/);
//   //     })
//   // });

// });