import { motion } from "framer-motion";
import JobCard from "./JobCard";

const jobs = [
  {
    postedAt: "10 min ago",
    title: "Forward Security Director",
    company: "Bauch, Schuppe and Schulist Co",
    category: "Hotels & Tourism",
    type: "Full time",
    salary: "$40000-$42000",
    location: "New-York, USA",
  },
  {
    postedAt: "12 min ago",
    title: "Regional Creative Facilitator",
    company: "Wisozk - Becker Co",
    category: "Media",
    type: "Part time",
    salary: "$28000-$32000",
    location: "Los Angeles, USA",
  },
  {
    postedAt: "15 min ago",
    title: "Internal Integration Planner",
    company: "Mraz, Quigley and Feest Inc.",
    category: "Construction",
    type: "Full time",
    salary: "$48000-$50000",
    location: "Texas, USA",
  },
  {
    postedAt: "24 min ago",
    title: "District Intranet Director",
    company: "VonRueden - Weber Co",
    category: "Commerce",
    type: "Full time",
    salary: "$42000-$48000",
    location: "Florida, USA",
  },
  {
    postedAt: "26 min ago",
    title: "Corporate Tactics Facilitator",
    company: "Cormier, Turner and Flatley Inc",
    category: "Commerce",
    type: "Full time",
    salary: "$38000-$40000",
    location: "Boston, USA",
  },
];

const jobCardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

export default function JobList() {
  return (
    <div className="space-y-6 px-4">
      {jobs.map((job, index) => (
        <motion.div
          key={index}
          custom={index}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={jobCardVariants}
          whileHover={{ scale: 1.02 }}
          className="transition-transform duration-300"
        >
          <JobCard {...job} />
        </motion.div>
      ))}
    </div>
  );
}
