import Header from "@/components/ui/header/Header"
import { FC } from "react"
import styles from "./Portfolio.module.scss"
import Footer from "@/components/ui/footer/Footer"

const port = [
    {
        title: 'ЖК Академика Павлова',
        desc: 'Современный',
        img: 'img/port1.jpg'
    },
    {
        title: 'ЖК Фреш',
        desc: 'Модерн',
        img: 'img/port2.jpg'
    },
    {
        title: 'Сталинка на ул.Строителей',
        desc: 'Современный',
        img: 'img/port3.jpg'
    },
    {
        title: 'ЖК ВавиловДОМ',
        desc: 'Модерн',
        img: 'img/port4.jpg'
    },
    {
        title: 'Сталинка на ул.Кирова',
        desc: 'Современный',
        img: 'img/port5.jpg'
    },
    {
        title: 'ЖК Фреш',
        desc: 'Совреиенная классика',
        img: 'img/port6.jpg'
    }

]


const Portfolio: FC = () => {
    return <>
    <Header/>
    
    <section className={styles.portfolio}>
    
        
        {port.map(el => (
            <div className={styles.item}>
                <img src={el.img}/>
                <span className={styles.title}>
                    <p>{el.desc}</p>
                    <p>{el.title}</p> </span>
                
            </div>
        ))}
        
    </section>
    <Footer/>
</>
}

export default Portfolio