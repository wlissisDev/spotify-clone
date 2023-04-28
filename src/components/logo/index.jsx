import React from 'react'
import { BsSpotify } from 'react-icons/bs'
import style from './style.module.css'
export default function Logo() {
  return (
    <span className={style.logo}><BsSpotify className={style.spotify}/> Spotify</span>
  )
}
