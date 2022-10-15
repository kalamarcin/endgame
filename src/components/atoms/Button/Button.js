import React from 'react'
import ButtonCss from './Button.module.css'

const Button = (props) => {
  return (
    <button type='button' className={ButtonCss.btn} onClick={props.onClick}>{props.name}</button>
  )
}

export default Button