import {FC} from "react";
import styles from '../../HotelListItem.module.scss';
import Image from "next/image";
import img1 from './saryagash.com_.kz_araydeluxe.jpg';
import Link from "next/link";


export const HotelListItemAray: FC = (): JSX.Element => {
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

            <Link href="/hotel/aray" >
                <a className={styles.btn}>
                    Подробнее
                </a>
            </Link>
        </div>
    </>
}