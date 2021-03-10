import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import '@testing-library/jest-dom';
import TestRenderer from 'react-test-renderer'; // ES6
import Item from '../Item';

describe('Display Item.js', () => {
  it('renders correctly', () => {
    const tree = TestRenderer.create(<BrowserRouter><Item /></BrowserRouter>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
