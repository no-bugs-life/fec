import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import axios from 'axios';
import RelatedList from '../RelatedList.jsx';

jest.mock('axios');


describe('RelatedList component', () => {
  let product;

  beforeEach(() => {
    const localStorageMock = {
      getItem: jest.fn().mockImplementation((key) => {
        if (key === 'user') {
          return '{"outfits":[8,4]}';
        }
        return null;
      })
    };
    Object.defineProperty(window, 'localStorage', {
      value: localStorageMock,
    });


    // const getItem = jest.fn((key) => key in localStorage ? localStorage[key] : null)
    // const setItem = jest.fn((key, value) => (localStorage[key] = value))

    product = { id: 1};
    axios.get.mockImplementation(
      (url) => {
        console.log(url);

        const regex1 = /^api\/products\/.*\/related$/g;
        const regex2 = /^api\/products\/.$/g;
        const regex3 = /^api\/products\/.*\/styles$/g;
        const regex4 = /^api\/reviews\/meta$/g;
        // console.log(regex1.test(url))
        switch (true) {
          case regex1.test(url):{
            //console.log('hit')
            return Promise.resolve(
              { data: [2,3,4,5,6,7,8] }
            )
            break;
          }
          case regex2.test(url):{
            return Promise.resolve(
              { data: {
                id: 1,
                name: 'name',
                description: 'description',
                category:'category',
                default_price:'0',
                features: [{feature:'feature',value:'value'}]
              } }
            )
            break;
          }
          case regex3.test(url):{
            return Promise.resolve(
              { data: {
                product_id: '1',
                results: [
                  {
                    'style_id': 1,
                    'photos': [
                      {
                        thumbnail_url:'thumbnail_url',
                        url: 'url'
                      }
                    ]
                  }
                ]
              } }
            )
            break;
          }
          case regex4.test(url):{
            return Promise.resolve(
              { data: {
                product_id: 1,
                ratings:{
                  1: 1,
                  2: 1,
                  3: 1,
                  4: 1,
                  5: 1
                }
              } }
            )
            break;
          }
        }

      }
    );
  });

  it('should render related products', async () => {
    const {findByTestId,findByText,getByText} = render(<RelatedList product={product} />);
    const title = await findByText('Related Products');
    expect(title).toBeInTheDocument();

    const view = await findByTestId('2');
    expect(view).toBeInTheDocument();


    const rightArrow = await findByTestId('arrow-right');
    fireEvent.click(rightArrow);
    const nextView = await findByTestId('7')
    expect(nextView).toBeInTheDocument();
  });
});


