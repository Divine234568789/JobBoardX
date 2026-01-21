import { Phone, Mail, Clock, MapPin } from "lucide-react";
import NavBar from "../components/HomePage/NavBar";
import { useRef } from "react";
import toast from "react-hot-toast";

import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xclhlld",
        "template_kz1wfwb",
        form.current,
        "oiHOimoAiTzmjalki"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message sent!");
        },
        (error) => {
          console.log(error.text);
          toast.error("Failed to send message.");
        }
      );
  };
  return (
    <div>
      <div className="bg-black">
        <NavBar />
        <h3 className="font-bold text-3xl sm:text-4xl p-6 sm:p-8 text-white text-center">
          Contact Us
        </h3>
      </div>
      <div className="min-h-screen bg-white flex flex-col items-center px-4 py-12">
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              You Will Grow, You Will Succeed. We Promise That
            </h1>
            <p className="text-gray-600 mb-8">
              Pellentesque arcu facilisis nunc mi proin. Dignissim mattis in
              lectus tincidunt tincidunt ultrices. Diam convallis morbi
              pellentesque adipiscing.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <Phone className="text-green-600 w-6 h-6 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Call for inquiry</h3>
                  <p className="text-gray-600">+234-803-760-5458</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="text-green-600 w-6 h-6 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Send us email</h3>
                  <p className="text-gray-600">anyanwudee@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="text-green-600 w-6 h-6 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Opening hours</h3>
                  <p className="text-gray-600">Mon - Fri: 10AM - 10PM</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="text-green-600 w-6 h-6 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Office</h3>
                  <p className="text-gray-600">
                    19 North Road Piscataway, NY 08854
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-green-50 rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-2">Contact Info</h2>

            <form className="space-y-4">
              <input
                type="name"
                placeholder="Your name"
                className="border rounded-md px-3 py-2 w-full"
              />
              <input
                type="email"
                placeholder="Your E-mail address"
                className="border rounded-md px-3 py-2 w-full"
              />
              <input
                type="message"
                placeholder="Your Message"
                className="border rounded-md px-3 py-2 w-full"
              />

              <button
                type="submit"
                className="bg-green-600 text-white px-4 py-2 rounded-md hover:cursor-pointer hover:bg-green-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="max-w-6xl w-full mt-12">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3020.8288475557595!2d-73.84603572356873!3d40.720646871387205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c26091b8c6e4ff%3A0x5db16cbb9c7dfc67!2sForest%20Hills%20Stadium!5e0!3m2!1sen!2sus!4v1691405000000!5m2!1sen!2sus"
            className="w-full h-64 md:h-96 rounded-lg border-none"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
