import {FC} from "react";
import styles from '../../HotelListItem.module.scss';
import Image from "next/image";
import img1 from './saryagash.org_.kz_Erdaulet.jpeg';
import Link from "next/link";


export const HotelListItemErdaulet: FC = (): JSX.Element => {
    return <>
        <div className={styles.wrap}>
            <div className={styles.img}>
                <Image
                    src={img1}
                />
            </div>

            <div className={styles.text}>
                <h2>Ердәулет</h2>
                <p>санаторий</p>
            </div>

            <Link href="/hotel/erdaulet" >
                <a className={styles.btn}>
                    Подробнее
                </a>
            </Link>
        </div>
    </>
}