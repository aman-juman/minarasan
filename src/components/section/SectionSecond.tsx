import {FC} from "react";
import styles from "./Section.module.scss";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export const SectionSecond: FC = (): JSX.Element => {
    return <>
        <div >
            <div className={styles.sectionWrap}>
                <h2 className={styles.text}>
                    Если у Вас возникли вопросы - обращайтесь в любое время:
                </h2>
                <div className={styles.callWrap}>
                    <div className={styles.callBlock}>
                        <h2 className={styles.callText}>
                            WhatsApp:
                        </h2>
                        <div className={styles.callBtn}>
                            <WhatsAppIcon />
                            <span>
                                +7 (705) 393 16 15
                            </span>
                        </div>
                    </div>
                    <div className={styles.callBlock}>
                        <h2 className={styles.callText}>
                            Позвонить:
                        </h2>
                        <div className={styles.callBtn}>
                            <LocalPhoneIcon/>
                            <span>
                                +7 (705) 393 16 15
                            </span>

                        </div>
                    </div>
                </div>
                <span></span>
            </div>
        </div>
    </>
}