import Button from "../components/HomePage/Button";
import NewsAndBlog from "../components/HomePage/NewsandBlog";
import HeroSection from "../components/HomePage/HeroSection";
import Footer from "../components/HomePage/Footer";
import { useNavigate } from "react-router";

const HomePage = () => {
  const navigate = useNavigate();
  const jobs = () => {
    navigate("/Jobs");
  };
  return (
    <div>
      <HeroSection />

      <div className="m-6 ">
        <h2 className="font-bold text-3xl sm:text-4xl">
          Recent Jobs Available
        </h2>

        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 sm:gap-0 mt-3">
          <p className="text-black text-base sm:text-lg">
            Explore the latest job opportunities tailored for you
          </p>
          <button
            className="text-blue-500 underline text-base sm:text-xl hover:cursor-pointer hover:text-blue-400"
            onClick={jobs}
          >
            View all
          </button>
        </div>
      </div>

      <div className="mt-10 flex flex-col-reverse lg:flex-row items-center justify-center gap-10 px-4">
        <div className="text-center lg:text-left lg:max-w-xl">
          <h3 className="font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight">
            Good Life Begins With <br className="hidden sm:block" />A Good
            Company
          </h3>
          <p className="text-sm sm:text-base lg:text-lg mt-4">
            Discover your next career move with us. We connect you
            <br className="hidden sm:block" />
            with top companies and exciting
            <br className="hidden sm:block" />
            job opportunities.
          </p>
          <div className="mt-5 flex flex-col sm:flex-row sm:items-center sm:gap-6 gap-3 justify-center lg:justify-start">
            <Button label="Search Job" className="rounded-xl" />
          </div>
        </div>

        <div className="w-full max-w-md lg:max-w-lg">
          <img
            src="/img/board.jpeg"
            alt="Job Board"
            className="w-full rounded-2xl"
          />
        </div>
      </div>
      <div className="bg-blue-100 mt-10">
        <NewsAndBlog />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
