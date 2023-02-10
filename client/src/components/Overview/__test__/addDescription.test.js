import {render, screen, waitFor} from '@testing-library/react';
import '@testing-library/jest-dom';
import AddDescription from '../AddDescription.jsx';

let features = [{feature: 'Fabric', value: 'Canvas'}, {feature: 'Buttons', value: 'Brass'}]
it('renders slogan when prop is passed',async ()=> {
  render(<AddDescription description={'The So Fatigues will wake you up'} slogan={"Blend in to your crowd"} features={features}/>);
  const sloganElement = await screen.findByText(/Blend in to your crowd/i);
   expect(sloganElement).toBeInTheDocument();
})
it('renders description when prop is passed',async ()=> {
  render(<AddDescription description={'The So Fatigues will wake you up'} slogan={"Blend in to your crowd"} features={features}/>);
  const detailElement = await screen.findByText(/The So Fatigues will wake you up/i);
   expect(detailElement).toBeInTheDocument();
})
it('renders feature when prop is passed',async ()=> {
  render(<AddDescription description={'The So Fatigues will wake you up'} slogan={"Blend in to your crowd"} features={features}/>);
  const featuresElement = await screen.findAllByRole("feature");
   expect(featuresElement.length).toBe(2);
})
it('renders value when prop is passed',async ()=> {
  render(<AddDescription description={'The So Fatigues will wake you up'} slogan={"Blend in to your crowd"} features={features}/>);
  const featuresElement = await screen.findAllByRole("feature");
   expect(featuresElement.length).toBe(2);
})
// it('does not render feature when no prop is passed',async ()=> {
//   render(<AddDescription description={'The So Fatigues will wake you up'} slogan={"Blend in to your crowd"}/>);
//   const featuresElement = await screen.findAllByRole("feature");
//    expect(featuresElement.length).toBe(0);
// })




