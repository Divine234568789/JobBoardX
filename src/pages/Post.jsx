import { ArrowRight } from "lucide-react";

const Post = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="max-w-xl w-full">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Add job basics</h1>

        <div className="space-y-6">
          <div>
            <label className="block text-gray-800 font-medium mb-1">
              Job title<span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter job title"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-800 font-medium mb-1">
              Where would you like to advertise this job?{" "}
              <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter your location"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="mt-8">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md flex hover:cursor-pointer items-center gap-2 transition">
            Continue
            <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
