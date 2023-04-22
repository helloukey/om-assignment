import { useState } from "react";
import { Data } from "../pages/Mentors";

import Profile from "./results/Profile";
import Name from "./results/Name";
import Designation from "./results/Designation";
import Description from "./results/Description";
import Interest from "./results/Interest";
import Skills from "./results/Skills";
import Provides from "./results/Provides";

// assets
import arrow from "../assets/arrow.svg";

type Props = {
  data: Data | null;
  error: string;
  isLoading: boolean;
  searchQuery: string;
};
const Results = ({ data, searchQuery }: Props) => {
  const [isHidden, setIsHidden] = useState<boolean>(true);

  const handleHidden = () => {
    setIsHidden(!isHidden);
  };

  return (
    // wrapper
    <div className="w-full py-[5%]">
      <h1 className="font-semibold xs:mt-8">
        {searchQuery.length ? `Search Result: ${searchQuery}` : "All Results"}
      </h1>
      {data
        ? data.map((mentor) => (
            <div
              className="w-full flex flex-col sm:flex-row gap-5 lg:gap-10 mt-4 p-4 border border-neutral rounded-md"
              key={mentor.id}
            >
              {/* Profile and action */}
              <Profile />
              {/* Details */}
              <div className="flex flex-col">
                {/* Mentor name & Linkedin */}
                <div onClick={handleHidden} className="xs:cursor-pointer">
                  <Name name={mentor.name} linkedinURI={mentor.linkedin} />
                  {/* Designation */}
                  <Designation
                    designation={mentor.designation}
                    experience={mentor.experience}
                  />
                  {/* Description */}
                  <Description description={mentor.description} />
                </div>
                <div
                  className={`${
                    isHidden ? "hidden" : ""
                  } sm:block transition-all`}
                >
                  {/* Area of Interest */}
                  <Interest interest={mentor.interest} />
                  {/* Top Skills */}
                  <Skills skills={mentor.skills} />
                  {/* Open to providing */}
                  <Provides provides={mentor.provides} />
                </div>
                <img
                  src={arrow}
                  alt="view-more"
                  className={`sm:hidden w-5 h-5 mx-auto ${
                    isHidden ? "" : "rotate-180"
                  }`}
                  onClick={handleHidden}
                />
              </div>
            </div>
          ))
        : null}
    </div>
  );
};
export default Results;
