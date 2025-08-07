import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import SearchBar from "../components/Jobs/SearchBar2";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "../components/HomePage/Navbar";

const JobPage = () => {
  const fetchJobs = async () => {
    try {
      const options = {
        method: "GET",
        url: "https://jsearch.p.rapidapi.com/search",
        params: {
          query: `${filters.title} in ${filters.location}`,
          page: page.toString(),
          num_pages: "1",
        },
        headers: {
          "X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_KEY,
          "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
        },
      };

      const response = await axios.request(options);
      setJobs(response.data.data);
    } catch (error) {
      console.error("API Fetch Error:", error);
    }
  };

  return (
    <div>
      <div className="bg-black">
        <Navbar />
        <h3 className="font-bold text-4xl p-8 text-white flex flex-col items-center">
          Jobs
        </h3>
      </div>
      <SearchBar />
      <div className="flex p-4 gap-6">
        <aside className="w-1/4 bg-gray-100 p-4 rounded-lg">
          <h2 className="font-bold text-lg mb-4">Filters</h2>
          <div className="mb-4">
            <label className="block">Job Type</label>
            <div className="space-y-1">
              {["Full-time", "Part-time", "Internship"].map((type) => (
                <label key={type} className="flex items-center gap-2">
                  <input type="checkbox" /> {type}
                </label>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <label className="block">Experience</label>
            <div className="space-y-1">
              {["Entry", "Mid", "Senior"].map((level) => (
                <label key={level} className="flex items-center gap-2">
                  <input type="checkbox" /> {level}
                </label>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <label className="block">Date Posted</label>
            <div className="space-y-1">
              {["24h", "7d", "30d"].map((d) => (
                <label key={d} className="flex items-center gap-2">
                  <input type="checkbox" /> {d}
                </label>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <label className="block">Salary Range</label>
            <input
              type="range"
              min="0"
              max="500000"
              step="10000"
              className="w-full text-blue-800 bg-blue-900"
            />
          </div>
        </aside>

        <main className="w-3/4 space-y-4"> </main>
      </div>
    </div>
  );
};

export default JobPage;
