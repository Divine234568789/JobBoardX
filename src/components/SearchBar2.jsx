import { useState } from "react";
import { useNavigate } from "react-router";
import Loading from "./Loading";
import { useJobContext } from "../contexts/JobContext";

const SearchBar = () => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { jobs, setFilteredJobs } = useJobContext();

  const handleSearch = () => {
    setLoading(true);

    const filtered = jobs.filter((job) => {
      const titleMatch = job.jobTitle
        .toLowerCase()
        .includes(title.toLowerCase());
      const locationMatch = job.location
        .toLowerCase()
        .includes(location.toLowerCase());
      return titleMatch && locationMatch;
    });

    setFilteredJobs(filtered);
    navigate("/jobs");
    setLoading(false);
  };

  if (loading) return <Loading />;

  return (
    <div className="flex gap-4 bg-white p-4 justify-center rounded-lg shadow-lg">
      <input
        className="border p-2 rounded w-1/3"
        placeholder="Job Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        className="border p-2 rounded w-1/3"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />

      <button
        onClick={handleSearch}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
