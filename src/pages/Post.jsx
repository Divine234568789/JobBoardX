import { useNavigate } from "react-router";
import { ArrowRight, ChevronLeft } from "lucide-react";
import { useState } from "react";
import { useJobContext } from "../contexts/JobContext";
import toast from "react-hot-toast";

const Post = () => {
  const navigate = useNavigate();
  const { updateTempJob } = useJobContext();

  const [companyName, setCompanyName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");

  const handleContinue = () => {
    if (!jobTitle || !location || !companyName || !category) {
      toast.error("Please fill in all required fields.");
      return;
    }

    updateTempJob({
      companyName,
      jobTitle,
      location,
      category,
      postedAt: new Date().toLocaleDateString(),
    });

    navigate("/Job-Details");
  };

  return (
    <div className="min-h-screen px-4 py-6">
      <div className="max-w-xl w-full mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Add job basics</h1>

        <div className="space-y-6">
          <div>
            <label className="block text-gray-800 font-medium mb-1">
              Job title<span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              placeholder="Enter job title"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-800 font-medium mb-1">
              Job Category<span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Enter the category of your job"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-800 font-medium mb-1">
              Company Name<span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              placeholder="Enter Company Name"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-800 font-medium mb-1">
              Where would you like to advertise this job?
              <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Enter your location"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="mt-8 flex justify-between">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 border border-blue-600 text-blue-600 px-6 py-2 rounded-full hover:bg-blue-50 transition"
          >
            <ChevronLeft size={18} />
            Back
          </button>
          <button
            onClick={handleContinue}
            className="bg-blue-600 hover:cursor-pointer hover:bg-blue-700 text-white px-6 py-2 rounded-md flex items-center gap-2 transition"
          >
            Continue <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
