import { useState } from "react";
import { useParams } from "react-router";
import { useJobContext } from "../contexts/JobContext";
import toast from "react-hot-toast";

const JobApplicationPage = () => {
  const { id } = useParams();
  const { jobs } = useJobContext();

  const job = jobs.find((job) => job.id === id);

  if (!job) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl font-bold">Job not found</h2>
      </div>
    );
  }

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    startDate: "",
    cv: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    for (const [key, value] of Object.entries(formData)) {
      if (!value) {
        toast.error(`Please fill in all fields.`);
        return;
      }
      toast.success("Application submitted successfully!");
    }

    const data = new FormData();

    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });

    data.append("jobId", job.id);
    data.append("jobTitle", job.jobTitle);
    data.append("company", job.companyName);

    console.log("Submitted application:");
    for (let pair of data.entries()) {
      console.log(pair[0], pair[1]);
    }

    alert("Application submitted successfully");
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-5xl bg-white rounded-xl shadow-lg p-6 sm:p-8">
        <h1 className="text-2xl sm:text-3xl font-bold mb-8">
          Application for <span className="text-blue-600">{job.jobTitle}</span>
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              name="firstName"
              placeholder="First Name"
              onChange={handleChange}
              required
              className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring-blue-500 outline-none"
            />

            <input
              name="lastName"
              placeholder="Last Name"
              onChange={handleChange}
              required
              className="input w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring-blue-500 outline-none"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              required
              className="input w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring-blue-500 outline-none"
            />

            <input
              name="city"
              placeholder="City"
              onChange={handleChange}
              className="input w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring-blue-500 outline-none"
            />

            <textarea
              name="address"
              placeholder="Address"
              onChange={handleChange}
              className="input md:col-span-2 w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring-blue-500 outline-none"
            />

            <input
              type="date"
              name="startDate"
              onChange={handleChange}
              className="input w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring-blue-500 outline-none"
            />

            <input
              type="file"
              name="cv"
              accept=".pdf,.doc,.docx"
              onChange={handleChange}
              required
              className="w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700 hover:file:cursor-pointer"
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 hover:cursor-pointer transition"
              onClick={handleSubmit}
            >
              Apply Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobApplicationPage;
