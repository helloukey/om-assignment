import { useEffect, useState } from "react";
import Results from "../components/Results";
import Search from "../components/Search";
import Pagination from "../components/Pagination";

type Props = {};
export type Data = {
  id: number;
  name: string;
  linkedin: string;
  designation: string;
  experience: string;
  description: string;
  interest: string;
  skills: string;
  provides: string[];
  email: string;
}[];

const Mentors = (props: Props) => {
  const [data, setData] = useState<Data | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    setError("");
    setIsLoading(true);

    fetch("data/mentors.json")
      .then((res) => res.json())
      .then((mentors) => {
        setData(mentors);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="pt-[10%]">
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Results
        data={
          data
            ? data
                .filter(
                  (d) =>
                    d.name.includes(searchQuery) ||
                    d.skills.includes(searchQuery) ||
                    d.provides.includes(searchQuery) ||
                    d.designation.includes(searchQuery)
                )
                .slice(currentPage * 5, (currentPage + 1) * 5)
            : data
        }
        error={error}
        isLoading={isLoading}
        searchQuery={searchQuery}
      />
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        data={data!.filter(
          (d) =>
            d.name.includes(searchQuery) ||
            d.skills.includes(searchQuery) ||
            d.provides.includes(searchQuery) ||
            d.designation.includes(searchQuery)
        )}
      />
    </div>
  );
};
export default Mentors;
