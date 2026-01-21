import { motion } from "framer-motion";
import { BriefcaseBusiness, Building2, Users } from "lucide-react";
import NavBar from "./NavBar";

const iconMap = {
  BriefcaseBusiness,
  Users,
  Building2,
};

const icons = [
  { id: "1", icon: "BriefcaseBusiness", info: "25,850 Jobs Available" },
  { id: "2", icon: "Users", info: "10,250 Candidates" },
  { id: "3", icon: "Building2", info: "18,400 Companies" },
];

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const iconVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15 + 0.8, duration: 0.5 },
  }),
};

export default function HeroSection() {
  return (
    <div className="relative w-full overflow-hidden">
      <motion.img
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        src="/img/Job.jpeg"
        alt="background"
        className="w-full h-full md:h-svw object-fill md:object-cover absolute top-0 blur-xs"
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 1 }}
        className="inset-0 bg-gray-800 z-10 w-full h-full md:h-svw object-fill md:object-cover absolute top-0 blur-xs"
      />

      <NavBar />

      <div className="z-20 relative flex flex-col items-center justify-center px-4 text-white text-center mt-20 md:mt-32 space-y-6">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold"
          initial="hidden"
          animate="visible"
          custom={0}
          variants={textVariants}
        >
          Find Your Dream Job Today!
        </motion.h1>

        <motion.p
          className="text-base sm:text-lg md:text-xl font-medium max-w-2xl"
          initial="hidden"
          animate="visible"
          custom={1}
          variants={textVariants}
        >
          We connect talented proffessionals with trusted companies across
          multiple industries. Whether you're searching for your first role or
          your next big career move, our platform makes it easy to discover
          opportunities, aplly with confidence, and take control of your career
          journey.
        </motion.p>

        <motion.div
          className=" flex gap-6 mt-8 lg:mb-34"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {icons.map(({ id, icon, info }, index) => {
            const IconComponent = iconMap[icon];
            return (
              <motion.div
                key={id}
                custom={index}
                variants={iconVariants}
                className="flex items-center flex-col justify-center"
                whileHover={{ scale: 1.1 }}
              >
                <IconComponent className="text-white w-8 h-8 mb-1" />
                <span className="text-white flex flex-col text-lg">{info}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
