/* eslint-disable @typescript-eslint/no-explicit-any */
import SearchBar from "../../../components/small/SearchBar";
import { useEffect, useState } from "react";
import {
  FetchDataRegistrasi,
  DataRegistrasi,
} from "../../../services/API/FetchDataRegistrasi";

export default function RegistrationTable() {
  const [dataRegis, setDataRegis] = useState<DataRegistrasi[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);


  useEffect(() => {
    const getData = async () => {
      try {
        const fetchedData = await FetchDataRegistrasi();
        setDataRegis(fetchedData);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const displayData = dataRegis.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  const handleChangePage = (_event: React.MouseEvent, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(1);
  };

  return (
    <div>
      <div className="mb-5 flex justify-between items-center">
        <h1 className="text-xl font-bold">Registration List</h1>
        <SearchBar />
      </div>

      <div className="max-h-[500px] overflow-y-auto">
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <table className="table-auto w-full border">
            <thead>
              <tr className="sticky top-0 bg-slate-50">
                <th className="border text-[12px] p-1">Id</th>
                <th className="border text-[12px] p-1">Name</th>
                <th className="border text-[12px] p-1">Email</th>
                <th className="border text-[12px] p-1">Type</th>
                <th className="border text-[12px] p-1">Status</th>
                <th className="border text-[12px] p-1 w-[120px]">Action</th>
              </tr>
            </thead>
            <tbody>
              {displayData.map((data, index) => (
                <tr key={index}>
                  <td className="border capitalize p-2 text-center text-[12px]">
                    {data.teacher_id}
                  </td>
                  <td className="border capitalize p-2 text-[12px] bg-slate-100">
                    {data.full_name}
                  </td>
                  <td className="border p-2 text-[12px]">{data.email}</td>
                  <td className="border capitalize p-2 text-center text-[12px] bg-slate-100">
                    {data.type}
                  </td>
                  <td className="border p-2 text-center text-[12px]">
                    <span
                      className={`px-2 py-1 rounded-md font-bold tracking-wide lowercase ${
                        data.status === "active"
                          ? "bg-green-100 text-green-500"
                          : "bg-red-100 text-red-500"
                      }`}
                    >
                      {data.status}
                    </span>
                  </td>
                  <td className="border capitalize p-2 flex justify-center gap-5 bg-slate-100">
                    <button className="border-2 rounded-md capitalize bg-[#125B9A] text-slate-50 text-[12px] px-2 py-1 tracking-wide transition-all ease hover:border-[#125B9A] hover:text-[#125B9A] hover:bg-slate-50">
                      activate
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      {/* Pagination Controls */}
      <div className="flex justify-end items-center mt-4 gap-3">
        <button
          className="shadow-sm border-2 rounded-md capitalize bg-[#125B9A] text-slate-50 text-[12px] w-[80px] py-1 tracking-wide transition-all ease hover:border-[#125B9A] hover:text-[#125B9A] hover:bg-slate-50"
          onClick={(e) => handleChangePage(e, page - 1)}
          disabled={page === 1}
        >
          Previous
        </button>
        <span>Page {page}</span>
        <button
          className="shadow-sm border-2 rounded-md capitalize bg-[#125B9A] text-slate-50 text-[12px] w-[80px] py-1 tracking-wide transition-all ease hover:border-[#125B9A] hover:text-[#125B9A] hover:bg-slate-50"
          onClick={(e) => handleChangePage(e, page + 1)}
          disabled={displayData.length < rowsPerPage}
        >
          Next
        </button>
        <select value={rowsPerPage} onChange={handleChangeRowsPerPage}>
          <option value={10}>10 rows</option>
          <option value={25}>25 rows</option>
          <option value={50}>50 rows</option>
        </select>
      </div>
    </div>
  );
}
