import React from 'react'
import style from './style.module.css'

export default function Navbar() {
  return (
    <div  className={style.container}>
        <div  className={style.buttons}>
            <span  className={style.btn}>Prev</span>
            <span  className={style.btn}>Next</span>
        </div>
        <div className={style.items}>
            <a  className={style.btn_inscrever} href="#">Inscrever-se</a>
            <a   className={style.btn_entrar}href="#">Entrar</a>
        </div>
    </div>
  )
}
