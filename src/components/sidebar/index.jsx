import React from 'react'
import style from './style.module.css'

import { BsSearch, BsFillCalendar2HeartFill, BsSpotify } from 'react-icons/bs'
import { AiFillHome } from 'react-icons/ai'
import { BiLibrary } from 'react-icons/bi'
import { GoDiffAdded } from 'react-icons/go'
import {TbWorld} from 'react-icons/tb'

export default function Sidebar() {
    return (
        <div className={style.container}>
            <span className={style.logo}><BsSpotify className={style.spotify}/> Spotify</span>

            <div className={style.search}>
                <a href="#" className={style.item}><AiFillHome className={style.icon} /> Início</a>
                <a href="#" className={style.item}><BsSearch className={style.icon}/> Buscar</a>
                <a href="#" className={style.item}><BiLibrary className={style.icon}/> Sua Biblioteca</a>
            </div>

            <div className={style.playlist}>
                <a href="#" className={style.item}><GoDiffAdded className={style.icon}/> Criar playlist</a>
                <a href="#" className={style.item}><BsFillCalendar2HeartFill color='#681df3' className={style.icon}/> Músicas Curtidas</a>
            </div>
            <span className={style.idiomas}><TbWorld className={style.icon_idioma}/> Português do Brasil</span>

        </div>
    )
}
