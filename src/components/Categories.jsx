import { CatCard } from "./CatCard";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useJobContext } from "../contexts/JobContext";

const categories = [
  { id: 1, Icon: "TreePine", Name: "Agriculture", Amount: 1254 },
  { id: 2, Icon: "Weight", Name: "Metal Production", Amount: 816 },
  { id: 3, Icon: "ShoppingBag", Name: "Commerce", Amount: 2082 },
  { id: 4, Icon: "HardHat", Name: "Construction", Amount: 1520 },
  { id: 5, Icon: "Luggage", Name: "Hotels & Tourism", Amount: 1022 },
  { id: 6, Icon: "GraduationCap", Name: "Education", Amount: 1496 },
  { id: 7, Icon: "Coins", Name: "Financial Services", Amount: 1529 },
  { id: 8, Icon: "Bus", Name: "Transport", Amount: 1244 },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

export default function Categories() {
  const navigate = useNavigate();
  const { setFilters } = useJobContext();

  const handleCategoryClick = (categoryName) => {
    setFilters((prev) => ({
      ...prev,
      category: categoryName,
    }));
    navigate("/jobs");
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 m-6">
      {categories.map((cat, index) => (
        <motion.div
          key={cat.id}
          custom={index}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          whileHover={{ scale: 1.05 }}
          className="transition-transform duration-300 cursor-pointer"
          onClick={() => handleCategoryClick(cat.Name)}
        >
          <CatCard {...cat} />
        </motion.div>
      ))}
    </div>
  );
}
