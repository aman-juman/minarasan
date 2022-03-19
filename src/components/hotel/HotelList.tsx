import {FC} from "react";
import {HotelListItem} from "./HotelListItem";
import styles from "./HotelList.module.scss";


export const HotelList: FC =(): JSX.Element =>{
    return <>
        <div className={styles.wrap}>
            <div className={styles.list}>
                <HotelListItem />
                <HotelListItem />
                <HotelListItem />
                <HotelListItem />
                <HotelListItem />
                <HotelListItem />
                <HotelListItem />
                <HotelListItem />
            </div>

        </div>
        </>
}