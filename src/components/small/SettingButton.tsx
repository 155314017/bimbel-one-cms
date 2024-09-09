import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";

export default function SettingButton() {
  return (
    <div>
        <button className="flex items-center justify-center w-9 h-9">
          <FontAwesomeIcon
            className="text-[#125B9A] text-2xl spin-on-hover"
            icon={faGear}
          />
        </button>
    </div>
  );
}
