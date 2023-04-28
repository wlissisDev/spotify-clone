import React from 'react'
import {TbWorld} from 'react-icons/tb'
import style from './style.module.css'

export default function Idioma() {
  return (
    <span className={style.idiomas}><TbWorld className={style.icon_idioma}/> Português do Brasil</span>
  )
}
