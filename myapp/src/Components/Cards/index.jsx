// import { Buttons } from '../Buttons'
// import styles from "./Cards.module.css"
// import { useReducer } from 'react'
// import { GlobalContext, GlobalProvider, useGlobalContext } from '../../store/GlobalProvider'







// export const Cards = ({product}) => {
//     const {state,dispatch}=useGlobalContext(GlobalContext)

// // const initialState={
// // stock:product.stock,
// // // count:0,
// // isFav:false,
// // isbasket:false
// // }
// const addCount=()=>{

//   dispatch({type:"ADD_COUNT", payload: { id: product.id, name: product.product_name } })
// }

// const removeCount=()=>{

//   dispatch({type:"REMOVE_COUNT",payload: { id: product.id, name: product.product_name }})
// }

//   return (
//     <div key={`${"product_name"+product.id}`} className={styles.card}>
//     <Buttons text1={"add basket"} text2={"add favorite"}  color={"green"} />
//     console.log("cardsid",key);

// <div className={styles.imgDiv}>
// <img
// src={product.image}
// alt={`Product: ${product.name}`}
// />
// </div>
// <h4>{product.product_name}</h4>
// <h5>stock:{product.stock}</h5>
// <Buttons   onAdd={addCount} onRemove={removeCount}  text={state.count} text1={"-"} text2={"+"} color={"red"}/>

// </div> 
//   )
// }


















import React, { useEffect, useState } from 'react';

import styles from './Cards.module.css';
import { useGlobalContext } from '../../store/GlobalProvider';
import { Buttons } from '../Buttons';


export const Cards = ({ product }) => {
  const { state, dispatch } = useGlobalContext();

  const [count, setCount] = useState(0);
  useEffect(() => {
    setCount(0); 
  }, [product.id]);

  const addToBasket = () => {
    console.log("added basket");
dispatch({ type: 'ADD_BASKET', payload: { id: product.id, name: product.product_name } });
console.log("basket",state.basket);

  };


const addCount=()=>{
  setCount((prevcount)=>prevcount+1)
  }
  const removeCount=()=>{
    setCount((prevcount)=>prevcount-1)
    
    }
  
  
  
  // const removeFromBasket = () => {
      
  
  // dispatch({ type: 'REMOVE_COUNT', payload: { id: product.id, name: product.product_name } });
      
  // setLocalCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0));
  //   };
  return (
  <div key={product.id} className={styles.card}>
        <Buttons
         onRemove={addToBasket}
          // onRemove={removeFromBasket}
          text1={'add basket'} text2={'add favorite'} color={'green'} />
        <div className={styles.imgDiv}>
          <img src={product.image} alt={`Product: ${product.name}`} />
        </div>
        <h4>{product.product_name}</h4>
        <h5>stock: {product.stock}</h5>
        <Buttons onAdd={addCount}  onRemove={removeCount} text={count} text1={'-'} text2={'+'} color={'red'} />
      </div>
    );
  




  
  };
