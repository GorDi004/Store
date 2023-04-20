import React from 'react'
import style from './style.module.scss'

const Card = ({ item }) => {
    return (
    <div key={item.id} className={style.card}>
        <img src={item.urlImg} />
        <p className={style.title}>{item.title}</p>
        <p className={style.desc}>{item.desc}</p>
        <div className={style.block}>
            <p className={style.price}>₴{item.price}</p>
            <p className={style.button}>+</p>
        </div>
    </div>
    )
}

export default Card
