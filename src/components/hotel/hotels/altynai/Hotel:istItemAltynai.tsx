import {FC} from "react";
import styles from '../../HotelListItem.module.scss';
import Image from "next/image";
import img1 from '../altynai/saryagash.org_.kz_Altynai_Lux.jpg';
import Link from "next/link";


export const HotelListItemAltynai: FC = (): JSX.Element => {
    return <>
        <div className={styles.wrap}>
            <div className={styles.img}>
                <Image
                    src={img1}
                />
            </div>

            <div className={styles.text}>
                <h2>Алтынай Люкс</h2>
                <p>санаторий</p>
            </div>

            <Link href="/hotel/altynai" >
                <a className={styles.btn}>
                    Подробнее
                </a>
            </Link>
        </div>
    </>
}