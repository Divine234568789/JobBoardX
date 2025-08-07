import { useNavigate } from "react-router";
import { ArrowRight, ChevronLeft } from "lucide-react";
import { useState } from "react";

const Post = () => {
  const navigate = useNavigate();

  const [jobTitle, setJobTitle] = useState("");
  const [location, setLocation] = useState("");

  const handleContinue = () => {
    localStorage.setItem(
      "jobBasics",
      JSON.stringify({
        title: jobTitle,
        location: location,
      })
    );

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
              required
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
              required
            />
          </div>
        </div>

        <div className="mt-8 flex justify-between">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 border border-blue-600 text-blue-600 px-6 py-2 rounded-full hover:cursor-pointer hover:bg-blue-50 transition"
          >
            <ChevronLeft size={18} />
            Back
          </button>
          <button
            onClick={handleContinue}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md flex items-center gap-2 hover:cursor-pointer transition"
          >
            Continue <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
