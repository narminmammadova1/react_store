import React from 'react';

import { GlobalProvider, useGlobalContext } from '../../store/GlobalProvider';



export const Basket = () => {
  const { state } = useGlobalContext(GlobalProvider);

return (
    
<div>
<h2>Basket</h2>
      {state.basket.length === 0 ? (
        <p>Your basket is empty.</p>
      ) : (
        <ul>
          {state.basket.map((item) => (
            <li key={item.id}>
              {/* Örneğin, her bir ürünün adını ve sayısını görüntüleme */}
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </div>
)}
