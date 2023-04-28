import React from 'react'
import style from './style.module.css'
import Logo from '../logo'

import { BsSearch, BsFillCalendar2HeartFill } from 'react-icons/bs'
import { AiFillHome } from 'react-icons/ai'
import { BiLibrary } from 'react-icons/bi'
import { GoDiffAdded } from 'react-icons/go'
import Idioma from '../idioma'

export default function Sidebar() {
    return (
        <div className={style.container}>
            <Logo />
            <div className={style.search}>
                <a href="#" className={style.item}><AiFillHome className={style.icon} /> Início</a>
                <a href="#" className={style.item}><BsSearch className={style.icon} /> Buscar</a>
                <a href="#" className={style.item}><BiLibrary className={style.icon} /> Sua Biblioteca</a>
            </div>

            <div className={style.playlist}>
                <a href="#" className={style.item}><GoDiffAdded className={style.icon} /> Criar playlist</a>
                <a href="#" className={style.item}><BsFillCalendar2HeartFill color='#681df3' className={style.icon} /> Músicas Curtidas</a>
            </div>
            <div className={style.idioma}>
                <Idioma />
            </div>
        </div>
    )
}
