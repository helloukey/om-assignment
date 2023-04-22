import { Dispatch, SetStateAction } from "react";

import search from "../assets/search.svg";

type Props = {
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
};
const Search = ({ searchQuery, setSearchQuery }: Props) => {
  return (
    <div className="form-control">
      <div className="input-group">
        <input
          type="text"
          placeholder="Search…"
          className="input input-bordered w-full max-w-xs"
          value={searchQuery}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSearchQuery(e.target.value)
          }
        />
        <button className="btn btn-square">
          <img src={search} alt="search" className="w-8 h-8" />
        </button>
      </div>
    </div>
  );
};
export default Search;
