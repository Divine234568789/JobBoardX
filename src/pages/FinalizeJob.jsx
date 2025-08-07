import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { PayContext } from "../Contexts/PayContext";
import toast from "react-hot-toast";

const FinalizeJob = () => {
  const { jobData, setJobData } = useContext(PayContext);
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handlePostJob = () => {
    if (!description.trim()) {
      return toast.error("Please enter a job description.");
    }

    const finalJob = {
      ...jobData,
      description,
      postedAt: new Date().toISOString(),
    };

    console.log("Posting job:", finalJob);
    toast.success("Job posted successfully!");

    setJobData({});
    navigate("/Jobs");
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Add Job Description</h2>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        rows={8}
        placeholder="Enter full job description here..."
        className="w-full border rounded-lg p-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        onClick={handlePostJob}
        className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-semibold transition"
      >
        Post Job
      </button>
    </div>
  );
};

export default FinalizeJob;
