import React from 'react'

import styles from "./Main.module.css"
import { Buttons } from '../Buttons'
import { Products } from '../../Products';
import { Cards } from '../Cards';



export const Main = () => {
  
  
    return (
      <div className={styles.container}>
      

        {Products.products.map((product) => (
        <Cards key={product.id} product={product} />
      ))}


      </div>
    );
  };