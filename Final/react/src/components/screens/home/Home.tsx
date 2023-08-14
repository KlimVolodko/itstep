import Header from "@/components/ui/header/Header";
import { FC, useState } from "react";
import styles from "./Home.module.scss";
import InputMask from "react-input-mask";
import Footer from "@/components/ui/footer/Footer";
import Price2 from "@/components/ui/price2/Price2";

// @ts-ignore
const PhoneNumber = props => (
    <InputMask
    mask="+375 (99) 999-99-99"
    value={props.value}
    maskPlaceholder={null}
    onChange={props.onChange}
  >
    {
        // @ts-ignore
        (inputProps) => <input type="text"/>
    }
  </InputMask>
)

const Home = () => {

    const [viewForm, setViewForm] = useState(false)
    const [tel, setTel] = useState("+375 (__) ___-__-__");
    const [name, setName] = useState("");
    const [telError, setTelError] = useState(false)
    const [nameError, setNameError] = useState(false)

    const onChangeTel = (event) => {
        setTel(event.target.value);
    }

    const onChangeName = (event) => {
        setName(event.target.value);
    }

    const closeForm = () =>{
        setName("")
        setTel("+375 (__) ___-__-__")
        setNameError(false)
        setTelError(false)
        setViewForm(false)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(name == "") {
            setNameError(true)
            return
        }
        setNameError(false)
        if(tel.includes('_')){
            setTelError(true)
            return
        }
        setTelError(false)
        
        console.log('name: ' + name + ' tel: ' + tel)
        closeForm()
    };

    return <>
        <Header/>
        <section className={styles.preview}>
            <h1>СОЗДАЕМ ИНТЕРЬЕРЫ ДЛЯ ЖИЗНИ</h1>
            <p>которые реально воплотить, уложившись в бюджет</p>
            <div className={styles.top}></div>
            <span className={styles.subt}>Получите планировочное решение и бесплатную консультацию с ведущим дизайнером</span>
            <button onClick={() => setViewForm(true)}>Получить консультацию</button>
            
            
            <a className={styles.tel} href="tel:+375334444444">
                <span className={'material-icons ' + styles.tel_icon}>call</span>
                +375 (33) 444-44-44
            </a>
            <div className={styles.plus}>
                <div>
                    <span className={'material-icons ' + styles.icon}>calendar_month</span>
                    <span className={styles.desc}>Уложимся в реальные сроки</span>
                </div>
                <div>
                    <span className={'material-icons ' + styles.icon}>sell</span>
                    <span className={styles.desc}>Скидка 15-30% на отделку</span>
                </div>
                <div>
                    <span className={'material-icons ' + styles.icon}>store</span>
                    <span className={styles.desc}>Гарантия на ремонт до 3-х лет</span>
                </div>
                <div>
                    <span className={'material-icons ' + styles.icon}>next_week</span>
                    <span className={styles.desc}>Выгодная закупка мебели и декора</span>
                </div>
            </div>
            
        </section>
        {viewForm &&
            <section className={styles.form_tel}>
                <form onSubmit={handleSubmit} autocomplete="off" className={styles.form}>
                    <h3>Заявка на обратный звонок</h3>
                    <div className={styles.inp_name}>
                        <span>Введите фамилию и имя</span>
                        <input onChange={onChangeName} value={name} type="text"/>
                        {nameError &&
                            <span className={styles.error}>Это поле не может быть пустым.</span>
                        }
                    </div>
                    <div className={styles.inp_tel}>
                        <span>Введите номер телефона</span>
                        <PhoneNumber onChange={onChangeTel} value={tel} />
                        {telError &&
                            <span className={styles.error}>Неверный формат телефона.</span>
                        }
                    </div>
                    <div className={styles.butns}>
                        <button className={styles.send}>Отправить</button>
                        <button  onClick={closeForm}>Отмена</button>
                    </div>
                    
                </form>
            </section>
        }
        <section className={styles.facts}>     
        <div className={styles.facts_row}>
                    <div className={styles.facts_block}>
                        <span className={styles.facts_block_number}>10</span>
                        <span className={styles.facts_block_unit}> лет</span>   
                        <div className={styles.facts_block_text}>
                        успешно трудимся на рынке разработки дизайна интерьеров
                        </div>
                    </div>
                    <div className={styles.facts_block}>
                        <span className={styles.facts_block_number}>100</span>
                        <span className={styles.facts_block_unit}> %</span>   
                        <div className={styles.facts_block_text}>
                        гарантия воплощения ваших проектов
                        </div>
                    </div>
                    <div className={styles.facts_block}>
                        <span className={styles.facts_block_number}>1</span>
                        <span className={styles.facts_block_unit}> месяц</span>   
                        <div className={styles.facts_block_text}>
                        средний срок разработки проекта дизайна интерьера
                        </div>
                    </div>                          
        </div>
        </section>

        <section className={styles.technology_all}>
        <div className={styles.technology_row}>
            <div className={styles.technology__title}>
                <div className={styles.technology__title__header}>
                    <h2>Основные направления</h2>
                </div> 
                <div className={styles.line}></div>               
            </div>
            <div className={styles.technology__work_stages}>
                <div className={styles.technology__work_stages__1}>
                    <div className={styles.technology__work_stages__1_pic}>
                    <img className={styles.pic1} src="img/pic1.jpg"/>
                    </div>
                    <div className={styles.technology__work_stages__1_text}>
                        <h2>Дизайн жилых интерьеров </h2>
                        <div className={styles.line}></div>
                        <p>
                        Проектирование квартир, площадью от 80 — 300 м², домов, площадью от 250 до 1500 м² в современном стиле, из экологически чистых материалов.
                        </p>
                    </div>
                </div>
                <div className={styles.technology__work_stages__1}>
                    <div className={styles.technology__work_stages__1_pic}>
                    <img className={styles.pic1} src="img/pic2.jpg"/>
                    </div>
                    <div className={styles.technology__work_stages__1_text}>
                        <h2>Дизайн интерьеров для бизнеса</h2>
                        <div className={styles.line}></div>
                        <p>
                        Проектирование коммерческих интерьеров, Дизайн интерьера ресторанов, баров, кафе, отелей под целевую аудиторию
                        </p>
                    </div>
                </div>
                <div className={styles.technology__work_stages__1}>
                    <div className={styles.technology__work_stages__1_pic}>
                    <img className={styles.pic1} src="img/pic3.jpg"/>
                    </div>
                    <div className={styles.technology__work_stages__1_text}>
                        <h2>Дизайн интерьера для девелоперов</h2>
                        <div className={styles.line}></div>
                        <p>
                        Проектирование апартаментов, жилых интерьеров, общедомовых холлов, террас. Создание 3D визуализаций и рабочих чертежей.
                        </p>
                    </div>
                </div>
                <div className={styles.technology__work_stages__1}>
                    <div className={styles.technology__work_stages__1_pic}>
                    <img className={styles.pic1} src="img/pic4.jpg"/>
                    </div>
                    <div className={styles.technology__work_stages__1_text}>
                        <h2>Архитектурное проектирование</h2>
                        <hr />
                        <p>
                        Архитектурное проектирование загородных домов от 250 до 1500 м² для частных клиентов в современном стиле.
                        </p>
                    </div>
                </div>
                
            </div>
            </div>
        
        </section>

        <section className={styles.info}>
            <h2>Примеры дизайна интерьера в Витебске</h2>
            <div className={styles.info_pic}>
                <img className={styles.pic1} src="img/port1.jpg"/>
                <img className={styles.pic2} src="img/port2.jpg"/>
                <img className={styles.pic3} src="img/port3.jpg"/> 
                <img className={styles.pic4} src="img/port4.jpg"/>                
            </div>
            <div className={styles.info_portfolio}>
                <a className={styles.info_portfolio_btn} href="portfolio">Посмотреть портфолио </a>
            </div>
        </section>
               
        <Price2/>
        <Footer/>
    </>
}

export default Home
