import { Dispatch, SetStateAction } from "react";
import { Data } from "../pages/Mentors";

type Props = {
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  data: Data | null;
};
const Pagination = ({ currentPage, setCurrentPage, data }: Props) => {
  const handlePrevious = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };
  return (
    <>
      {data && data.length ? (
        <div className="w-full btn-group mb-24 flex justify-center">
          <button
            className={`btn ${currentPage === 0 ? "btn-disabled" : ""}`}
            onClick={handlePrevious}
          >
            «
          </button>
          <button className="btn">Page {currentPage + 1}</button>
          <button
            className={`btn ${
              currentPage + 1 === Math.ceil(data.length / 5)
                ? "btn-disabled"
                : ""
            }`}
            onClick={handleNext}
          >
            »
          </button>
        </div>
      ) : null}
    </>
  );
};
export default Pagination;
