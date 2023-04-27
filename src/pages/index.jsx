import style from '../styles/index.module.css'
import Sidebar from "@/components/sidebar";

export default function Home() {
  return (
  <div className={style.container}>
    <Sidebar/>
  </div>      
  )
}
