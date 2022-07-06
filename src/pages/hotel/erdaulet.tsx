import {FC} from "react";
import {SEO} from "../../components/SEO";
import Header from "../../components/header/Header";
import styles from "./Hotel.module.scss";
import {SliderTwo} from "../../components/slider/SliderTwo";


import img1 from "../../../public/erdaulet/1.jpg"
import img2 from "../../../public/erdaulet/2.jpg"
import img3 from "../../../public/erdaulet/3.jpg"
import img4 from "../../../public/erdaulet/4.jpg"
import img5 from "../../../public/erdaulet/5.jpg"
import img6 from "../../../public/erdaulet/6.jpg"
import img7 from "../../../public/erdaulet/7.jpg"
import img8 from "../../../public/erdaulet/8.jpg"
import img9 from "../../../public/erdaulet/9.jpg"
import img10 from "../../../public/erdaulet/10.jpg"
import img11 from "../../../public/erdaulet/11.jpg"
import img12 from "../../../public/erdaulet/12.jpg"
import {Call} from "../../components/call/Call";
import {Whatsapp} from "../../components/call/Whatsapp";
import {Footer} from "../../components/footer/Footer";

const img = [
    img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12
];

export type IImg = {
    img: StaticImageData[];
}

const Erdaulet: FC = (): JSX.Element => {
    return <>
        <SEO
            title="Ердәулет"
        />
        <Header/>
        <main className="container">
            <h1>Ердәулет</h1>
            <SliderTwo img={img}/>

            <div>
                <h3>
                    «Санаторий «Ердаулет» — это совершенно новый санаторий. В новой лечебнице есть стандартные номера с
                    базовым набором условий, интернет и лифт.
                </h3>

                <h3>Во всех номерах имеются:</h3>
                <p>собственный санузел</p>
                <p>телевизор</p>
                <p>халат</p>


                <h3>Медицинские услуги, входящие в стоимость путевки:</h3>
                <ul className={styles.list}>
                    <li>
                        Минеральная ванная
                    </li>
                    <li>
                        Минеральная ванная джакузи
                    </li>
                    <li>
                        Циркулярный душ
                    </li>
                    <li>
                        Гигиенический душ минеральной водой
                    </li>
                    <li>
                        Физиолечение
                    </li>
                    <li>
                        Ингаляция с ромашкой
                    </li>
                    <li>
                        Электрофорез
                    </li>
                    <li>
                        УФО носа и зева
                    </li>
                    <li>
                        Дарсонваль
                    </li>
                    <li>
                        Магнитотерапия
                    </li>
                    <li>
                        ПОТОК-1
                    </li>
                    <li>
                        ТЕПЛОН
                    </li>
                    <li>
                        Амплипульс
                    </li>
                    <li>
                        Промывание желудка
                    </li>
                    <li>
                        Дуоденальное зондирование
                    </li>
                    <li>Слепое зондирование (тюбаж)</li>
                    <li>
                        Кишечное орошение
                    </li>
                    <li>
                        Лечебные микроклизмы, заливки (свечи кызыл май)
                    </li>
                    <li>
                        Гинекологическое орошение
                    </li>
                    <li>
                        Парафино-озокеритовое лечение
                    </li>
                    <li>
                        Орошение десен
                    </li>
                    <li>
                        Консультация терапевта
                    </li>
                    <li>
                        Консультация гастроэнтеролога
                    </li>
                    <li>
                        Фито-бар
                    </li>
                    <li>
                        Питье минеральной воды
                    </li>
                </ul>

                <h3>Дополнительные виды платных медицинских услуг, не входящих в стоимость путевки:</h3>
                <ul className={styles.list}>
                    <li>
                        Массаж
                    </li>
                    <li>
                        Массажер стоп «Марутака»
                    </li>
                    <li>
                        Иглорефлексотерапия
                    </li>
                    <li>
                        Медикаментозное лечение
                    </li>
                    <li>
                        ВЛОК
                    </li>
                    <li>
                        Анализ крови на сахар
                    </li>
                    <li>
                        Солевая комната
                    </li>
                    <li>
                        МАВИТ
                    </li>
                    <li>
                        АЛМАГ-02
                    </li>
                    <li>
                        Скипидарная ванна
                    </li>
                    <li>
                        Пантовая заливка
                    </li>
                </ul>
            </div>
        </main>


    </>
};


export default Erdaulet