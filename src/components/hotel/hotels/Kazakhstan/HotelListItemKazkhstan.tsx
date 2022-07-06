import {FC} from "react";
import styles from '../../HotelListItem.module.scss';
import Image from "next/image";
import img1 from './saryagash.org_.kz_Kazakhstan_KZ.jpg';
import Link from "next/link";


export const HotelListItemKazakhstan: FC = (): JSX.Element => {
    return <>
        <div className={styles.wrap}>
            <div className={styles.img}>
                <Image
                    src={img1}
                />
            </div>

            <div className={styles.text}>
                <h2>Kazakhstan KZ</h2>
                <p>санаторий</p>
            </div>

            <Link href="/hotel/kazakhstan" >
                <a className={styles.btn}>
                    Подробнее
                </a>
            </Link>
        </div>
    </>
}