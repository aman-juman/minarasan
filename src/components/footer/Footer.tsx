import {FC} from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';


export const Footer:FC = () :JSX.Element =>{
    return <>
        <footer style={{margin: "70px 0", display: "flex", justifyContent: "center"}}>
            <div style={{display: "flex", alignItems: "center", fontWeight: "bold"}}>
                <LocationOnIcon style={{fontSize: "18px"}} />
                г. Сарыагаш
            </div>
        </footer>
        </>
}