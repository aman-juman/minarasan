import {FC} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Keyboard, Mousewheel, Navigation, Pagination} from "swiper";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import img1 from "../../../public/saryagash.com_.kz_Slide_01.jpg"
import img2 from "../../../public/saryagash.com_.kz_Slide_02.jpg"
import img3 from "../../../public/saryagash.com_.kz_Slide_03.jpg"
import img4 from "../../../public/saryagash.com_.kz_Slide_04.jpg"
import img5 from "../../../public/saryagash.com_.kz_Slide_05.jpg"
const img = [
    img1, img2, img3, img4, img5
]

export const SliderOne: FC = (): JSX.Element =>{
    return (
        <Swiper
            cssMode={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            slidesPerView= {"auto"}
            spaceBetween={15}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
            className = "mySwiper"
        >
            {img.map((image, i) =>(
                <SwiperSlide key={i}>
                    <Image
                    src={image}
                    layout="fill"
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}