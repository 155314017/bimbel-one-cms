import { FC } from "react";

interface Option {
  label: string;
  value: string;
}

interface SelectFieldProps {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  label?: string;
  placeholder?: string;
}

const SelectField: FC<SelectFieldProps> = ({
  options,
  value,
  onChange,
  label,
  placeholder,
}) => {
  return (
    <div className="flex flex-col">
      {label && <label className="mb-2 text-sm font-medium text-gray-700">{label}</label>}
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="block w-full p-2 border-2 border-[#125B9A] bg-white rounded-xl shadow-md"
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;
