import { useState } from "react";
import { useNavigate } from "react-router";
import { Search } from "lucide-react";
import { useJobContext } from "../Contexts/JobContext";

const SearchBar = () => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");

  const navigate = useNavigate();
  const { setFilters, setPage } = useJobContext();

  const handleSearch = () => {
    setFilters({ title, location, category });
    setPage(1);
    navigate("/jobs");
  };

  return (
    <div>
      <div className="w-full max-w-4xl mx-auto bg-white rounded-md lg:rounded-full md:rounded-full shadow-md p-2 flex flex-col md:flex-row md:items-center md:justify-between gap-4 lg:gap-8">
        <input
          type="text"
          placeholder="Job Title or Company"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="py-2 px-1 w-full md:w-auto flex-1 text-black border-b-gray-500 border-b lg:border-hidden md:border-hidden focus:outline-none"
        />

        <div className="hidden md:flex h-9 bg-gray-700 w-px"></div>

        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="py-2 px-4 w-full md:w-auto text-black hover:cursor-pointer border-b-gray-500 border-b lg:border-hidden md:border-hidden"
        >
          <option value="">Select Location</option>
          <option value="Lagos">Lagos</option>
          <option value="Abuja">Abuja</option>
          <option value="PH">Port Harcourt</option>
        </select>

        <div className="hidden md:flex h-9 bg-gray-700 w-px"></div>

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="py-2 px-4 w-full md:w-auto text-black hover:cursor-pointer border-b-gray-500 border-b lg:border-hidden md:border-hidden"
        >
          <option value="">Select Category</option>
          <option value="design">Design</option>
          <option value="engineering">Engineering</option>
          <option value="marketing">Marketing</option>
        </select>

        <button
          onClick={handleSearch}
          className="w-full md:w-auto bg-teal-600 hover:bg-teal-700 hover:cursor-pointer text-white font-semibold px-6 py-2 rounded-full flex justify-center items-center gap-2"
        >
          <Search size={18} />
          <span>Search Job</span>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
