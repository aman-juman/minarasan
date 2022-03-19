import {FC} from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import styles from './Header.module.scss'
import Image from 'next/image'
import logo from '../../../public/logo.png'
import {SliderOne} from "./SliderOne";

const Header : FC =() =>{
    return(
        <header className={styles.header}>
            <div className={styles.topWrap}>
                <div className={styles.item}>
                    <LocationOnIcon style={{fontSize: "18px"}} />
                    г. Сарыагаш
                </div>
                <div className={styles.item}>
                    <PhoneEnabledIcon style={{fontSize: "18px"}} />
                    Моб. +7 (705) 393 16 15 • Акымбай
                </div>
            </div>
            <div className={styles.logoWrap}>
                <Image
                    src={logo}
                    alt="logo"
                />
            </div>
            <SliderOne />
        </header>
    )
};



export default Header;