import React from 'react'
import style from './style.module.scss'
import Header from './../Header/index'
import Footer from './../Footer/index'
import Cards from './../Cards/index'

const Content = ({items}) => {
    // console.log(items)
    return(
        <div className={style.content}>
            <Header/>
            <Cards items={items}/>
            <Footer/>
        </div>
    )
}

export default Content;