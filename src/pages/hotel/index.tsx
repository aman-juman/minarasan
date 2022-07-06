import {FC} from "react";
import {SEO} from "../../components/SEO";
import Header from "../../components/header/Header";
import styles from "./Hotel.module.scss";
import {SliderTwo} from "../../components/slider/SliderTwo";



import img1 from "../../../public/salmaKaravan/1.jpg"
import img2 from "../../../public/salmaKaravan/2.jpg"
import img3 from "../../../public/salmaKaravan/3.jpg"
import img4 from "../../../public/salmaKaravan/4.jpg"
import img5 from "../../../public/salmaKaravan/5.jpg"
import img6 from "../../../public/salmaKaravan/6.jpg"
import img7 from "../../../public/salmaKaravan/7.jpg"
import img8 from "../../../public/salmaKaravan/8.jpg"
import img9 from "../../../public/salmaKaravan/9.jpg"
import img10 from "../../../public/salmaKaravan/10.jpg"
import img11 from "../../../public/salmaKaravan/11.jpg"
import {Call} from "../../components/call/Call";
import {Whatsapp} from "../../components/call/Whatsapp";
import {Footer} from "../../components/footer/Footer";
import {HotelList} from "../../components/hotel/HotelList";

const img = [
    img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11
];

export type IImg  = {
    img: StaticImageData[];
}

const Hotel: FC = ():JSX.Element =>{
    return <>
        <SEO
            title="Лучшие Санаторий в Сарыагаше"
        />
        <Header />
        <main className="container">
            <h1>Санаторий Сарыагаш</h1>
            <SliderTwo img={img} />

            <HotelList />
        </main>



    </>
};



export default Hotel