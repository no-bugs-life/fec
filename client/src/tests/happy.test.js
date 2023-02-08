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
jest.mock('axios', () => {
  return {
    get: jest.fn(() => Promise.resolve({ data: {} }))
  };
});

const axios = require('axios');

const mockUseEffect = (callback) => {
  const mockPromise = Promise.all([
    axios.get(`http://127.0.0.1:3000/api/products/${product.id}`),
    axios.get(`http://127.0.0.1:3000/api/products/${product.id}/styles`),
    axios.get('http://127.0.0.1:3000/api/reviews/meta', { params: { "product_id": product.id } })
  ]).then((results) => {
    callback(results);
  });

  return mockPromise;
};


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