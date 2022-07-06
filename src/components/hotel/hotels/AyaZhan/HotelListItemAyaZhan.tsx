import {FC} from "react";
import styles from '../../HotelListItem.module.scss';
import Image from "next/image";
import img1 from './saryagash.org_.kz_Aya-Zhan_MM.jpeg';
import Link from "next/link";


export const HotelListItemAyaZhan: FC = (): JSX.Element => {
    return <>
        <div className={styles.wrap}>
            <div className={styles.img}>
                <Image
                    src={img1}
                />
            </div>

            <div className={styles.text}>
                <h2>Ая-Жан & MM</h2>
                <p>санаторий</p>
            </div>

            <Link href="/hotel/ayazhan" >
                <a className={styles.btn}>
                    Подробнее
                </a>
            </Link>
        </div>
    </>
}