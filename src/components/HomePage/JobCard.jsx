import { Briefcase, Clock, MapPin, Bookmark, Wallet } from "lucide-react";

export default function JobCard({
  postedAt,
  title,
  company,
  category,
  type,
  salary,
  location,
}) {
  return (
    <div className="border rounded-xl p-5 mb-6 shadow-sm flex justify-between items-start hover:shadow-md transition">
      <div>
        <p className="text-xs text-blue-500 mb-1 bg-blue-200 rounded-md p-1 w-fit">
          {postedAt}
        </p>
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-sm text-gray-500 mb-2">{company}</p>

        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
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
      </div>

      <div className="flex flex-col items-end gap-2">
        <button className="bg-emerald-500 text-white px-4 py-2 rounded-md hover:cursor-pointer hover:bg-emerald-600 text-sm">
          Job Details
        </button>
        <Bookmark className="text-gray-400 hover:text-emerald-500 cursor-pointer" />
      </div>
    </div>
  );
}
