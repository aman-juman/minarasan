import {FC} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Keyboard, Lazy, Mousewheel, Navigation, Pagination} from "swiper";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {IImg} from "../../pages/hotel/aray";



export const SliderTwo: FC<IImg> = ({img}): JSX.Element =>{

    return (
        <Swiper
            cssMode={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            spaceBetween={15}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay, Lazy]}
            className = "mySwiperTwo"
            breakpoints={{
                // when window width is >= 640px
                640: {
                    width: 640,
                    slidesPerView: 1,
                },
                // when window width is >= 768px
                800: {
                    width: 800,
                    slidesPerView: 2,
                },
            }}
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