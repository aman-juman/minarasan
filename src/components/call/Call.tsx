import { FC } from "react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

export const Call: FC = (): JSX.Element => {
  return (
    <div className="call">
      <a className="call-href" href="tel:+7 776 310 12 80">
        <LocalPhoneIcon style={{ marginRight: "10px" }} />
        <span>ПОЗВОНИТЬ</span>
      </a>
    </div>
  );
};
