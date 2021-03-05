import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import '@testing-library/jest-dom';
import TestRenderer from 'react-test-renderer'; // ES6
import Recipe from '../Recipe';

describe('Display Recipe.js', () => {
  it('renders correctly', () => {
    const tree = TestRenderer.create(<BrowserRouter><Recipe /></BrowserRouter>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
