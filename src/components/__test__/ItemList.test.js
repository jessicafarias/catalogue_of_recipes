import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import '@testing-library/jest-dom';
import TestRenderer from 'react-test-renderer';
import ListItem from '../listItem';

describe('Display ItemList.js', () => {
  it('renders correctly', () => {
    const tree = TestRenderer.create(
    <BrowserRouter>
      <ListItem id={1} order={0}/>
    </BrowserRouter>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});