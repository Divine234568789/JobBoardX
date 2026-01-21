import Navbar from "../components/HomePage/Navbar";
import PostedJob from "./PostedJobs";

import { useState } from "react";

const JobPage = () => {
  return (
    <div>
      <div className="bg-black">
        <Navbar />
        <h3 className="font-bold text-3xl sm:text-4xl p-6 sm:p-8 text-white text-center">
          Jobs
        </h3>
      </div>

      <PostedJob />
    </div>
  );
};

export default JobPage;
