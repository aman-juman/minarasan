import {FC} from "react";
import {SEO} from "../../components/SEO";
import Header from "../../components/header/Header";
import styles from "./Hotel.module.scss";
import {SliderTwo} from "../../components/slider/SliderTwo";


import img1 from "../../../public/ayaZhan/1.jpg"
import img2 from "../../../public/ayaZhan/2.jpg"
import img3 from "../../../public/ayaZhan/3.jpg"
import img4 from "../../../public/ayaZhan/4.jpg"
import img5 from "../../../public/ayaZhan/5.jpg"
import img6 from "../../../public/ayaZhan/6.jpg"
import img7 from "../../../public/ayaZhan/7.jpg"
import img8 from "../../../public/ayaZhan/8.jpg"
import img9 from "../../../public/ayaZhan/9.jpg"
import img10 from "../../../public/ayaZhan/10.jpg"
import img11 from "../../../public/ayaZhan/11.jpg"
import img12 from "../../../public/ayaZhan/12.jpg"
import {Call} from "../../components/call/Call";
import {Whatsapp} from "../../components/call/Whatsapp";
import {Footer} from "../../components/footer/Footer";

const img = [
    img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12
];

export type IImg = {
    img: StaticImageData[];
}

const Ayazhan: FC = (): JSX.Element => {
    return <>
        <SEO
            title="Ая-Жан & MM"
        />
        <Header/>
        <main className="container">
            <h1>Ая-Жан & MM</h1>
            <SliderTwo img={img}/>

            <div>
                <h3>
                    Номера санатория «Аяжан & ММ»:
                </h3>

                <h3>Стандарт</h3>
                <p>1 персона, за сутки 12 000 тг.</p>
                <p>2 персоны, за сутки 24 000 тг.</p>
                <p>3 персоны, за сутки 30 000 тг.</p>


                <h3>Семейный 2-х спальный</h3>
                <p>2 персоны, за сутки 24 000 тг.</p>


                <h3>Полулюкс 2-х комнатный</h3>
                <p>2 персоны, за сутки 40 000 тг.</p>

                <h3>VIP номер</h3>
                <p>45 000 тг.</p>


                <h3>Детям</h3>
                <p>до 6 лет 4 000 тенге/сутки 7-12 лети 7 000 тенге/сутки</p>

                <h3>Список стандартных процедур входящих в стоимость путевки:</h3>
                <p>Питье минеральной воды</p>
                <p>Орошение кишечника минеральной водой</p>
                <p>Гинекологиеческое орошение минеральной водой</p>
                <p>Промывание желудка минеральной водой</p>
                <p>Дуоденальное зондирование (желчь) минеральной водой</p>
                <p>Минеральная ванна</p>
                <p>Парафино-озокеритолечение</p>
                <p>Очистительные клизмы минеральной водой</p>
                <p>Микроклизмы</p>
                <p>Слепое зондирование (тюбаж) минеральной водой</p>
                <p>Физиолечение:</p>
                <p>Амплипульс 5 Бр</p>
                <p>УВЧ терапии УВЧ 60</p>
                <p>«Электросон» ЭС-10-5</p>
                <p>Искра-1</p>
                <p>ПОТОК-1</p>
                <p>УЗТ — 1.3.01 Ф</p>
                <p>АЛМАГ (магнито терапия)</p>
                <p>Ингалятор «Ромашка»</p>
                <p>Ингалятор «OMRON U22»</p>
                <p>УЛЧТ — 02 (Теплон) 4-х местное</p>
                <p>ОУФК-01 «Солнышко»</p>
                <p>Интратон-5Э</p>
                <p>Фито чай</p>
                <p>Душ восходящий</p>
                <p>Душ Циркулярный</p>
                <p>Массажер ступней ног</p>
                <p>Орошение десен</p>

                <h3>Платные процедуры:</h3>

                <ul className={styles.list}>
                    <li>
                        УЗИ — 3000 тенге
                    </li>
                    <li>
                        ЭФГДС — 3000 тенге
                    </li>
                    <li>
                        АМОК-2 — 4000 тенге
                    </li>
                    <li>
                        Многофункциональная кровать — массажер 5000 тенге
                    </li>
                    <li>
                        ВЛОК — 1500 тенге
                    </li>
                    <li>
                        Пантовые ванны — 2500 тенге
                    </li>
                    <li>
                        Скипидарные ванны — 2000 тенге
                    </li>
                    <li>
                        Ручной массаж (общий и точечный)
                    </li>
                    <li>
                        Шейно воротниковый — 1000 тенге
                    </li>
                    <li>
                        Спинный — 2000 тенге
                    </li>
                    <li>
                        Общий — 3000 тенге
                    </li>
                    <li>
                        Урология — в зависимости от диагноза
                    </li>
                    <li>
                        Гинекология — в зависимости от диагноза
                    </li>
                    <li>
                        Кедровая бочка — 2000 тенге
                    </li>
                    <li>
                        Иглотерапия — 2500 тенге
                    </li>
                </ul>

            </div>
        </main>



    </>
};


export default Ayazhan