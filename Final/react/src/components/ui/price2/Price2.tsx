import Header from "@/components/ui/header/Header";
import styles from "./Price2.module.scss";
import { FC, useState } from "react";
import InputMask from "react-input-mask";



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

const Price2 = () => {

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
    
    <section className={styles.price}>
    
                <div className={styles.program__row}>
                    <h2 className={styles.program__row_h2}>Стоимость реализации проекта</h2>
                    <div className={styles.program__row_block}>
                        <div className={styles.program__row_block_consultation}>
                            <h2 className={styles.program__row_block_consultation_h2}>дизайн-проект </h2>
                            <ul className={styles.program__row_block_consultation_objective}>
                                <hr />
                                <li>Выезд на обмер </li><hr />
                                <li>Планировочное решение с расстановкой мебели - 3 варианта </li><hr />
                                <li>Стилевое решение + цветовая концепция (коллаж) </li><hr />
                                <li>3D-визуализация основных помещений </li> <hr />
                                <li>Рабочая документация для строителей - чертежи планов, развёртки стен. Конструкторские решения.</li> <hr />
                                <li>Ведомость отделочных материалов - наименование, количество, артикул </li> <hr />
                                <li className={styles.li_minus}>Спецификация мебели, оборудования и декора </li><hr />
                                <li className={styles.li_minus}>Комплектация мебелью и материалами </li> <hr />
                                <li className={styles.li_minus}>Выезды на подборы материалов</li> <hr />
                                <li className={styles.li_minus}>Декорирование интерьера</li> <hr />
                            </ul>
                                                      
                            <p className={styles.program__row_block_consultation_price}>150 ₽/м<sup>2</sup></p>
                            
                            <button onClick={() => setViewForm(true)}>Заказать</button>
                            
                        </div>

                        <div className={styles.program__row_block_consultation}>
                            <h2 className={styles.program__row_block_consultation_h2}>дизайн-проект + комплектация </h2>
                            <ul className={styles.program__row_block_consultation_objective}>
                                <hr />
                                <li>Выезд на обмер </li><hr />
                                <li>Планировочное решение с расстановкой мебели - 3 варианта </li><hr />
                                <li>Стилевое решение + цветовая концепция (коллаж) </li><hr />
                                <li>3D-визуализация основных помещений </li> <hr />
                                <li >Рабочая документация для строителей - чертежи планов, развёртки стен. Конструкторские решения.</li> <hr />
                                <li>Ведомость отделочных материалов - наименование, количество, артикул </li> <hr />
                                <li >Спецификация мебели, оборудования и декора </li><hr />
                                <li >Комплектация мебелью и материалами </li> <hr />
                                <li >Выезды на подборы материалов</li> <hr />
                                <li >Декорирование интерьера</li> <hr />
                            </ul>
                                                      
                            <p className={styles.program__row_block_consultation_price}>300 ₽/м<sup>2</sup></p>
                            
                            <button onClick={() => setViewForm(true)}>Заказать</button>
                            
                        </div>
                        
                        
                        <div className={styles.program__row_block_consultation}>
                            <h2 className={styles.program__row_block_consultation_h2}>комплектация под ключ </h2>
                            <ul className={styles.program__row_block_consultation_objective}>
                                <hr />
                                <li>Выезд на обмер </li><hr />
                                <li>Планировочное решение с расстановкой мебели - 3 варианта </li><hr />
                                <li>Стилевое решение + цветовая концепция (коллаж) </li><hr />
                                <li>3D-визуализация основных помещений </li> <hr />
                                <li className={styles.li_minus}>Рабочая документация для строителей - чертежи планов, развёртки стен. Конструкторские решения.</li> <hr />
                                <li>Ведомость отделочных материалов - наименование, количество, артикул </li> <hr />
                                <li >Спецификация мебели, оборудования и декора </li><hr />
                                <li >Комплектация мебелью и материалами </li> <hr />
                                <li >Выезды на подборы материалов</li> <hr />
                                <li >Декорирование интерьера</li> <hr />
                            </ul>
                                                      
                            <p className={styles.program__row_block_consultation_price}>200 ₽/м<sup>2</sup></p>
                            
                            <button onClick={() => setViewForm(true)}>Заказать</button>
                            
                        </div>
                        
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
    
</>
}

export default Price2