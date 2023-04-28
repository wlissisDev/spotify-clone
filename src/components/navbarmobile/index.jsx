import React from 'react'
import { BsSearch } from 'react-icons/bs'
import {AiOutlineMenu} from 'react-icons/ai'
import style from './style.module.css'
import Logo from '../logo'

export default function NavMobile() {
  return (
    <div className={style.nav_mobile}>
      <Logo />
      <div className={style.menu}>
        <BsSearch color='#fff' />
        <button className={style.btn}>ABRIR O APP</button>
        <AiOutlineMenu className={style.btn_menu}/>
      </div>
    </div>
  )
}
