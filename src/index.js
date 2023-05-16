import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CartProvider from './Context/cart-context';
import WishProvider from './Context/wishlist-context';
import DescriptionProvider from './Context/description-context'
import FilterProvider from './Context/filter-context';
import UserProvider from './Context/userContext';

import { CookiesProvider } from "react-cookie";
import ProductProvider from './Context/ProductContext';

// https://artcorner-backend-api.onrender.com/api/product/
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <CookiesProvider>

    <UserProvider>
      <CartProvider>
        <WishProvider>
          <DescriptionProvider>
            <FilterProvider>
              <ProductProvider>
                <App />
              </ProductProvider>
            </FilterProvider>
          </DescriptionProvider>
        </WishProvider>
      </CartProvider>
    </UserProvider>


  </CookiesProvider>
  // </React.StrictMode>
)
