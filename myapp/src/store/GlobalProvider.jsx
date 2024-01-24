
import React, { createContext, useContext, useReducer } from 'react';
import { Products } from '../Products';

export const GlobalContext = createContext();

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};

const productIds = Products.products.map((item) => item.id);

const initialState = {
  basket: [],
  favorites: [],
  productIds,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_BASKET":
      // Eğer ürünü sepete eklemek istiyorsanız, action.payload ile bir ürün eklemeniz gerekir.
      return { ...state, basket: [...state.basket, action.payload] };

    
    default:
      return state;
  }
};

export const GlobalProvider = ({ children }) => {
  const Component = GlobalContext.Provider;

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <Component value={{ state, dispatch }}>
        {children}
      </Component>
    </div>
  );
};




