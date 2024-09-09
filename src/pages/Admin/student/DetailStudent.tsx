import { useParams, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import SelectField from "../../../components/small/SelectField";
import { useState } from "react";

export default function DetailStudent() {
  const [selectedOption, setSelectedOption] = useState("");

  const options = [
    { label: "Option 1", value: "1" },
    { label: "Option 2", value: "2" },
    { label: "Option 3", value: "3" },
  ];

  const navigate = useNavigate();
  const { name } = useParams();

  return (
    <div>
      <div className="flex items-center gap-8">
        <button
          onClick={() => navigate("/admin/student")}
          className="border-2 border-[#125B9A] w-[40px] h-[40px] rounded-full transition-all ease hover:bg-slate-100"
        >
          <FontAwesomeIcon className="text-[#125B9A]" icon={faArrowLeft} />
        </button>
        <h1 className="text-xl font-bold capitalize"> {name} </h1>
      </div>

      <div className="flex mt-8 gap-5">
        <div className="flex flex-col w-[20%] gap-4">
          <button className="border-2 border-[#125B9A] rounded-[10px] shadow-md p-1 capitalize text-[12px] text-[#125B9A] font-bold tracking-wide transition-all hover:bg-[#125B9A] hover:text-white">
            add daily notes
          </button>
          <button className="border-2 border-[#125B9A] rounded-[10px] shadow-md p-1 capitalize text-[12px] text-[#125B9A] font-bold tracking-wide transition-all hover:bg-[#125B9A] hover:text-white">
            add daily task
          </button>
          <SelectField
            options={options}
            value={selectedOption}
            onChange={(value) => setSelectedOption(value)}
            placeholder="Teacher"
          />
        </div>
        <div className="w-full h-[510px] bg-slate-300 rounded-lg flex justify-center items-center">
          calendar here
        </div>
      </div>
    </div>
  );
}
