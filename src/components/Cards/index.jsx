import React from 'react'
import style from './style.module.scss'
import Card from './../../elements/Card/index'

const Cards = ({ items }) => {
  return (
    <div className={style.cards}>
      {items.map(item => (
        <Card item={item}/>
      ))}
    </div>
  )
}

export default Cards
