import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
export default function LogoutButton() {
  return (
    <div>
      <button className="flex items-center justify-center w-9 h-9">
        <FontAwesomeIcon
          className="text-[#125B9A] text-2xl flip-on-hover"
          icon={faArrowRightFromBracket}
        />
      </button>
    </div>
  );
}
