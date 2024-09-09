import Card from "../../../components/small/Card";
import DataRegis from "../../../dummyData/regisData";

export default function DashboardPage() {
    const datas = DataRegis
  return (
    <div>
      <div className="grid grid-cols-4 gap-5">
       <Card count={datas.length} label="Total Registration" />
       <Card count={datas.length} label="Total Student" />
       <Card count={datas.length} label="Total Teacher" />
       <Card count={datas.length} label="Total Student" />
      </div>
    </div>
  )
}
