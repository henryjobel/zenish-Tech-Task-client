import { Link } from "react-router-dom";
// import logo from "../../../assets/Anolipi-Logo.webp";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div>
        <footer className="text-black bg-white">
          <div className="container py-10 mx-auto">
            <div className="flex flex-col items-center text-center">
              <Link to={"/"} className="flex items-center">
                <h1 className="text-4xl font-bold uppercase black">
                  Task<span className="text-[#FEA946]">y.</span>
                </h1>
                {/* <img src={logo} className="h-12 mr-3" alt="" /> */}
              </Link>

              <div className="flex flex-wrap justify-center mt-6 ">
                <Link to={'/'} className="mx-4 text-black transition-colors duration-300 hover:text-[#524FF5]">
                  Home
                </Link>
                <Link to={'/whyTasky'} className="mx-4 text-black transition-colors duration-300 hover:text-[#524FF5]">
                  Why Tasky
                </Link>

                <Link to={'/faq'} className="mx-4 text-black transition-colors duration-300 hover:text-[#524FF5]">
                  FAQ
                </Link>
                <a
                  href="#"
                  className="mx-4 text-black transition-colors duration-300 hover:text-[#524FF5]"
                >
                  Privacy Policy
                </a>
              </div>
            </div>

            <div className="px-6 -mb-2">
              <hr className="my-8 text-blue-700" />

              <div className="flex flex-col items-center sm:flex-row sm:justify-between">
                <p className="text-black dark:text-gray-300">
                  <Link to={"/"}>
                    {" "}
                    <span className="font-heading">© ZenishTech 2023</span>
                  </Link>
                  . All Rights Reserved.
                </p>

                <div className="flex mt-3 -mx-2 md:mt-0">
                  <a
                    href="https://github.com/henryjobel"
                    className="mx-2 text-primaryColor text-xl transition-colors duration-300 dark:text-gray-300 hover:text-[#524FF5] dark:hover:text-blue-400"
                    aria-label="GitHub"
                  >
                    <FaGithub></FaGithub>
                  </a>
                  <a
                    href="https://www.facebook.com/JobelHenryS/"
                    className="mx-2 text-xl transition-colors duration-300 dark:text-gray-300 hover:text-[#524FF5] text-primaryColor dark:hover:text-blue-400"
                    aria-label="GitHub"
                  >
                    <FaFacebook />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/henry-joy-saha-6337981ab/"
                    className="mx-2 text-xl transition-colors duration-300 dark:text-gray-300 hover:text-[#524FF5] text-primaryColor dark:hover:text-blue-400"
                    aria-label="Linkedin"
                  >
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
