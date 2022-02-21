import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';


afterEach(cleanup);

describe('About component', () => {
    // First Test
    it('renders', () => {
      render(<About />);
      
    });
    it('matches snapshot DOM node structure', () => {
        // render About
        const { asFragment } = render(<About />);

        expect(asFragment()).toMatchSnapshot();
      });
  
    // Second Test
    
  })

  describe('emoji is visible', () => {
    it('inserts emoji into the h2', () => {
    const { getByLabelText } = render(<Nav />);
  
    expect(getByLabelText('camera')).toHaveTextContent('📸');
    });
  })  

  describe('links are visible', () => {
    it('inserts text into the links', () => {
      const { getByTestId } = render(<Nav />);
      expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
      expect(getByTestId('about')).toHaveTextContent('About me');
    });
  })