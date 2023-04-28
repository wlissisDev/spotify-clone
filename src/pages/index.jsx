import Navbar from '@/components/navbar';
import style from '../styles/index.module.css'
import Sidebar from "@/components/sidebar";
import Card from '@/components/card';
import NavMobile from '@/components/navbarmobile';

export default function Home() {
  return (
    <div className={style.container}>
      <Sidebar />
      <div className={style.main}>
        <Navbar />
        <NavMobile/>
        <div className={style.main_foco}>
          <div className={style.content_title}>
            <h1 className={style.title}>Foco</h1>
            <span className={style.show}>Mostrar tudo</span>
          </div>

          <div className={style.foco}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
        <div className={style.main_playlists}>
          <div className={style.content_title}>
            <h1 className={style.title}>Playlists do Spotify</h1>
            <span className={style.show}>Mostrar tudo</span>
          </div>
          <div className={style.playlists}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
        <div className={style.linha}></div>
      </div>
    </div>
  )
}
