import {FC} from "react";
import styles from "./Section.module.scss";

export const SectionFirst: FC = () :JSX.Element =>{
    return <>
        <div className="">
            <div>
                <h2 className={styles.text}>
                    Выбирайте лучшие санатории Сарыагаша по самым доступным ценам!
                </h2 >
                <span></span>
            </div>
        </div>
        </>
}