import { motion } from "framer-motion";

const PageLoading = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-800"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.h1
        className="text-4xl font-extrabold text-blue-600 mb-6"
        animate={{ y: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
      >
        JobBoardX
      </motion.h1>

      <motion.div
        className="w-16 h-16 rounded-full border-t-4 border-blue-500 border-solid animate-spin mb-4"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
      />

      <motion.p
        className="text-lg text-gray-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Loading, please wait...
      </motion.p>
    </motion.div>
  );
};

export default PageLoading;
