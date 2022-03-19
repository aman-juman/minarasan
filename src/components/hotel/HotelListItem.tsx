import {FC} from "react";
import styles from './HotelListItem.module.scss';
import Image from "next/image";
import img1 from './saryagash.com_.kz_araydeluxe.jpg';


export const HotelListItem: FC = (): JSX.Element => {
    return <>
        <div className={styles.wrap}>
            <div className={styles.img}>
                <Image

                    src={img1}
                />
            </div>

            <div className={styles.text}>
                <h2>Aray Deluxe</h2>
                <p>санаторий</p>
            </div>

            <a href="" className={styles.btn}>
                Подробнее
            </a>
        </div>
    </>
}