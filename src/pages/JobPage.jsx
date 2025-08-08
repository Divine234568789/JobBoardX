import { useState } from "react";
import Navbar from "../components/HomePage/NavBar";
import PostedJob from "./PostedJobs";
import SearchBar from "../components/SearchBar2";
import { useJobContext } from "../contexts/JobContext";

const JobPage = () => {
  const { jobs } = useJobContext();

  const [filters, setFilters] = useState({
    jobType: [],
    datePosted: "",
  });

  const handleCheckbox = (field, value) => {
    setFilters((prev) => {
      const list = prev[field];
      const updatedList = list.includes(value)
        ? list.filter((item) => item !== value)
        : [...list, value];
      return { ...prev, [field]: updatedList };
    });
  };

  const handleDateChange = (value) => {
    setFilters((prev) => ({ ...prev, datePosted: value }));
  };

  const filterJobs = () => {
    return jobs.filter((job) => {
      const matchesType =
        filters.jobType.length === 0 || filters.jobType.includes(job.type);

      const matchesDate = (() => {
        if (!filters.datePosted) return true;
        const postedDate = new Date(job.postedAt);
        const now = new Date();
        const diffInMs = now - postedDate;
        const diffInHours = diffInMs / (1000 * 60 * 60);

        if (filters.datePosted === "24h") return diffInHours <= 24;
        if (filters.datePosted === "7d") return diffInHours <= 168;
        if (filters.datePosted === "30d") return diffInHours <= 720;
        return true;
      })();

      return matchesType && matchesDate;
    });
  };

  const filteredJobs = filterJobs();

  return (
    <div>
      <div className="bg-black">
        <Navbar />
        <h3 className="font-bold text-3xl sm:text-4xl p-6 sm:p-8 text-white text-center">
          Jobs
        </h3>
      </div>

      <SearchBar />

      <div className="flex flex-col lg:flex-row gap-6 p-4 sm:p-6 lg:p-8">
        <aside className="w-full lg:w-1/4 bg-gray-100 p-4 rounded-lg">
          <h2 className="font-bold text-lg mb-4">Filters</h2>

          <div className="mb-4">
            <label className="block font-semibold">Job Type</label>
            <div className="space-y-1 mt-1">
              {["Full-time", "Part-time", "Internship"].map((type) => (
                <label key={type} className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    checked={filters.jobType.includes(type)}
                    onChange={() => handleCheckbox("jobType", type)}
                  />
                  {type}
                </label>
              ))}
            </div>
          </div>

          <div className="mb-2">
            <label className="block font-semibold">Date Posted</label>
            <div className="space-y-1 mt-1">
              {["24h", "7d", "30d"].map((d) => (
                <label key={d} className="flex items-center gap-2 text-sm">
                  <input
                    type="radio"
                    name="datePosted"
                    checked={filters.datePosted === d}
                    onChange={() => handleDateChange(d)}
                  />
                  {d}
                </label>
              ))}
              <label className="flex items-center gap-2 text-sm">
                <input
                  type="radio"
                  name="datePosted"
                  checked={filters.datePosted === ""}
                  onChange={() => handleDateChange("")}
                />
                Any
              </label>
            </div>
          </div>
        </aside>

        <main className="w-full lg:w-3/4 space-y-4">
          <PostedJob />
        </main>
      </div>
    </div>
  );
};

export default JobPage;
