import { useNavigate } from "react-router";
import { usePay } from "../Contexts/PayContext";
import { ChevronLeft, ArrowRight } from "lucide-react";
import toast from "react-hot-toast";

const Pay = () => {
  const navigate = useNavigate();
  const { minPay, setMinPay, maxPay, setMaxPay, rate, setRate } = usePay();
  const payType = "Range";

  const isFormValid =
    minPay !== "" && maxPay !== "" && parseInt(minPay) <= parseInt(maxPay);

  const handleContinue = () => {
    if (!isFormValid) {
      toast.error("Please enter a valid pay range.");
      return;
    }

    navigate("/Finalization");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-4xl p-6 rounded-lg">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">
          Add pay and benefits
        </h1>

        <div className="space-y-6">
          <div>
            <h2 className="text-lg font-medium text-gray-700 mb-2">Pay</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 items-end">
              <div className="flex flex-col">
                <label className="text-sm text-gray-600 mb-1">
                  Show pay by
                </label>
                <select
                  className="border border-gray-300 rounded-md px-3 py-2"
                  value={payType}
                  disabled
                >
                  <option value="Range">Range</option>
                </select>
              </div>

              <div className="flex flex-col relative">
                <label className="text-sm text-gray-600 mb-1">Minimum</label>
                <span className="absolute mt-8 left-3 font-bold text-black">
                  ₦
                </span>
                <input
                  type="number"
                  className="border border-gray-300 rounded-md px-3 py-2 ps-8"
                  placeholder=""
                  value={minPay}
                  onChange={(e) => setMinPay(e.target.value)}
                />
              </div>

              <div className="hidden md:flex items-center justify-center h-full pt-6 text-black">
                to
              </div>

              <div className="flex flex-col relative">
                <label className="text-sm text-gray-600 mb-1">Maximum</label>
                <span className="absolute mt-8 left-3 font-bold text-black">
                  ₦
                </span>
                <input
                  type="number"
                  className="border border-gray-300 rounded-md px-3 py-2 ps-8"
                  placeholder=""
                  value={maxPay}
                  onChange={(e) => setMaxPay(e.target.value)}
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm text-gray-600 mb-1">Rate</label>
                <select
                  className="border border-gray-300 rounded-md px-3 py-2"
                  value={rate}
                  onChange={(e) => setRate(e.target.value)}
                >
                  <option>per year</option>
                  <option>per month</option>
                  <option>per week</option>
                  <option>per day</option>
                  <option>per hour</option>
                </select>
              </div>
            </div>
          </div>

          <div className="flex justify-between mt-10">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 border border-blue-600 text-blue-600 px-6 py-2 rounded-full hover:bg-blue-50 transition"
            >
              <ChevronLeft size={18} />
              Back
            </button>

            <button
              onClick={handleContinue}
              disabled={!isFormValid}
              className={`flex items-center gap-2 px-6 py-2 rounded-full transition ${
                isFormValid
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              Continue
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pay;
