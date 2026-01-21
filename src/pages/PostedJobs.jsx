import { useState } from "react";
import JobCard from "../components/HomePage/JobCard";
import { useJobContext } from "../contexts/JobContext";

const PostedJob = () => {
  const { jobs } = useJobContext();

  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");

  const filteredJobs = jobs.filter((job) => {
    const titleMatch = job.jobTitle
      ?.toLowerCase()
      .includes(search.toLowerCase());

    const locationMatch = job.location
      ?.toLowerCase()
      .includes(location.toLowerCase());

    return titleMatch && locationMatch;
  });

  return (
    <div>
      <form className="flex flex-col md:flex-row gap-4 bg-white p-4 justify-center rounded-lg shadow-lg">
        <input
          type="text"
          className="border p-2 rounded w-full md:w-1/3"
          placeholder="Search by Job Title"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <input
          type="text"
          className="border p-2 rounded w-full md:w-1/3"
          placeholder="Search by Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </form>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-8">Your Posted Jobs</h1>

        {filteredJobs.length === 0 ? (
          <p className="text-gray-500">No jobs match your search.</p>
        ) : (
          filteredJobs.map((job) => (
            <JobCard
              key={job.id}
              id={job.id}
              postedAt={job.postedAt || "Just now"}
              title={job.jobTitle || "Untitled Job"}
              company={job.companyName || "Unknown Company"}
              description={job.description || ""}
              category={job.category || "Not specified"}
              type={job.selectedJobTypes || "Full-time"}
              salary={
                job.payDetails?.minPay && job.payDetails?.maxPay
                  ? `${job.payDetails.minPay} - ${job.payDetails.maxPay}`
                  : "Not disclosed"
              }
              location={job.location || "Remote"}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default PostedJob;
