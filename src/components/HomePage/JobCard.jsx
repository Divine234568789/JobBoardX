import { Briefcase, Clock, MapPin, Wallet } from "lucide-react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

export default function JobCard({
  id,
  postedAt,
  title,
  company,
  description,
  category,
  type,
  salary,
  location,
}) {
  const navigate = useNavigate();

  const handleApply = () => {
    navigate(`/apply/${id}`);
  };

  return (
    <div className="border rounded-xl p-5 mb-6 shadow-sm flex justify-between items-start hover:shadow-md transition">
      <div className="w-full">
        <p className="text-xs text-blue-500 mb-1 bg-blue-200 rounded-md p-1 w-fit">
          {postedAt}
        </p>

        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-sm text-blue-500 mb-2 font-bold">{company}</p>

        <p className="text-sm text-gray-500 mb-3">{description}</p>

        <div className="flex flex-wrap gap-4 text-sm text-gray-600 items-center">
          <div className="flex items-center gap-1">
            <Briefcase size={16} className="text-blue-500" />
            <span>{category}</span>
          </div>

          <div className="flex items-center gap-1">
            <Clock size={16} className="text-blue-500" />
            <span>{type}</span>
          </div>

          <div className="flex items-center gap-1">
            <Wallet size={16} className="text-blue-500" />
            <span>{salary}</span>
          </div>

          <div className="flex items-center gap-1">
            <MapPin size={16} className="text-blue-500" />
            <span>{location}</span>
          </div>
        </div>

        <div className="mt-4">
          <Button label="Apply Now" onClick={handleApply} />
        </div>
      </div>
    </div>
  );
}
