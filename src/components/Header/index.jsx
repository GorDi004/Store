import react, { useState } from 'react'
import style from './style.module.scss'
import Logo from './../../elements/Logo/index'
import { FaShoppingCart } from 'react-icons/fa'

const Header = () => {
    const [cartOpen, setCartOpen]=useState(false);
  return (
    <>
      <div className={style.main}>
        <Logo />
        <div className={style.box}>
          <FaShoppingCart onClick={()=>setCartOpen(!cartOpen)} className={cartOpen ? ` ${style.active}` : style.shoppingCart} />
          <ol className={style.tabs}>
            <li>Про нас</li>
            <li>Контакти</li>
            <li className={style.special}>Кабінет</li>
          </ol>
        </div>
      </div>
      <div className={style.image}>
        <p className={style.title}>Найкращі товари для вашого дому</p>
        <p className={style.text}>за низькими цінами</p>
      </div>
    </>
  )
}

export default Header
