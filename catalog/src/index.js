import React from 'react';
import ReactDOM from 'react-dom';
import ProductList from './ProductList';

window.mountCatalogMfe = (el) => {
  ReactDOM.render(
    <ProductList />,
    el
  )
}