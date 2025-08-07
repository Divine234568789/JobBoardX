import Navbar from "../components/HomePage/Navbar";

const AboutPage = () => {
  return (
    <div>
      <nav className="bg-black">
        <Navbar />
        <div className="text-white p-6 pb-15 font-bold text-2xl flex justify-center">
          About Us
        </div>
      </nav>
    </div>
  );
};

export default AboutPage;
