
interface Props {
    count: number;
    label: string;
}
export default function Card({count, label}: Props) {
  return (
    <div>
       <div className="w-[229px] h-[108px] border rounded-lg bg-slate-50 shadow-lg flex flex-col justify-center items-center">
            <h1 className="text-[24px] font-bold text-[#125B9A]">{count}</h1>
            <h3 className="text-[14px]">{label}</h3>
        </div>
    </div>
  )
}
