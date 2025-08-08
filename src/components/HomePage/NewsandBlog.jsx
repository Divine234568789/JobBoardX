import { motion } from "framer-motion";
const blogData = [
  {
    id: 1,
    type: "News",
    date: "30 March 2024",
    title:
      "Revitalizing Workplace Morale: Innovative Tactics For Boosting Employee Engagement In 2024",
    image: "/img/team2.jpeg",
  },
  {
    id: 2,
    type: "Blog",
    date: "30 March 2024",
    title: "How To Avoid The Top Six Most Common Job Interview Mistakes",
    image: "/img/Job.jpeg",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const NewsAndBlog = () => {
  return (
    <div className="px-4 py-12 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">News and Blog</h2>
          <p className="text-gray-500 mt-1">
            Stay updated with the latest news and insights from the job market.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {blogData.map(({ id, type, date, title, image }, index) => (
          <motion.div
            key={id}
            className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 cursor-pointer"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={index}
            variants={cardVariants}
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative">
              <img
                src={image}
                alt={type}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <span className="absolute top-3 left-3 bg-teal-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                {type}
              </span>
            </div>
            <div className="p-4">
              <p className="text-gray-500 text-sm mb-1">{date}</p>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {title}
              </h3>
              <a
                href="#"
                className="text-teal-600 text-sm font-medium hover:underline flex items-center gap-1"
              >
                Read more <span>→</span>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default NewsAndBlog;
