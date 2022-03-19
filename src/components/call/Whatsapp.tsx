import {FC} from "react";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


export const Whatsapp: FC = () :JSX.Element =>{
    return <>
        <div >
            <a className="whatsapp" href="https://wa.me/77024609006?text=Я%20хочу%20забронировать%20номер%20в%20санаторий">
                <WhatsAppIcon  style={{marginRight: "10px"}}/>
                <h3>Whastapp</h3>
            </a>

        </div>
        </>
}