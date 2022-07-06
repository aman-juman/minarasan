import {FC} from "react";
import {SEO} from "../../components/SEO";
import Header from "../../components/header/Header";
import styles from "./Hotel.module.scss";
import {SliderTwo} from "../../components/slider/SliderTwo";


import img1 from "../../../public/altynay/1.jpg"
import img2 from "../../../public/altynay/2.jpg"
import img3 from "../../../public/altynay/3.jpg"
import img4 from "../../../public/altynay/4.jpg"
import img5 from "../../../public/altynay/5.jpg"
import img6 from "../../../public/altynay/6.jpg"
import img7 from "../../../public/altynay/7.jpg"
import img8 from "../../../public/altynay/8.jpg"
import img9 from "../../../public/altynay/9.jpg"
import img10 from "../../../public/altynay/10.jpg"
import {Call} from "../../components/call/Call";
import {Whatsapp} from "../../components/call/Whatsapp";
import {Footer} from "../../components/footer/Footer";

const img = [
    img1, img2, img3, img4, img5, img6, img7, img8, img9, img10
];

export type IImg = {
    img: StaticImageData[];
}

const Altynai: FC = (): JSX.Element => {
    return <>
        <SEO
            title="Алтынай Люкс"
        />
        <Header/>
        <main className="container">
            <h1>Алтынай Люкс</h1>
            <SliderTwo img={img}/>

            <div>
                <h3>
                    Расположен в 127км от г. Шымкент в Сарыагашском районе, на озелененной территории санатория
                    «Сарыагаш».
                    Комплекс состоит из 3 этажного здания Лечебно-процедурные кабинеты находятся в самом корпусе
                    санатория «Алтынай».
                    Минеральная вода позволяет справиться с такими заболеваниями как: нарушение процессов
                    желудочно-кишечного тракта,
                    хронические гастриты в стадии ремиссии, хронические колиты, энтероколиты различной этиологии,
                    хронические заболевания
                    печени и желче-выводящих путей, гинекологические болезни, нарушение работы мочеполовой системы,
                    болезни мочевыделительной
                    системы, мочекаменная болезнь, хронический пиелонефрит, простатиты и уретриты, нарушение обмена
                    веществ, остеохондроз,
                    неврозы, синдром хронической усталости, бессонница, заболевания кожи и других заболеваний. На
                    нулевом этаже размещены процедурные
                    кабинеты, на первом этаже: столовая и жилые номера, а также на 2,3-х этажах жилые номера. В СГК
                    «Алтынай» имеются следующие номера:
                    эконом класс, полу-люкс, люкс, VIP номера. Санаторий «Алтынай» предлагает 160 номеров категорий
                    «люкс», «полу-люкс» и простые номера.
                    Этот элитный санаторий расположен на территории известного действующего уникального курорта
                    «Сарыагаш», у источника воды «Сарыагаш»;
                    гарантирует лечение в обстановке полного покоя и равновесия.
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
                            Полу люкс Одноместный
                        </td>
                        <td className={styles.td}>
                            18.000 KZT
                        </td>
                    </tr>
                    <tr>
                        <td className={styles.td}>
                            Полу люкс Двухместный
                        </td>
                        <td className={styles.td}>
                            27.000 KZT
                        </td>
                    </tr>
                    <tr>
                        <td className={styles.td}>
                            Полу люкс Двухместный (семей. пары)
                        </td>
                        <td className={styles.td}>
                            24.000 KZT
                        </td>
                    </tr>
                    <tr>
                        <td className={styles.td}>
                            Полу люкс Трехместный (семейный)
                        </td>
                        <td className={styles.td}>
                            35.000 KZT
                        </td>
                    </tr>
                    <tr>
                        <td className={styles.td}>
                            Люкс	100,101,103,104
                        </td>
                        <td className={styles.td}>
                            55.000 KZT
                        </td>
                    </tr>
                    <tr>
                        <td className={styles.td}>
                            VIP	102, 203,204
                        </td>
                        <td className={styles.td}>
                            65.000 KZT
                        </td>
                    </tr>

                    </tbody>
                </table>

                <h3 style={{textAlign: "center"}}>Список стандартных процедур входящих в стоимость путевки:</h3>
                <ul className={styles.list}>
                    <li>Питье минеральной воды</li>
                    <li>Орошение кишечника</li>
                    <li>Гинекологическое орошение</li>
                    <li>Промывание желудка</li>
                    <li>Парафин</li>
                    <li>Дуоденальное зондирование с промыванием минеральной водой</li>
                    <li>Ингаляция</li>
                    <li>Минеральные ванны</li>
                    <li>Слепое зондирование (дюбаж) минеральной водой;</li>
                    <li>Физиолечение (УВЧ, ингаляция травами и маслами, электрофорез,дарценвал,УФО,).</li>
                    <li>Фито чай,и.т.д.
                        Урология
                    </li>

                </ul>


                <h3 style={{textAlign: "center"}}>Список платных услуг:</h3>
                <ul className={styles.list}>
                    <li>Иглотерапия</li>
                    <li>Косметология</li>
                    <li>Зубопротезирование</li>
                    <li>Урология</li>
                    <li>Анализы</li>

                </ul>

            </div>
        </main>



    </>
};


export default Altynai