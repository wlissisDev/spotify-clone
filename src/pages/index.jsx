import Navbar from '@/components/navbar';
import style from '../styles/index.module.css'
import Sidebar from "@/components/sidebar";

export default function Home() {
  return (
    <div className={style.container}>
      <Sidebar />
      <div className={style.main}>
        <Navbar />
        <h1>cards</h1>
      </div>
    </div>
  )
}
