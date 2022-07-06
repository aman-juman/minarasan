import {FC} from "react";
import {SEO} from "../../components/SEO";
import Header from "../../components/header/Header";
import styles from "./Hotel.module.scss";
import {SliderTwo} from "../../components/slider/SliderTwo";


import img1 from "../../../public/marzhanSu/1.jpg"
import img2 from "../../../public/marzhanSu/2.jpg"
import img3 from "../../../public/marzhanSu/3.jpg"
import img4 from "../../../public/marzhanSu/4.jpg"
import img5 from "../../../public/marzhanSu/5.jpg"
import img6 from "../../../public/marzhanSu/6.jpg"
import img7 from "../../../public/marzhanSu/7.jpg"
import img8 from "../../../public/marzhanSu/8.jpg"
import img9 from "../../../public/marzhanSu/9.jpg"
import img10 from "../../../public/marzhanSu/10.jpg"
import img11 from "../../../public/marzhanSu/11.jpg"
import {Call} from "../../components/call/Call";
import {Whatsapp} from "../../components/call/Whatsapp";
import {Footer} from "../../components/footer/Footer";

const img = [
    img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11
];

export type IImg = {
    img: StaticImageData[];
}

const Aray: FC = (): JSX.Element => {
    return <>
        <SEO
            title="Маржан Су"
        />
        <Header/>
        <main className="container">
            <h1>Маржан Су</h1>
            <SliderTwo img={img}/>

            <div>
                <h3>
                    В Сарыагаше открылся новый санаторий «Маржан Су», который предлагает оздоровительные процедуры и
                    полноценный
                    отдых на основе широко известной минеральной воды «Сарыагаш». В стоимость путевки входит
                    четырехразовое питание.
                    Медицинские услуги: Консультации проводят следующие специалисты: гастроэнтеролог, диетолог,
                    кардиологи, уролог,
                    гинеколог, невропатолог, отоларинголог, иглорефлексотерапевт, проктолог. В стоимость путевки входят
                    такие лечебные
                    процедуры, как бальнеотерапия, физиотерапия, и другие. В санатории Маржан Су также проводят
                    косметологические
                    процедуры, такие как маникюр, педикюр, шоколадное обертывание. Санаторий «Маржан Су» предлагает
                    размещение
                    в уютных номерах категории стандарт и полулюкс. В каждом номере имеются санузел с душевой,
                    телевизор,
                    холодильник, свежий евроремонт. Цены на путевки весьма доступные, зависят от типа номеров, который
                    Вы выберете.
                </h3>

                <table className={styles.table}>
                    <thead className={styles.tr}>
                    <tr>
                        <th className={styles.td}>
                            Вид номера
                        </th>
                        <th className={styles.td}>
                            Цена:
                        </th>
                    </tr>
                    </thead>
                    <tbody className={styles.tbody}>
                    <tr>
                        <td className={styles.td}>
                            Одноместный (Стандартный)
                        </td>
                        <td className={styles.td}>
                            10.000 KZT
                        </td>
                    </tr>
                    <tr>
                        <td className={styles.td}>
                            Двухместный на 1-го (Стандартный)
                        </td>
                        <td className={styles.td}>
                            12.000 KZT
                        </td>
                    </tr>
                    <tr>
                        <td className={styles.td}>
                            Одноместный (Стандартный)
                        </td>
                        <td className={styles.td}>
                            10.000 KZT
                        </td>
                    </tr>
                    <tr>
                        <td className={styles.td}>
                            Двухместный на 2-х (Стандартный)
                        </td>
                        <td className={styles.td}>
                            24.000 KZT
                        </td>
                    </tr>
                    <tr>
                        <td className={styles.td}>
                            Четырехместный на 1-го (Стандартный)
                        </td>
                        <td className={styles.td}>
                            10.000 KZT
                        </td>
                    </tr>
                    <tr>
                        <td className={styles.td}>
                            Четырехместный на 4-х (Стандартный)
                        </td>
                        <td className={styles.td}>
                            40.000 KZT
                        </td>
                    </tr>
                    <tr>
                        <td className={styles.td}>
                            Детям до 6 лет (Стандартный)
                        </td>
                        <td className={styles.td}>
                            1.500 KZT
                        </td>
                    </tr>
                    <tr>
                        <td className={styles.td}>
                            Детям с 6-12 лет (Стандартный)
                        </td>
                        <td className={styles.td}>
                            3.500 KZT
                        </td>
                    </tr>
                    <tr>
                        <td className={styles.td}>
                            Трехместный на 1-го (Полулюкс)
                        </td>
                        <td className={styles.td}>
                            11.000 KZT
                        </td>
                    </tr>
                    <tr>
                        <td className={styles.td}>
                            Трехместный на 3-х (Полулюкс)
                        </td>
                        <td className={styles.td}>
                            33.000 KZT
                        </td>
                    </tr>
                    <tr>
                        <td className={styles.td}>
                            Детям до 6 лет (Полулюкс)
                        </td>
                        <td className={styles.td}>
                            1.500 KZT
                        </td>
                    </tr>
                    <tr>
                        <td className={styles.td}>
                            Детям с 6-12 лет (Полулюкс)
                        </td>
                        <td className={styles.td}>
                            3.500 KZT
                        </td>
                    </tr>
                    <tr>
                        <td className={styles.td}>
                            Курсовка
                        </td>
                        <td className={styles.td}>
                            5.000 KZT
                        </td>
                    </tr>


                    </tbody>
                </table>

                <h3 style={{textAlign: "center"}}>Список стандартных процедур входящих в стоимость путевки:</h3>
                <ul className={styles.list}>
                    <li>Бальнеотерапия, гидротерапия</li>
                    <li>Питье минеральной воды</li>
                    <li>Циркулярный душ</li>
                    <li>Восходящий душ</li>
                    <li>Промывание желудка</li>
                    <li>Дуоденальное зондирование с промыванием минеральной водой</li>
                    <li>Слепое зондирование (тюбаж)</li>
                    <li>Десневое орошение</li>
                    <li>Лечебные микроклизмы, Очистительная клизма (отвары трав, «Кызыл-май»)</li>
                    <li>Гинекологическое орошение</li>
                    <li>Минеральные ванны</li>
                </ul>

                <h3 style={{textAlign: "center"}}>Физиотерапия</h3>
                <ul className={styles.list}>
                    <li>Парафино-озекеритовое лечение (Парафин, озокерит)</li>
                    <li>Ингаляция с травами и маслами</li>
                    <li>ЭКГ (электрокардиография)</li>
                    <li>УФО терапия</li>
                    <li>СМТ терапия</li>
                    <li>УВЧ терапия</li>
                    <li>Оксигенотерапия</li>
                    <li>Электрофорез</li>
                    <li>Магнитотерапия</li>
                </ul>

                <h3 style={{textAlign: "center"}}>Консультации врачей</h3>
                <ul className={styles.list}>
                    <li>Гастроэнтеролог Диетолог</li>
                    <li>Кардиолог</li>
                    <li>Уролог</li>
                    <li>Гинеколог</li>
                    <li>Невропатолог</li>
                    <li>Отоларинголог</li>
                    <li>Иглорефлексотерапевт</li>
                    <li>Проктолог</li>
                    <li>Косметология</li>
                    <li>Маникюр</li>
                    <li>Педикюр</li>
                    <li>Шоколадное обертывание</li>
                </ul>

                <h3 style={{textAlign: "center"}}>Список платных услуг:</h3>
                <ul className={styles.list}>
                    <li>УЗИ всех органов 2000 тг</li>
                    <li>ФГДС (фиброгастродуоденоскопия) 2000 тг</li>
                    <li>Лаборатория (ОАК, ОАМ, БАК, гинекологические и урологические мазки) 500 -2000 тг</li>
                </ul>

                <h4>ВАННЫ</h4>
                <ul className={styles.list}>
                  <li>Пантовая 2500</li>
                    <li>Селеновая 2500</li>
                    <li>Пuxтовая, хвойная 2000</li>
                    <li>Йодобромная 1500</li>
                    <li>Скипидарная 2000</li>
                    <li>Нафталановая 2000</li>
                    <li>Цеолитовая 2000</li>
                    <li>С экстрактом можжевельника 1500</li>
                    <li>Кедровая бочка 2000</li>
                    <li>Аппаратное кишечное орошение 3000</li>
                    <li>Иглотерапия 1000</li>
                    <li>Душ Шарко 500</li>

                </ul>


            </div>
        </main>


    </>
};


export default Aray