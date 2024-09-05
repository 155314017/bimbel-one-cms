import { useLocation } from "react-router-dom";

export default function ErrorPage() {
  const location = useLocation();

  return (
    <div>
      <div className="flex flex-col items-center justify-center mt-[100px]">
        <h1 className="text-[100px] font-bold">Oops!</h1>
        <p className="text-lg">
          The{" "}
          <span className="font-bold text-orange-600">
            {location.pathname}
          </span>{" "}
          page you are looking for does not exist.
        </p>
      </div>
    </div>
  );
}
