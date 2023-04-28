import Image from 'next/image'
import{BsFillPlayFill} from 'react-icons/bs'
import style from './style.module.css'
import album from '../../images/album.jpg'
export default function Card() {
    return (
        <div className={style.container}>
            <div className={style.content_img}>
                <button className={style.play}><BsFillPlayFill className={style.play_icon} color='#000'/></button>
                <Image className={style.image} src={album} alt="capa do albun" />
            </div>
            <div className={style.info}>
                <h2 className={style.title}>Title</h2>
                <p className={style.desc}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
                    maxime quasi provident repellendus vel eveniet earum, qui accusantium hic natus,
                    cupiditate dicta tenetur inventore nam est. Dolor sunt autem maiores?
                </p>
            </div>
        </div>
    )
}
