import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import '@testing-library/jest-dom';
import TestRenderer from 'react-test-renderer'; // ES6
import CategoryFilter from '../CategoryFilter';

describe('Display CategoryFilter.js', () => {
  it('renders correctly', () => {
    const tree = TestRenderer.create(
      <BrowserRouter>
        <CategoryFilter handleFilter={() => true} />
      </BrowserRouter>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
