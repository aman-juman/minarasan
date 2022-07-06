import {FC} from "react";
import {HotelListItemAray} from "./hotels/Aray/HotelListItemAray";
import styles from "./HotelList.module.scss";
import {HotelListItemOksi} from "./hotels/Oksi/HotelListItemOksi";
import {HotelListItemAltynai} from "./hotels/altynai/Hotel:istItemAltynai";
import {HotelListItemKazakhstan} from "./hotels/Kazakhstan/HotelListItemKazkhstan";
import {HotelListItemMarshan} from "./hotels/Marzhan/HotelListItemMarzhan";
import {HotelListItemSalmaKaravan} from "./hotels/SalmaKaravan/HotelListItemSalmaKaravan";
import {HotelListItemAyaZhan} from "./hotels/AyaZhan/HotelListItemAyaZhan";
import {HotelListItemErdaulet} from "./hotels/Erdaulet/HotelListItemErdaulet";


export const HotelList: FC =(): JSX.Element =>{
    return <>
        <div className={styles.wrap}>
            <div className={styles.list}>
                <HotelListItemAray />
                <HotelListItemOksi />
                <HotelListItemAltynai />
                <HotelListItemKazakhstan />
                <HotelListItemMarshan />
                <HotelListItemSalmaKaravan />
                <HotelListItemAyaZhan />
                <HotelListItemErdaulet />
            </div>

        </div>
        </>
}