import JobCard from "../components/HomePage/JobCard";
import { useJobContext } from "../Contexts/JobContext";

const PostedJob = () => {
  const { jobs } = useJobContext();

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8">Your Posted Jobs</h1>

      {jobs.length === 0 ? (
        <p className="text-gray-500">You haven’t posted any jobs yet.</p>
      ) : (
        jobs.map((job, index) => (
          <JobCard
            key={index}
            postedAt={job.postedAt || "Just now"}
            title={job.jobTitle || "Untitled Job"}
            company={job.companyName || "Unknown Company"}
            category={job.category || "Not specified"}
            type={job.selectedJobTypes || "Full-time"}
            salary={
              job.payDetails.minPay && job.payDetails.maxPay
                ? `${job.payDetails.minPay} - ${job.payDetails.maxPay}`
                : job.maxPay || job.minPay || "Not disclosed"
            }
            location={job.location || "Remote"}
            description={job.description || ""}
          />
        ))
      )}
    </div>
  );
};

export default PostedJob;
