import React, { useContext } from 'react'
import styles from "./Buttons.module.css"
import { GlobalContext, useGlobalContext } from '../../store/GlobalProvider'

export const Buttons = (props) => {
   
    const {state,dispatch}=useGlobalContext(GlobalContext)

  
    return (
    <div className={styles.buttons} >
      <button  onClick={props.onRemove} style={{backgroundColor:props.color}} >{props.text1}</button>
      <p>{props.text}</p>
      <button onClick={props.onAdd} style={{backgroundColor:props.color}}>{props.text2}</button>
    </div>
  )
}
 
