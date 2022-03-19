import {useState} from "react";
import Header from "../components/header/Header";
import {SectionFirst} from "../components/section/SectionFirst";
import {SEO} from "../components/SEO";
import {Call} from "../components/call/Call";
import {Whatsapp} from "../components/call/Whatsapp";
import {SectionSecond} from "../components/section/SectionSecond";
import {Footer} from "../components/footer/Footer";
import {HotelList} from "../components/hotel/HotelList";

interface IPrice {

}
interface IHotel {
    title: string;
    images: string[];
    description: string;
    prices: number;

}

function IndexPage() {
    const [state, setState] = useState([
        {title: "Aray Deluxe", description: "001"},
        {title: "002", description: "002"},
        {title: "003", description: "003"},
        {title: "004", description: "004"},

    ]);
    return <div>
        <SEO
        title="Курорты Сарыагаша"
        />
        <Header />
        <SectionFirst />
        <SectionSecond />
        <HotelList />
        <SectionSecond />
        <Call />
        <Whatsapp />

        <Footer />

    </div>
}

export default IndexPage