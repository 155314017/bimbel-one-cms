import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function SettingButton() {
  return (
    <div>
      <Link to={"/setting"}>
        <button className="flex items-center justify-center w-9 h-9">
          <FontAwesomeIcon
            className="text-[#125B9A] text-2xl spin-on-hover"
            icon={faGear}
          />
        </button>
      </Link>
    </div>
  );
}
