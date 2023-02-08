import React from "react";
import { render, screen, fireEvent, act  } from "@testing-library/react";
import axios from "axios";
import Description from '../components/Overview/Description.jsx';

jest.mock("axios", ()=>({
  get:
  jest.fn(()=> {
    Promise.resolve([{data : {
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
    "2021-08-13T14:38:44.509Z"}},
    {data:{results: [{
          product_id: 40344,
          results:[
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
        },]},
      {
        product_id: 40344,
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
        ]}]}}, {data: {}}]

    )
  })
}));

describe("Description component", () => {
  let component;
  // let currentProduct, currentStyle, currentPhotos, currentName, currentPick, currentInventory, defaultPhoto, ratingData, isHead, isSizeSelected, isCheckoutClicked, userSelection, currentList, checkoutUpdate, isQuantitySelected;

  // beforeEach(() => {
  //   currentProduct = {
  //     campus:"hr-rfp",
  // category: "Jackets",
  // default_price:"140.00",
  // description:"The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
  // id:40344,
  // name:"Camo Onesie",
  // slogan:"Blend in to your crowd",
  // updated_at:
  // "2021-08-13T14:38:44.509Z"
  // };
  //   currentStyle = myObj.results;
  //   currentPhotos = myObj.results[0].photos;
  //   currentName = "Camo Onesie";
  //   currentPick = myObj.results[0];
  //   currentInventory = {};
  //   defaultPhoto = {};
  //   ratingData = {};
  //   isHead = true;
  //   isSizeSelected = false;
  //   isCheckoutClicked = false;
  //   userSelection = {quantity: 1};
  //   currentList = [];
  //   checkoutUpdate = false;
  //   isQuantitySelected = false;

  //   axios.get.mockResolvedValue({
  //     data: {
  //       product: currentProduct,
  //       style: currentStyle,
  //       photos: currentPhotos,
  //       name: currentName,
  //       pick: currentPick,
  //       inventory: currentInventory,
  //       default_photo: defaultPhoto,
  //       rating_data: ratingData
  //     }
  //   });
  // beforeEach(() => {
  //   axios.get = jest.fn().mockResolvedValueOnce(mockResults[0]).mockResolvedValueOnce(mockResults[1]).mockResolvedValueOnce(mockResults[2]);

  //   act(() => {
  //     component = render(<Description product={{id: 40344}} />);
  //   });
  // });

  it("renders without errors", () => {
    expect(screen.getByText("Style:")).toBeInTheDocument();
  });
  it("renders without errors", () => {
    expect(screen.getByText("Size:")).toBeInTheDocument();
  });
  it("renders product category", () => {
    expect(screen.getByTestId("category")).toBeInTheDocument();
    expect(screen.getByTestId("category")).toHaveTextContent('default')
    const wrapper = shallow(<Description product={{id: 40344}} />);

    axios.get()
    .then(()=>{
      wrapper.update();
    })



    // Check if the component has rendered the element you expect
    expect(wrapper.find('.element').length).toBe(1);
    done();
  });
  });

  // it("renders without errors", () => {
  //   const camoOnesieTextMatcher = (text) => {
  //     return (content) => content.includes(text);
  //   };
  //   const component = render(<Description product={{id: 40344}} />);
  //   const camoOnesieElement = screen.getByText(component.container, camoOnesieTextMatcher('Camo Onesie'));
  //   expect(camoOnesieElement).toBeInTheDocument();
  // });

  // it("handles onClick event", () => {
  //   const img = screen.getByAltText("Image");
  //   fireEvent.click(img);

  //   expect(img.getAttribute("id")).toBe("toggle-on");
  // });

  // it("handles onSizeClick event", () => {
  //   const input = screen.getByLabelText("Size");
  //   fireEvent.click(input);

  //   expect(input.getAttribute("id")).toBe("toggle-on-size");
  // });

  // it("handles onQuantityClick event", () => {
  //   const select = screen.getByTestId("quantity");
  //   fireEvent.change(select, { target: { value: 2 } });

  //   expect(select.value).toBe("2");
  // });

