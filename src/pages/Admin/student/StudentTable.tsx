import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import SearchBar from "../../../components/small/SearchBar";
import DataRegis from "../../../dummyData/regisData";
import { useNavigate } from "react-router-dom";

export default function StudentTable() {
  const datas = DataRegis;
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage] = useState(10);

  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const currentData = datas.slice(indexOfFirstData, indexOfLastData);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div>
      <div className="mb-5 flex justify-between items-center">
        <h1 className="text-xl font-bold">Student List</h1>
        <SearchBar />
      </div>

      <div className="max-h-[500px] overflow-y-auto">
        <table className="table-auto w-full border">
          <thead className="border">
            <tr className="sticky top-0 bg-slate-50">
              <th className="border text-[12px]  p-1">Id</th>
              <th className="border text-[12px]  p-1">Name</th>
              <th className="border text-[12px]  p-1">Email</th>
              <th className="border text-[12px]  p-1">Phone Number</th>
              <th className="border text-[12px]  p-1">Status</th>
              <th className="border text-[12px] p-1 w-[100px]">Detail</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((data, index) => (
              <tr key={index}>
                <td className="border capitalize p-2 text-center text-[12px]">
                  {data.id}
                </td>
                <td className="border capitalize p-2 text-[12px] bg-slate-100">
                  {data.name}
                </td>
                <td className="border p-2 text-[12px]">{data.email}</td>
                <td className="border capitalize p-2 text-center text-[12px] bg-slate-100">
                  {data.phoneNumber}
                </td>
                <td className="border p-2 text-center text-[12px]">
                  <span
                    className={`px-2 py-1 rounded-md font-bold tracking-wide 
      ${
        data.status === "active"
          ? "bg-green-100 text-green-500"
          : "bg-red-100 text-red-500"
      }`}
                  >
                    {data.status}
                  </span>
                </td>
                <td className="border capitalize p-2 flex justify-center gap-5 bg-slate-100">
                  <button
                    onClick={() =>
                      navigate(`/admin/detail-student/${data.id}/${data.name}`)
                    }
                    className="border-2 border-slate-300 w-[25px] h-[25px] rounded-md flex justify-center bg-white items-center text-[12px] transition-all ease hover:border-[#125B9A]"
                  >
                    <FontAwesomeIcon
                      className="text-[#125B9A]"
                      icon={faEllipsisVertical}
                    />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Pagination */}
      <Pagination
        dataPerPage={dataPerPage}
        totalData={datas.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
}

interface PaginationProps {
  dataPerPage: number;
  totalData: number;
  paginate: (pageNumber: number) => void;
  currentPage: number;
}

const Pagination = ({
  dataPerPage,
  totalData,
  paginate,
  currentPage,
}: PaginationProps) => {
  // const pageNumbers = [];
  const totalPages = Math.ceil(totalData / dataPerPage);
  const siblingsCount = 1;

  const showEllipsis = () => {
    return <li className="px-2 py-1">...</li>;
  };

  const generatePageNumbers = () => {
    const pages = [];

    if (currentPage > siblingsCount + 2) {
      pages.push(1, showEllipsis());
    } else {
      for (let i = 1; i < Math.min(siblingsCount + 1, totalPages); i++) {
        pages.push(i);
      }
    }

    const startPage = Math.max(2, currentPage - siblingsCount);
    const endPage = Math.min(totalPages - 1, currentPage + siblingsCount);

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    if (currentPage < totalPages - siblingsCount - 1) {
      pages.push(showEllipsis(), totalPages);
    }

    return pages;
  };

  const pages = generatePageNumbers();

  return (
    <nav className="mt-4 flex justify-between items-center">
      <h1 className="text-[14px] text-slate-400">
        Showing {currentPage * dataPerPage - dataPerPage + 1} to{" "}
        {currentPage * dataPerPage} of {totalData}
      </h1>
      <ul className="flex justify-center gap-2">
        {/* Tombol halaman sebelumnya */}
        <li>
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-md text-[12px] ${
              currentPage === 1 ? "bg-gray-300" : "bg-blue-500 text-white"
            }`}
          >
            Previous
          </button>
        </li>

        {/* Nomor halaman */}
        {pages.map((page, index) =>
          typeof page === "number" ? (
            <li key={index}>
              <button
                onClick={() => paginate(page)}
                className={`px-4 py-2 rounded-md text-[12px] ${
                  page === currentPage
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                {page}
              </button>
            </li>
          ) : (
            page
          )
        )}

        {/* Tombol halaman berikutnya */}
        <li>
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-md text-[12px] ${
              currentPage === totalPages
                ? "bg-gray-300"
                : "bg-blue-500 text-white"
            }`}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};
