import { useNavigate } from "react-router";
import { ChevronLeft, Plus, ArrowRight, Check } from "lucide-react";
import { useState } from "react";

const jobTypes = [
  "Full-time",
  "Part-time",
  "Permanent",
  "Temporary",
  "Contract",
  "Internship",
  "New grad",
];

const AddJobDetails = () => {
  const navigate = useNavigate();
  const [selectedJobTypes, setSelectedJobTypes] = useState([]);

  const toggleJobType = (type) => {
    setSelectedJobTypes((prev) =>
      prev.includes(type)
        ? prev.filter((item) => item !== type)
        : [...prev, type]
    );
  };

  const handleContinue = () => {
    if (selectedJobTypes.length === 0) {
      alert("Please select at least one job type.");
      return;
    }

    // You can store or pass the data here
    console.log("Selected Job Types:", selectedJobTypes);
    navigate("/ChoosePay");
  };

  return (
    <div className="min-h-screen p-4 md:p-10">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">Add job details</h1>

      <div className="mb-10">
        <label className="text-lg font-semibold block mb-2">
          Job type <span className="text-red-500">*</span>
        </label>
        <div className="flex flex-wrap gap-3">
          {jobTypes.map((type) => {
            const isSelected = selectedJobTypes.includes(type);
            return (
              <button
                key={type}
                type="button"
                onClick={() => toggleJobType(type)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm transition ${
                  isSelected
                    ? "bg-blue-100 text-blue-700 hover:cursor-pointer border border-blue-500"
                    : "bg-gray-100 text-gray-700 hover:cursor-pointer hover:bg-gray-200"
                }`}
              >
                {isSelected ? <Check size={14} /> : <Plus size={14} />}
                {type}
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex justify-between items-center mt-12">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 border border-blue-600 text-blue-600 px-6 py-2 rounded-full hover:cursor-pointer hover:bg-blue-50 transition"
        >
          <ChevronLeft size={18} />
          Back
        </button>

        <button
          onClick={handleContinue}
          disabled={selectedJobTypes.length === 0}
          className={`flex items-center gap-2 px-6 py-2 rounded-full transition ${
            selectedJobTypes.length === 0
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-blue-600 text-white hover:cursor-pointer hover:bg-blue-700"
          }`}
        >
          Continue
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default AddJobDetails;
